Toast [![Build Status](https://travis-ci.org/devWayne/Toast.svg?branch=master)](https://travis-ci.org/devWayne/Toast)
============
> Toast 

##Usage

```
var Confirm = require('cl-toast').Toast;
var _confirm = new Confirm();
```

##API

#### new Confirm(option)

```
option:{
    //left
    "leftBtn": "确定",
    "rightBtn": "取消",
    "content": "",
    leftCb: function(confirm) {

    },
    rightCb: function(confirm) {
	
    },
    animateClass:''
    container: document.body
}

```

