'use strict';
const request = require("request");

/**
 * 注册请求器，使pigfarm数据源配置里可以使用http等协议
 * @param fetcher
 */
module.exports = function (fetcher) {

	fetcher.registerRequestor('http', function (cfg, callback) {
		request(cfg.url, function (err, res) {

			err ? callback(err) : callback(null, parseBody('', res.body));
		})
	});

};



function parseBody(callbackName, body) {
	body && (body = body.trim());
	// jsonp
	if (callbackName && body && body.indexOf(callbackName) == 0) {
		var sliceend = -1;

		// 有分号的话多切一位
		if (body[body.length - 1] == ';') {
			sliceend = -2;
		}
		body = body.slice(callbackName.length + 1, sliceend);
	}
	// 具有qz服务器特色的返回 "QZOutputJson={}"
	if (body && body.indexOf('QZOutputJson') != -1) {
		body = body.slice(13, -1);
	}

	try {
		return JSON.parse(body)
	} catch(e) {
		throw new Error('parse jsonp body failed: ' + body)
	}
}