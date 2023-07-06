/**
 *	Compress a string with browser native APIs into a binary string representation
 *
 * @param {string} data Input string that should be compressed
 * @param {'gzip'|'deflate'|'deflate-raw'} encoding Compression algorithm to use
 * @return {string} The compressed string, safe to use with `btoa`
 */
export function compress(data, encoding) {
	return (
		new Response(
			new Blob([new TextEncoder().encode(data)])
				.stream()
				.pipeThrough(new CompressionStream(encoding))
		)
			.arrayBuffer()
			.then((buffer) => Array.from(new Uint8Array(buffer), (x) => String.fromCodePoint(x)).join(''))
	);
}

/**
 * Decompress a binary string representation with browser native APIs in to a normal js string
 *
 * @param {string} data Binary string that should be decompressed, e.g. the output from `atob`
 * @param {'gzip'|'deflate'|'deflate-raw'} encoding Decompression algorithm to use
 * @return {string} The decompressed string
 */
export function decompress(data, encoding) {
	return (
		new Response(new Blob([Uint8Array.from(data, (m) => m.codePointAt(0))])
			.stream()
			.pipeThrough(new DecompressionStream(encoding))
		).text()
	);
}
