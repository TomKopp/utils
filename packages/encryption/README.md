# Encryption

Encrypts and decrypts a string using **native** browser apis.\
This is geared towards easy use and thereby the configuration is quite limited with only 'AES-GCM'
and 'AES-CBC' being implemented.

There is a random 'AES-GCM' key generator and one that derives a key from a password and salt.

## Usage

### Encrypting a string

```js
import { encryptAES, generateKeyFromPasswordAndSalt } from '@witzbould/utils-encryption';

const secret = 'my secret';
const key = await generateKeyFromPasswordAndSalt('password', 'salt');
const encrypted = await encryptAES(key, secret);

console.log(encrypted);
```

### Decrypting a string

```js
import { decryptAES, generateKeyFromPasswordAndSalt } from '@witzbould/utils-encryption';

const key = await generateKeyFromPasswordAndSalt('password', 'salt');
const decrypted = await decryptAES(key, encrypted);

console.log(decrypted); // my secret
```

## Node.js

There is also a version with node apis.

```js
import { encrypt, decrypt } from '@witzbould/utils-encryption/node';

const plaintext = 'Hello, world!';

const encryptedText = encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);

const decryptedText = decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);
```
