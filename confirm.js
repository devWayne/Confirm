(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var tpl = __webpack_require__(1);
	var Overlay = __webpack_require__(2).Overlay;
	var Css = __webpack_require__(3);

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
	    document.body.appendChild(this.el);

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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Css = __webpack_require__(3);

	var CSSObj = {

	    confirm_alert_CSS: {
	        'width': '280px',
	        'background': '#fff',
	        'border-radius': '10px',
	        '-webkit-border-radius': '10px',
	        'position': 'fixed',
	        'left': '50%',
	        'top': '50%',
	        'border': 'solid 1px #efefef',
	        'margin': '-50px 0 0 -140px',
	        'text-align': 'center',
	        'z-index': '10000'
	    },

	    alert_content_CSS: {
	        'padding': '20px',
	        'border-bottom': 'solid 1px #efefef'
	    },

	    alert_buttons_CSS: {
	        'font-size': '14px',
	        'height': '40px',
	        'line-height': '40px'
	    },

	    button_left_CSS: {
	        'color': '#08c',
	        'float': 'left',
	        'width': '50%',
	        'height': '100%',
	        'box-sizing': 'border-box',
	        '-webkit-box-sizing': 'border-box',
	        'text-decoration': 'none'
	    },

	    button_right_CSS: {
	        'color': '#08c',
	        'float': 'left',
	        'width': '50%',
	        'height': '100%',
	        'box-sizing': 'border-box',
	        '-webkit-box-sizing': 'border-box',
	        'border-left': 'solid 1px #efefef',
	        'text-decoration': 'none'
	    }

	}

	function tpl(opt) {
	    var EL, CONTENT, BTNS, leftBTN, rightBTN;

	    EL = document.createElement("div");
	    EL.classList.add('confirm_alert');
	    EL.classList.add('cl-confirm');
	    Css(EL, CSSObj.confirm_alert_CSS);

	    CONTENT = document.createElement("div");
	    CONTENT.classList.add('alert_content');
	    Css(CONTENT, CSSObj.alert_content_CSS);

	    BTNS = document.createElement("div");
	    BTNS.classList.add('alert_buttons');
	    Css(BTNS, CSSObj.alert_buttons_CSS);

	    leftBTN = document.createElement("a");
	    leftBTN.setAttribute('data-id', 'cancel');
	    Css(leftBTN, CSSObj.button_left_CSS);

	    rightBTN = document.createElement("a");
	    rightBTN.setAttribute('data-id', 'done');
	    Css(rightBTN, CSSObj.button_right_CSS);

	    BTNS.appendChild(leftBTN);
	    BTNS.appendChild(rightBTN);
	    EL.appendChild(CONTENT);
	    EL.appendChild(BTNS);

	    return {
	        el: EL,
	        content: CONTENT,
	        leftBtn: leftBTN,
	        rightBtn: rightBTN
	    };
	}

	module.exports = tpl;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Css = __webpack_require__(3);

	/**
	 * Constrcutor
	 * @param {Number} zIndex Description
	 * @return {Element} description
	 */
	function Overlay(opt) {
	    var opt = opt || {};
	    opt.zIndex = opt.zIndex || '200';
	    opt.trans = opt.trans || '0.6';
	    if(document.getElementsByClassName('cl-overlay').length > 0) return;
	    var ol = this.el = document.body.appendChild(createOverlay(opt.zIndex, opt.trans));
	    this.show();
	}

	/**
	 * @param {Number} zIndex Description
	 * @return {Element} description
	 */
	function createOverlay(zIndex, trans) {
	    var CSS = {
	        'top': '0',
	        'left': '0',
	        'width': '100%',
	        'height': '100%',
	        'background': 'rgba(0,0,0,' + trans + ')',
	        'z-index': zIndex,
	        'position': 'fixed',
	        'display': 'none'
	    };
	    var el = document.createElement('div');
	    el.classList.add('cl-overlay');
	    Css(el, CSS);
	    return el;
	};


	/**
	 * @return {void} description
	 */
	Overlay.prototype.show = function() {
	    Css(this.el, {
	        display: 'block'
	    });
	};

	/**
	 * @return {void} description
	 */
	Overlay.prototype.hide = function() {
	    Css(this.el, {
	        display: 'none'
	    });
	};

	module.exports = {
	    Overlay: Overlay
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * author:Vi
	 * waring: getcomputedstyle is not supported under IE8
	 * check http://caniuse.com/#feat=getcomputedstyle
	 */


	/**
	 * @param {Element} el Description
	 * @param {String} prop Description
	 * @param {String} val Description
	 * @return {void} description
	 */
	function Css(el, prop, val) {
	    if (!el) return;
	    else if (arguments.length == 2) {
	        if (typeof prop == 'object') {
	            setCssObj(el, prop)
	        } else {
	            return getCss(el, prop)
	        }
	    } else {
	        setCss(el, prop, val)
	    }
	}

	/**
	 * @param {Element} el Description
	 * @param {String} prop Description
	 * @return {void} description
	 */
	function getCss(el, prop) {
	    return getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : false;
	}

	/**
	 * @param {Element} el Description
	 * @param {String} prop Description
	 * @param {String} val Description
	 * @return {void} description
	 */
	function setCss(el, prop, val) {
	    if (typeof(val) == 'string') {
	        var css = prop + ":" + val + ';';
	        el.style.cssText += css;
	    }
	}

	/**
	 * @param {Element} el Description
	 * @param {Object} obj Description
	 * @return {void} description
	 */
	function setCssObj(el, obj) {
	    for (var key in obj) {
	        setCss(el, key, obj[key]);
	    }
	}

	true ? module.exports = Css : this[Css] = Css;


/***/ }
/******/ ])
});
;