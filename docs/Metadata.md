# Metadata Controller

Method | HTTP request
------------- | -------------
[**getCountryCurrencyMap**](Metadata.md#getCountryCurrencyMap) | **GET** /veem/public/v1.1/country-currency-code
[**getErrorCodes**](Metadata.md#getErrorCodes) | **GET** /veem/public/v1.1/errorcodes

## getCountryCurrencyMap

Retrieves a list of supported countries and currencies on the Veem platform.

#### Return

Returns a list of `CountryCurrency` [model](../lib/models/CountryCurrencyResponse.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.metadata.getCountryCurrencyMap()
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## getErrorCodes

Retrieves a list possible API error codes.

#### Return

Returns a list of `ErrorCode` [model](../lib/models/ErrorCodeResponse.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.metadata.getErrorCodes()
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
