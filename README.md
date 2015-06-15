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

```
