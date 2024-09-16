import { arrayBufferToBase64, base64ToArrayBuffer } from '@witzbould/utils-array-buffer';

/**
 * Generates a cryptographic key using the specified algorithm parameters.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey#algorithm}
 * @param {object} [algorithmParams={ name: 'AES-GCM', length: 128 }] - The algorithm parameters for key generation.
 * @param {string} algorithmParams.name - The name of the algorithm to use for key generation.
 * @param {number} algorithmParams.length - The length of the key in bits.
 * @return {Promise<CryptoKey>} A promise that resolves to the generated cryptographic key.
 */
export const generateKey = (algorithmParams = { name: 'AES-GCM', length: 128 }) => globalThis.crypto.subtle.generateKey(
	algorithmParams,
	true,
	['encrypt', 'decrypt']
);

/**
 * Generates a cryptographic key from a password and salt using PBKDF2 and AES-GCM.
 *
 * @param {string} password - The password to derive the key from.
 * @param {string} salt - The salt to use in the key derivation process.
 * @return {Promise<CryptoKey>} A promise that resolves to the derived cryptographic key.
 */
export const generateKeyFromPasswordAndSalt = async (password, salt) => {
	const encoder = new TextEncoder();
	const keyMaterial = await globalThis.crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveKey']);
	const key = await globalThis.crypto.subtle.deriveKey(
		{ name: 'PBKDF2', salt: encoder.encode(salt), iterations: 100000, hash: 'SHA-256', },
		keyMaterial,
		{ name: 'AES-GCM', length: 256, },
		true,
		['encrypt', 'decrypt']
	);
	return key;
};

/**
 * Encrypts a given plaintext using AES encryption.
 *
 * @param {string} plainText - The plaintext to be encrypted.
 * @param {CryptoKey} key - The AES key to use for encryption. The key's algorithm name should be either 'AES-GCM' or 'AES-CBC'.
 * @return {Promise<string>} A promise that resolves to the encrypted text in the format 'iv:encryptedData', where both parts are base64 encoded.
 * @throws {Error} If the provided algorithm is not supported.
 */
export const encryptAES = async (plainText, key) => {
	let ivLength;
	switch (key.algorithm.name) {
		case 'AES-GCM': // AES-GCM typically uses a 12-byte IV
			ivLength = 12;
			break;
		case 'AES-CBC': // AES-CBC typically uses a 16-byte IV
			ivLength = 16;
			break;
		default:
			throw new Error('Unsupported algorithm: ' + key.algorithm.name);
	}
	const byteText = new TextEncoder().encode(plainText);
	const iv = globalThis.crypto.getRandomValues(new Uint8Array(ivLength));
	const encrypted = await globalThis.crypto.subtle.encrypt({ name: key.algorithm.name, iv }, key, byteText);
	return `${arrayBufferToBase64(iv)}:${arrayBufferToBase64(encrypted)}`;
};

/**
 * Decrypts a given AES encrypted text using the provided key.
 *
 * @param {string} cipherText - The AES encrypted text in the format 'iv:encrypted'.
 * @param {CryptoKey} key - The AES key used to encrypt the cipher.
 * @return {Promise<string>} - A promise that resolves to the decrypted text.
 */
export const decryptAES = async (cipherText, key) => {
	const [ivEncoded, encryptedEncoded] = cipherText.split(':');
	const iv = base64ToArrayBuffer(ivEncoded);
	const encrypted = base64ToArrayBuffer(encryptedEncoded);
	const decrypted = await globalThis.crypto.subtle.decrypt({ name: key.algorithm.name, iv }, key, encrypted);
	return new TextDecoder().decode(decrypted);
};
