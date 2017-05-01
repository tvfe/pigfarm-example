const http = require("http");
require('node-jsx').install({
	extension: '.jsx',
	additionalTransform: src=> {
		return 'const React = require("react");' + src;
	}
});

let pig = require("./pig.jsx");

http
	.createServer(function (req, res) {
		(async function() {
			try {
				let html = await pig();
				res.writeHead(200, {'content-type': 'text/html'});
				res.write(html);
			} catch(e) {
				res.writeHead(500, {'content-type': 'text/plain'});
				res.write(e.stack)
			}
			res.end();

		})();
	})
	.listen(80);