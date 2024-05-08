# FetchHelper

Collection of helper functions for fetch

## responseExtractContent

Extract the content of a Response from fetch-like request, based on the `Content-Type` header.\
It handles the content types application/json and text/*. Other content types are probably files and will thereby be returned as Blob.
