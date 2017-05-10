'use strict';
module.exports = class extends React.Component {
	render() {
		let props = this.props;
		return (<div>{props.title}<img src="http://v.qq.com" onError={this.onError.bind(this)} /></div>);
	}
	onError() {
		console.error('index error');
	}
};