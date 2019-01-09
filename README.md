# @senzing/rest-api-client-ng

## Overview
This project is a package that provides a Angular TypeScript REST client intended to be used as a dependency for other [https://senzing.com/senzing-api/](Senzing) projects like [https://www.npmjs.com/package/@senzing/sdk-components-ng](@senzing/sdk-components-ng).

This project should conform to the OAS schema defined in [https://github.com/Senzing/rest-api-proposal/blob/master/senzing-api.yaml](Senzing/rest-api-proposal)
https://raw.githubusercontent.com/Senzing/rest-api-proposal/master/senzing-api.yaml

## Installation
```bash
npm install @senzing/rest-api-client-ng --save
```

## Building from source

```bash
git clone git@github.com:Senzing/rest-api-client-ng.git
cd rest-api-client-ng
npm install
npm run build
npm run package
```

The steps above will checkout the repo and build the package to the ./dist/@senzing/rest-api-client-ng directory. The local package can then be statically installed by using first changing to the directory of your project and doing a `npm install ./relative/path/to/dist/@senzing/rest-api-client-ng/rest-api-client-ng.0.0.0.tgz` or npm link.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
