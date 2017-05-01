'use strict';
const pigfarm = require("pigfarm.js");
const ReactDOM = require("react-dom/server");
const pigfarmFetcher = require("pigfarm-fetcher");
const request = require("request");

pigfarmFetcher.registerRequestor('http', function (cfg, callback) {
	request(cfg.url, function (err, res) {

	    err ? callback(err) : callback(null, parseBody('', res.body));
	})
});

let Index = require("./component/index/index.jsx");
let pig = pigfarm({
	data: {
		title: {
			type: "request",
			action: {
				url: "http://data.video.qq.com/fcgi-bin/data?tid=294&idlist=p0382yhi66i&appid=10001001&appkey=c3c854ce2ca46a33&otype=json",
				fixAfter: function (res) {
					return res.results[0].fields.title
				}
			}
		}
	},

	render: function (data) {
		return `
			<html>
				<head></head>
				<body>${ReactDOM.renderToString(<Index title={data.title} />)}</body>
			</html>
		`;
	}
});

module.exports = pig;

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