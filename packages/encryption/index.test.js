import { encryptAES, decryptAES, generateKey, generateKeyFromPasswordAndSalt } from './index.js';

test('encrypt and decrypt', async () => {
	const secret = 'my secret';
	const key = await generateKey();
	const encrypted = await encryptAES(key, secret);
	const decrypted = await decryptAES(key, encrypted);

	expect(decrypted).toBe(secret);
});

test('encrypt and decrypt with password', async () => {
	const secret = 'my secret';
	const password = 'password';
	const salt = 'salt';
	const key = await generateKeyFromPasswordAndSalt(password, salt);
	const encrypted = await encryptAES(key, secret);
	const decrypted = await decryptAES(key, encrypted);

	expect(decrypted).toBe(secret);
});

test('password to key consistency', async () => {
	const secret = 'my secret';
	const password = 'password';
	const salt = 'salt';
	const key1 = await generateKeyFromPasswordAndSalt(password, salt);
	const key2 = await generateKeyFromPasswordAndSalt(password, salt);
	const encrypted = await encryptAES(key1, secret);
	const decrypted = await decryptAES(key2, encrypted);

	expect(decrypted).toBe(secret);
});

test('random key generation', async () => {
	const secret = 'my secret';
	const key1 = await generateKey();
	const key2 = await generateKey();
	const encrypted = await encryptAES(key1, secret);

	// node style:
	try {
		await decryptAES(key2, encrypted);
	} catch (error) {
		expect(error).toBeInstanceOf(DOMException);
	}
	// bun style:
	// expect(() => decryptAES(key2, encrypted)).toThrow();
});
