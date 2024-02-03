# JsonParse

Wrapper around Json.parse() to catch any errors and return a Promise.\
The synchronous version returns an Object with data and error properties.\
If the parsing failed the error is set and undefined otherwise.
