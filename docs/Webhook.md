# Webhook Controller

Method | HTTP request
------------- | -------------
[**get**](Webhook.md#get) | **GET** /veem/v1.1/webhooks/{webhook_id}
[**list**](Webhook.md#list) | **GET** /veem/v1.1/webhooks

## get

Retrieves a single webhook, based on specified a webhook ID.

#### Return

Returns a single `Webhook` [model](../lib/models/WebhookResponse.js) instance.

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

Returns a list of `Webhook` [model](../lib/models/WebhookResponse.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.webhook.list()
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
