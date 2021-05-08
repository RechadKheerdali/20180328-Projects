/*10test.js producing stub asynchronous function to test stub asynchronous code data / done() */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*producing stub asynchronous function to test stub asynchronous code data / done() */
/* BIM asynchronous stubs are very limited, you can only really use them on simply asynchronous codes such as setTimeout() / Promise object / etc...
     +\  BIM not really ideal to use as ajax / xhr object / fetch() / etc... because it is unpredictable to know what kind of response object data ajax will return and how you will navigate through it.
          +\ iK? I believe you could use sinon.js library to produce ajax / event / etc... as your fake data to simulate what would your real code entail.
               +\ iK research sinnon.js library to use.
+\ no real code function required on the real code file to create the stub version for now. */
const iKexpect = require('chai').expect;

describe('iK ./test/10test.js = asynchronous testing', function() {
	let iKboolean;

	function iKasynchronousFunc (iKcallbackP) {	/*1+*/
		setTimeout(function() {	/*2+*/
			iKcallbackP();	/*3+*/
		}, 1000);	/*4+*/
	};

	before(function() {
		iKboolean = false;	/*5+*/
	});

	it('iK testing .done() after iKexpect() which sees if iKboolean is still false', function(done) {  /*6+*/
		iKexpect( iKboolean ).to.be.false;  /*7+*/
		done();	/*8+*/
	});

	it('iK setTimeout() function to change variable iKboolean false to true', function(done) {
		iKasynchronousFunc(function () {  /*9+*/
			iKboolean = true; /*10+*/
			iKexpect( iKboolean ).to.be.true; /*11+*/
			done();
		});
	});
}); /*END describe() */


/*1+  BIM you will need to create a function with a callback parameter so that you can call upon the callback argument.
	+\  BIM your iKcallbackP will be a function that returns the predicted value you would be expecting.
1+  you could also set you iKasynchronousFunc function declaration to be within the mocha hooks.
	+\  But you would need to intialize your iKasynchronousFunc outside the hook first. Then insert the iKasynchronousFunc function within the hooks as function expression. Otherwise error.
2+  BIM use setTimeout() to place your iKcallbackP within. This will simulate the predicted value of the iKcallbackP to suddently behave as asynchronous, and go at the back of the call stack (js engine) cue.
3+  the iKcallbackP will return the value just like a real asynchronous code output because it is being delayed 1000ms.
4+  iK you could probably reduce the ms to 1ms if you wanted to.
	+\  you will see the time being reflect on the test result timer.
5+  fake helper.
6+  you must use the done parameter if you want to use done() method.
7+  VIP you must place iKexpect() before done() for it to work properly.
8+  VIP done() should be the last code you place within your test spec for it to ensure the codes run in synchronous order.
	+\  if you place done() before iKexpect() , than iKexpect() will always be true no matter what the chain api expectations are, therefore giving you false information without you knowing it.
		+\  iK that is because done() will convert any codes before it (within its scope) to run synchronously.
          	+\  but any codes after done() will behave as normal, and very likely run before you asynchronous codes which is why you will get confusing return expectation.
9+  remember that this function is the iKcallbackP argument.
	+\  VIP notice that iKexpect() and done() is within the iKcallback function.
		+\  BIM if you place them iKexpect() outside the iKcallback function, than your iKasynchronousFunc() output will be ignored because done() will not let it to finish.
			+\  VIP however you could optionally place the done() method outside and after the asychrnonousFunc() , and it will still work as normal.
10+  your codes you would like to accomplish.
11+ you must include iKexpect() to be part of the codes otherwise it will always result the test as passing.
+\  iK according to mocha, you could use async/await function / promise object too.
	+\  iK async/await function does not work in the demo when I tried. I do not why, as I have tried almost everything including setTimeout() as await .
		+\  iKBIM stick with done() as it is simple enough to use. */


 /*OP */
/* **** d */
/*------------------- /node Main Codes ///////////////////////*/ /* 
	kb.ascii("a", "b");
	kb.patternIndexNumber( iKarray, searchThisValue );
	kb.cloneObject( iKobject );
	kb.getJson( apiUrlP );

const iKvar1 = "iKV1";
const iKarray1 = ["iKaV1", "iKaV2", "iKaV3"];
const iKobject1 = {iKoProperty1: "iKoV1", iKoProperty2: "iKoV2", iKoProperty3: "iKoV3"};
const iKmap1 = new Map([ ["iKmapProp1", "iKmapV1"], ["iKmapProp2", "iKmapV2"], ["iKmapProp3", "iKmapV3"] ]);
const iKset1 = new Set([ "iKsetV1", "iKsetV2", "iKsetV3" ]);
const iKconsFunction1 = function ( {iKpar1, iKpar2, iKpar3} = {} ) {
	this.iKconsFuncProp1 = iKpar1 || "iKdefaultPar1";
	this.iKconsFuncProp2 = iKpar2 || "iKdefaultPar2";
	this.iKconsFuncProp3 = iKpar3 || "iKdefaultPar3";
};
	const iKconsObject1 = new iKconsFunction1();
const iKasyncFunction1 = async () => {
	try {
		const iKpromise1 iKcallbackP= await new Promise(function(resolve, reject) {
		});
		iKcallbackP();
	} catch(iKcatchError1) {
		throw new Error("iKerror >>> ", iKcatchError1);
	};
};
	iKasyncFunction1();	*/