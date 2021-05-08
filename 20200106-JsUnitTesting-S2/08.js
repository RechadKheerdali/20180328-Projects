/*08 using mock data for test spec / setting up mock data for test spec / before() / after() / testing function if an item exist in an array*/
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using mock data for test spec / setting up mock data for test spec / before() / after() / testing function if an item exist in an array */
/*the testing codes will be located on .test/08test.js */
const iKfunction8 = (iKmockObject, iKelement) => {	/*1+*/
	const [iKarray_1, iKitem] = [iKmockObject.iKarray1, iKelement]; /*2+*/

	return iKarray_1.indexOf( iKitem ) !== -1	/*3+*/
		?	true
		:	false;
}; /*END iKfunction8 */

module.exports = {iKfunction8};

/*1+ notice I am using an arrow function which is fine here and on the test file, but not usually recommended within unit testing because of the 'this' keyword.
2+ destructuring.
3+ using ternary operator.
	+\ notice the layout which makes it easier to read and understand.
3+ true if item exist in the array. */


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
const iKconsFunction1 = function ( {iKmockObject, iKelement, iKpar3} = {} ) {
	this.iKconsFuncProp1 = iKmockObject || "iKdefaultPar1";
	this.iKconsFuncProp2 = iKelement || "iKdefaultPar2";
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