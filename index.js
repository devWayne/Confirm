var tpl = require('./lib/tpl');
var Overlay = require('cl-overlay').Overlay;
var Css = require('cl-css').Css;

var DEFAULT = {
    "leftBtn": "确定",
    "rightBtn": "取消",
    "content": "",
    "leftCb": function() {

    },
    "rightCb": function() {
        this.remove();
    },
    animateClass: '',
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

    this.opt = extend(DEFAULT, opt);

    //Element collection
    var tplEl = tpl(opt);
    this.el = tplEl.el;
    this.content = tplEl.content;
    this.content.textContent = this.opt['content'];
    this.leftBtn = tplEl.leftBtn;
    this.leftBtn.textContent = this.opt['leftBtn'];
    this.rightBtn = tplEl.rightBtn;
    this.rightBtn.textContent = this.opt['rightBtn'];
    this.opt.container.appendChild(this.el);

    if (this.opt.animateClass != undefined && this.opt.animateClass != '') {
        var classList = this.opt.animateClass.split(" ");
        if (classList && classList.length > 0) {
            classList.forEach(function(v, idx) {
                this.el.classList.add(v);
            }.bind(this));
        } else {
            this.el.classList.add(this.opt.animateClass)
        }
    }

    //Overlay
    var ol = this.ol = new Overlay();

    ol.el.addEventListener('click', function(e) {
        this.remove();
    }.bind(this));

    ol.el.addEventListener('touchstart', function(e) {
        this.remove();
    }.bind(this));


    //Bind event
    this.rightBtn.addEventListener('click', function(e) {
        var rightFunc = this.opt.rightCb.bind(this);
        rightFunc(this);
    }.bind(this));

    this.leftBtn.addEventListener('click', function(e) {
        var leftFunc = this.opt.leftCb.bind(this);
        leftFunc(this);
    }.bind(this))


}

/**
 * @return {void} description
 */
Confirm.prototype.remove = function() {
    this.opt.container.removeChild(this.el);
    this.ol.remove();
};

module.exports = {
    Confirm: Confirm
};
