# Customer Controller

Method | HTTP request
------------- | -------------
[**list**](customer.md#list) | **GET** /veem/v1.1/customers

## list

Retrieves a list of Veem customers matching the provided email query.

#### Return

Returns a list of `Customer` [model](../lib/models/customer-response.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.customer.list(<email_query>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
