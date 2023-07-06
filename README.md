# Witzbould's Utils

Utility function that I find useful.

## AttrConvert

Converts html attributes to boolean and back.

## ClampValue

Clamp a value between min and max (inclusive).

## Debounce

Returns a function, that, as long as it continues to be invoked, will not
be triggered. The function will be called after it stops being called for
N milliseconds. If `immediate` is passed, trigger the function on the
leading edge, instead of the trailing.

## MapValueRange

Maps a value in an input range to an output range.

## Number2hex

Converts an unsigned byte sized integer into its hex representation.

## StringCompression

Compress or decompress a string with native browser APIs with 'gzip', 'deflate', or 'deflate-raw'.
Compatible to use with atob and btoa.

## Throttle

Returns a function, that, as long as it continues to be invoked, will only
trigger every N milliseconds. If `immediate` is passed, trigger the
function on the leading edge, instead of the trailing.

There is also a version that uses `requestAnimationFrame()`.



## Quick Notes

> It might be worth noting the difference between **throttling** and **debouncing**, as the terms are often confused.
> 	- A **debounced** function is called only once in a given period, delay milliseconds after its last invocation (the timer is reset on every call).
> 	- Whereas a **throttled** function is limited to be called no more than once every delay milliseconds.
>
> From <https://davidwalsh.name/javascript-debounce-function>
