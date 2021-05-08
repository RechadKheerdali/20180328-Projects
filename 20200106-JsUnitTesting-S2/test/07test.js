/*07test.js importing file codes from ../07.js file to be tested with chai*/
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*importing file codes from ../07.js file to be tested with chai */
/*with mocha, you will still get the nice indentation of test result, while also keeping real file codes separate from testing file codes */
/* you would first type the testing codes here, and then slowly type the real codes in the real file, until there is no more errors.
+\ I used 2 describe() for both imported functions so that it is easier to understand on terminal. */
const iKexpect = require('chai').expect;

/*test suite 1 for iKfunction1 */
describe('iK 07.js - iKfunction1 test suite / testing uppercase', function() {
	const iKfunc1 = require('../07.js').iKfunction1;	/*1+*/

    it('iK testing if return value is string of iKfunction1', function() {
		iKexpect( iKfunc1('iKstring1') ).to.be.a('string');  /*2+*/
    });

	it('iK testing if return value is in uppercase of iKfunction1', function() { /*3+*/
		iKexpect( iKfunc1('iKstring2') ).to.equal('IKSTRING2'); 
    });
});


/*test suite 2 for iKfunction2 */
describe('iK 07.js - iKfunction2 test suite / testing truthyness', function() {
	const iKfunc2 = require('../07.js').iKfunction2;

	it('iK testing truthyness', function() {
		iKexpect( iKfunc2(true) ).to.be.true;
	});
});


/*1+ you must import the function in order to use it.
1+ it is usually wiser to only import 1 function per test suite ( describe() ).
2+ it is best practice to only type one expect() per test spec ( it() ).
	+\ however there are some circumstances where it is suitable to use multiple expect() on a test spec.
3+ you can use multiple it() (test spec) inside describe() (test suite).
	+\ you could even use describe() within describe() . It would only further indent the result layout on the terminal. */


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