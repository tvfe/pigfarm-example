'use strict';
const pigfarm = require("pigfarm.js");
const ReactDOM = require("react-dom/server");
const pigfarmFetcher = require("pigfarm-fetcher");
require("./requestors")(pigfarmFetcher);

// react 组件
let Index = require("../component/index/index.jsx");

// 配置这个直出服务的数据源和渲染方式
let pig = pigfarm({
	data: {
		title: {
			type: "request",
			action: {
				url: "http://data.video.qq.com/fcgi-bin/data?tid=294&idlist=p0382yhi66i&appid=10001001&appkey=c3c854ce2ca46a33&otype=json",

				// 生命周期管理
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
