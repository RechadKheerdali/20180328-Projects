/*06test.js test suite \ test spec \ describe() \ it() \ testing if mocha works fine*/
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*test suite \ test spec \ describe() \ it() \ testing if mocha works fine */
/*must use command npm test for you to see the result on the console, which I already set up in package.json file */
/*the result will show an outline, so it is easier to read and know where error occured */
const iKexpect = require('chai').expect;

describe('iK 06test.js / test suite', function() {	/*1+*/

	it('iKtest spec / also testing if mocha works accodingly', function() { /*2+*/
		iKexpect(true).to.be.true;	/*3+*/
	});

});


/*1+ describe() sets up the test suite for a function.
1+ you describe the function and insert an anonymouse function.
2+ it() sets up the test spec , which allows us to test a specific outcome we are looking for
2+ same as describe() , you describe the specific function of the test spec and insert an anonymous function.
3+ you test out your expect() codes here. */

/*IK NEXT FILE IS ../07test.js , SO GO THERE FOR CONTINUED RECAP*/


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