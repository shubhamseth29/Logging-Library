# Logging-Library

## Description

This is a logging library inspired from other libraries available , it can support multiple transports to log data at multiple places , here I jave added firebase as an additional transport other than logging to console and a local file.
We can add many other like datadog , mongoDB etc. to transports. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage

A file named logger.ts can be imported in your project and all methods of library can be used from there. An example implmentation is present in index.ts file at root level.
In this parsing from TS to JS is done while build time to run the code in JS environment.
