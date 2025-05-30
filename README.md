# @senzing/rest-api-client-ng

If you are beginning your journey with [Senzing],
please start with [Senzing Quick Start guides].

You are in the [Senzing Garage] where projects are "tinkered" on.
Although this GitHub repository may help you understand an approach to using Senzing,
it's not considered to be "production ready" and is not considered to be part of the Senzing product.
Heck, it may not even be appropriate for your application of Senzing!

[![npm version]](https://badge.fury.io/js/%40senzing%2Frest-api-client-ng)
![GitHub release (latest SemVer)]
![GitHub package.json version]

## Overview

This project is a package that provides a Angular TypeScript REST client intended to be used as a dependency for other [Senzing API] projects like [@senzing/sdk-components-ng]. This project should conform to the OAS schema defined in [Senzing/senzing-rest-api-specification]

The usage for classes, models, and services can be found in the [documentation examples].

## Installation

```bash
npm install @senzing/rest-api-client-ng --save
```

## Building from source

```bash
git clone git@github.com:Senzing/rest-api-client-ng.git
cd rest-api-client-ng
npm install
npm run build:prod
npm run package
```

The steps above will checkout the repo and build the package to the ./dist/@senzing/rest-api-client-ng directory. The local package can then be statically installed by using first changing to the directory of your project and doing a `npm install ./relative/path/to/dist/@senzing/rest-api-client-ng/rest-api-client-ng.0.0.0.tgz` or npm link.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma].

[@senzing/sdk-components-ng]: https://www.npmjs.com/package/@senzing/sdk-components-ng
[documentation examples]: http://hub.senzing.com/rest-api-client-ng/
[GitHub package.json version]: https://img.shields.io/github/package-json/v/senzing/rest-api-client-ng?color=orange&logo=latest&logoColor=blue
[GitHub release (latest SemVer)]: https://img.shields.io/github/v/release/senzing/rest-api-client-ng?color=%2300c4ff&logo=latest%20tag
[Karma]: https://karma-runner.github.io
[npm version]: https://badge.fury.io/js/%40senzing%2Frest-api-client-ng.svg
[Senzing API]: https://senzing.com/senzing-api/
[Senzing Garage]: https://github.com/senzing-garage
[Senzing Quick Start guides]: https://docs.senzing.com/quickstart/
[Senzing]: https://senzing.com/
[Senzing/senzing-rest-api-specification]: https://github.com/senzing-garage/senzing-rest-api-specification/blob/master/senzing-rest-api.yaml
