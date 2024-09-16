// @see @link{https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm_2}
// @see @link{https://nodejs.org/api/webcrypto.html#encryption-and-decryption}
// @see @link{https://nodejs.org/api/crypto.html#class-cipher}

import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

// const _algorithm = 'aes-256-cbc'; // Algorithm used for encryption
// const _secretKey = 'your-very-strong-secret-key'; // Must be 32 bytes for aes-256
// const _salt = 'your-salt'; // Salt for key derivation
// const _iv = randomBytes(16); // Initialization vector

// export function cipher(text: string): string {
//   const key = scryptSync(_secretKey, _salt, 32); // Derive a key from the secret key
//   const cipher = createCipheriv(_algorithm, key, _iv);
//   let encrypted = cipher.update(text, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   return `${_iv.toString('hex')}:${encrypted}`;
// }

// export function decipher(cipherText: string): string {
//   const [ivHex, encryptedText] = cipherText.split(':');
//   const key = scryptSync(_secretKey, _salt, 32);
//   const decipher = createDecipheriv(_algorithm, key, Buffer.from(ivHex, 'hex'));
//   let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');
//   return decrypted;
// }

// const algorithm = 'aes-128-gcm'; // Algorithm used for encryption
// const secretKey = 'your-16-byte-key'; // Must be 16 bytes for aes-128
// const salt = 'your-salt'; // Salt for key derivation

export const encrypt = (plaintext, encodingScheme = 'base64url', algorithm = 'aes-128-gcm', secretKey = 'your-16-byte-key', salt = 'your-salt') => {
	const key = scryptSync(secretKey, salt, 16); // Derive a 16-byte key from the secret key
	const iv = randomBytes(12); // Initialization vector for GCM should be 12 bytes
	const cipher = createCipheriv(algorithm, key, iv);
	let encrypted = cipher.update(plaintext, 'utf8', encodingScheme);
	encrypted += cipher.final(encodingScheme);
	const authTag = cipher.getAuthTag().toString(encodingScheme);
	return `${iv.toString(encodingScheme)}:${encrypted}:${authTag}`;
};

export const decrypt = (cipherText, encodingScheme = 'base64url', algorithm = 'aes-128-gcm', secretKey = 'your-16-byte-key', salt = 'your-salt') => {
	const [ivEncoded, encryptedText, authTagEncoded] = cipherText.split(':');
	const key = scryptSync(secretKey, salt, 16);
	const decipher = createDecipheriv(algorithm, key, Buffer.from(ivEncoded, encodingScheme));
	decipher.setAuthTag(Buffer.from(authTagEncoded, encodingScheme));
	let decrypted = decipher.update(encryptedText, encodingScheme, 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
};