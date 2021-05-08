/*07 exporting codes to be tested on .test/07test.js file using chai and mocha */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*exporting codes to be tested on .test/07test.js file using chai and mocha */
/*the testing codes will be located on .test/07test.js */

/*for test suite 1*/
function iKfunction1 ( iKpara1 ) {	/*1+*/
	iKpara1 = iKpara1.toUpperCase();
	return iKpara1;
};

/*for test suite 2*/
function iKfunction2 ( iKpara2 ) {
	return iKpara2;
};

module.exports = {iKfunction1, iKfunction2}; /*2+*/


/*1+ same codes as 04.js, converting arguments to uppercase.
2+ both functions are exported, allowing other files to use them required.
2+ notice that I used an object to export them.
	+\ however I am unable to rename them. */


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