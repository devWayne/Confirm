var expect = chai.expect;

describe('Initialization', function() {
 
  var confirm;

  before(function() {
	confirm = new Confirm();
  });
  
  after(function() {
        confirm.remove();
  }); 
 
  it('should initialize the main object', function() {	 
	expect(confirm.el).to.equal(document.getElementsByClassName('cl-confirm')[0]);
  });

});

describe('API', function() {
 
  var confirm;

  before(function() {
	confirm = new Confirm();
  });

 
  it('remove()', function() {
 	confirm.remove();	  
	expect(document.getElementsByClassName('cl-confirm')[0]).to.be.empty;
	expect(document.getElementsByClassName('cl-overlay')[0]).to.be.empty;
  });
  
});

describe('Utilities', function() {
 
  var confirm;

  before(function() {
	confirm = new Confirm({ 
		"leftBtn": "leftBtn",
    		"rightBtn": "rightBtn",
    		"content": "Test Content",
    		"leftCb": function() {

    		},
    		"rightCb": function() {

		},
    		animateClass:'bounceIn',
   		container: document.body
	});
  });

  after(function() {
        confirm.remove();
  }); 
 
  it('should set leftBtn name', function() {
	var $btns = $('.cl-confirm .alert_buttons').children();
	expect($btns.eq(0).text()).to.equal("leftBtn");
  });

  it('should set rightBtn name', function() {
	var $btns = $('.cl-confirm .alert_buttons').children();
	expect($btns.eq(1).text()).to.equal("rightBtn");
  });

  it('should set content text', function() {
	var $content = $('.cl-confirm .alert_content');
	expect($content.text()).to.equal("Test Content");
  });

  it('should set animateClass', function() {
	var $confirm = $('.cl-confirm');
	expect($confirm.hasClass('bounceIn')).to.be.true;
  });

  it('should set container', function() {
	var $confirm = $('.cl-confirm');
	expect($confirm.parent()[0]).to.equal(document.body);
  });
});

