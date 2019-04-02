# ExchangeRate Controller

Method | HTTP request
------------- | -------------
[**quote**](exchange-rate.md#quote) | **POST** /veem/v1.1/exchangerates/quotes
[**quote (batch)**](exchange-rate.md#quote) | **POST** /veem/v1.1/exchangerates/quotes/batch

## quote

Submits a request to generate a single or multiple exchange rate quotes.

#### Return

Returns a single `ExchangeRate` [model](../lib/models/exchange-rate-response.js) instance if sending a single exchange rate request.
Returns batch instance if sending multiple exchange rate requests.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.exchangeRate.quote(<exchange_rate_request>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
