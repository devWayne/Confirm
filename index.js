var tpl = require('./tpl');

var DEFAULT = {
	"dbtn":"确认",
	"cbtn":"取消",
	"content":"",
	success(){

	},
	cancel(){

	},
	container:document.body
}

function Toast(){
	var el = tpl();
}

module.exports = Toast;
