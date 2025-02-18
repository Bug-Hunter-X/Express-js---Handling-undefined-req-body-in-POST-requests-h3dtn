# Express.js - Handling undefined req.body in POST requests

This repository demonstrates a common error in Express.js applications where an unhandled error occurs when the `req.body` object is undefined in a POST request.  This typically happens when the client doesn't send the expected data in the request body, or if the middleware to parse the body isn't properly configured.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides the solution.

## Bug:
The issue is accessing properties of `req.body` without checking for their existence. If the client sends a POST request without the expected data (e.g., missing 'name' field), `req.body.name` will be undefined causing an error.