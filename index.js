var tpl = require('./lib/tpl');
var Overlay = require('cl-overlay').Overlay;
var Css = require('cl-css');

var DEFAULT = {
    "dbtn": "确定",
    "cbtn": "取消",
    "content": "",
    success: function() {

    },
    cancel: function() {
        this.hide();
        this.ol.hide();
    },
    container: document.body
}

/**
 * @param {Object} destination Description
 * @param {Object} source Description
 * @param {Boolean} override Description
 * @return {Object} description
 */
function extend(destination, source, override) {
    override = override ? override : true;
    for (var key in source) {
        if (override || !(key in destination)) destination[key] = source[key];
    }
    return destination;
};
/**
 * @param {Object} opt Description
 * @return {Element} description
 */
function Confirm(opt) {

    //Duplicate Check
    if (document.getElementsByClassName('cl-confirm').length > 0) return;

    opt = extend(DEFAULT,opt);

    //Element collection
    var tplEl = tpl(opt);
    this.el = tplEl.el;
    this.content = tplEl.content;
    this.content.textContent = opt['content'];
    this.leftBtn = tplEl.leftBtn;
    this.leftBtn.textContent = opt['dbtn'];
    this.rightBtn = tplEl.rightBtn;
    this.rightBtn.textContent = opt['cbtn'];
    container.appendChild(this.el);

    //Overlay
    var ol = this.ol = new Overlay();
    ol.el.addEventListener('click', function(e) {
        ol.hide();
        this.hide();
    }.bind(this));
    ol.el.addEventListener('touchstart', function(e) {
        ol.hide();
        this.hide();
    }.bind(this));


    //Bind event
    this.rightBtn.addEventListener('click', function(e) {
        var cancelFunc = opt.cancel.bind(this);
	cancelFunc();
    }.bind(this));

    this.leftBtn.addEventListener('click', function(e) {
        var successFunc = opt.success.bind(this);
	successFunc();
    }.bind(this))


}

/**
 * @return {void} description
 */
Confirm.prototype.show = function() {
    Css(this.el, {
        display: 'block'
    });
};

/**
 * @return {void} description
 */
Confirm.prototype.hide = function() {
    Css(this.el, {
        display: 'none'
    });
};

module.exports = {
    Confirm: Confirm
};
