/*09est.js .throw() (aka Edge cases) / passing your error handling to .throw()  / eg. missing argument on callback function leads to error handling */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/* .throw() (aka Edge cases) / passing your error handling to .throw()  / eg. missing argument on callback function leads to error handling */
const iKexpect = require('chai').expect;

describe('iK 09.js - iKfunction9 = passing error handling to .throw()', function() {
	const iKfunc9 = require('../09.js').iKfunction9;

	it('iK should throw error if only one arguments is entered in the callback function', function() {
		const iKfunction9Err = function () { iKfunc9(1) };	/*1+*/

		iKexpect( iKfunction9Err ).to.throw();  /*2+*/
		iKexpect( iKfunction9Err ).to.throw('iKerrorHandling1');  /*3+*/
	});

}); /*END describe() */


/*1+ VIP you must wrap your constructor (eg. callback function / objects / variables) within a function to pass down to iKexpect(), in order to use the chai .throw() method.
	+\ VIP you must trigger your constructor to throw an error, otherwise it will not work.
2+ You insert you constructor wrap in a function within iKexpect. And the expected output should be throw error.
2+ .throw() will confirm your error handling is working correctly.
3+ BIM You could also be specific and detect the correct error message that was pass down by the error handling for it to pass the test.
	+\ BIM error handling message that was thrown must be the same as the string within .throw() otherwise it will not pass the test. */


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
		const iKpromise1 = await new Promise(function(resolve, reject) {
		});
		return iKpromise1;
	} catch(iKcatchError1) {
		throw new Error("iKerror >>> ", iKcatchError1);
	};
};
	iKasyncFunction1();	*/