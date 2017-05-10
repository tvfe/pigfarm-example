const http = require("http");
require('node-jsx').install({
	extension: '.jsx',
	additionalTransform: src=> {
		return 'const React = require("react");' + src;
	}
});
let pig = require("./server/index.jsx");
let fs = require("fs");
http
	.createServer(function (req, res) {
		if (req.url == '/release.js') {
			fs.createReadStream(__dirname + '/.release/release.js').pipe(res);
			return;
		}
		(async function() {
			try {
				let html = await pig();
				res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});

				res.write(`<html><head></head><body><div id="root">`);

				res.write(html);

				res.write(`</div><script src="/release.js"></script></body></html>`);
				
			} catch(e) {
				res.writeHead(500, {'content-type': 'text/plain'});
				res.write(e.stack)
			}
			res.end();

		})();
	})
	.listen(80);