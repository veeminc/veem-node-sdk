// "use strict";
//
// exports.generateToken = function generateToken(config, cb) {
//
//     if (typeof config === "function") {
//         cb = config;
//         config = configuration.default_options;
//     } else if (!config) {
//         config = configuration.default_options;
//     } else {
//         config = utils.merge(config, configuration.default_options, true);
//     }
//
//     var payload = 'grant_type=client_credentials';
//     if (config.authorization_code) {
//         payload = 'grant_type=authorization_code&response_type=token&redirect_uri=urn:ietf:wg:oauth:2.0:oob&code=' + config.authorization_code;
//     } else if (config.refresh_token) {
//         payload = 'grant_type=refresh_token&refresh_token=' + config.refresh_token;
//     }
//
//     var basicAuthString = 'Basic ' + new Buffer(config.client_id + ':' + config.client_secret).toString('base64');
//
//     var http_options = {
//         schema: config.schema || configuration.default_options.schema,
//         host: utils.getDefaultApiEndpoint(config.mode) || config.host || configuration.default_options.host,
//         port: config.port || configuration.default_options.port,
//         headers: utils.merge({
//             'Authorization': basicAuthString,
//             'Accept': 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }, configuration.default_options.headers, true)
//     };
//
//     client.invoke('POST', '/v1/oauth2/token', payload, http_options, function (err, res) {
//         var token = null;
//         if (res) {
//             if (!config.authorization_code && !config.refresh_token) {
//                 var seconds = new Date().getTime() / 1000;
//                 token_persist[config.client_id] = res;
//                 token_persist[config.client_id].created_at = seconds;
//             }
//
//             if (!config.authorization_code) {
//                 token = res.token_type + ' ' + res.access_token;
//             }
//             else {
//                 token = res.refresh_token;
//             }
//         }
//         cb(err, token);
//     });
// };
