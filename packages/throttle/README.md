# Throttle

Returns a function, that, as long as it continues to be invoked, will only
trigger every N milliseconds. If `immediate` is passed, trigger the
function on the leading edge, instead of the trailing.

There is also a version that uses `requestAnimationFrame()`.
