var Css = require('cl-css');

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
