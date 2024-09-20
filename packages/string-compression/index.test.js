import { compress, decompress } from './index.js';

test('compress and decompress', async () => {
const input = '{"id":1,"todo":"Do something nice for someone you care about","completed":true,"userId":26}';

const compressedString = await compress(input, 'gzip');
const output = await decompress(compressedString, 'gzip');

expect(input).toBe(output);
});
