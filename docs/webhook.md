# Webhook Controller

Method | HTTP request
------------- | -------------
[**get**](webhook.md#get) | **GET** /veem/v1.1/webhooks/{webhook_id}
[**list**](webhook.md#list) | **GET** /veem/v1.1/webhooks

## get

Retrieves a single webhook, based on specified a webhook ID.

#### Return

Returns a single `Webhook` [model](../lib/models/webhook-response.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.webhook.get(<webhook_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## list

Retrieves a list of webhooks.

#### Return

Returns a list of `Webhook` [model](../lib/models/webhook-response.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.webhook.list()
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
