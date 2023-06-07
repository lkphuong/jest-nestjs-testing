# Testing with Jest and Nest.js

This repository contains an example of testing a Nest.js application using the Jest testing framework.

## Installation

To run the tests, make sure you have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/lkphuong/jest-nestjs-testing.git
2. Install the dependencies:
   
   ```
    cd repository
    npm install
## Running the Tests

To run the tests, execute the following command:

    npm test

## Test Examples

The AppController in the Nest.js application has been provided with some example test cases using various Jest matchers. Here are some of the matchers used in the tests:

- toBe: Checks for strict equality.
- not.toBe: Checks for inequality.
- toEqual: Checks for deep equality.
- not.toEqual: Checks for inequality.
- toBeDefined: Checks if a value is defined.
- toBeUndefined: Checks if a value is undefined.
- toBeNull: Checks if a value is null.
- toBeTruthy: Checks if a value is truthy.
- toBeFalsy: Checks if a value is falsy.
- toBeGreaterThan: Checks if a value is greater than another value.
- toBeGreaterThanOrEqual: Checks if a value is greater than or equal to another value.
- toBeLessThan: Checks if a value is less than another value.
- toBeLessThanOrEqual: Checks if a value is less than or equal to another value.
- toContain: Checks if an array or string contains a specific item.
- toContainEqual: Checks if an array contains an object equal to the expected value.
- toHaveLength: Checks the length of an array or string.
- toHaveProperty: Checks if an object has a specific property.
- toHaveBeenCalled: Checks if a mocked function has been called.
- toHaveBeenCalledTimes: Checks the number of times a mocked function has been called.
- toHaveBeenCalledWith: Checks if a mocked function has been called with specific arguments.
- toThrow: Checks if a function throws an error.
- toThrowError: Checks if a function throws a specific error.
- toMatch: Checks if a string matches a regular expression.
- not.toMatch: Checks if a string does not match a regular expression.
- toMatchObject: Checks if an object matches the structure of another object.
  Feel free to explore the provided test cases in the app.controller.spec.ts file for more examples.
