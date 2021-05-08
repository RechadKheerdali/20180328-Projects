/*09 .throw() (aka Edge cases) / passing your error handling to .throw()  / eg. missing argument on callback function leads to error handling */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/* .throw() (aka Edge cases) / passing your error handling to .throw()  / eg. missing argument on callback function leads to error handling */
/*the testing codes will be located on .test/09test.js */
function iKfunction9 (iKnumber1, iKnumber2) {
	if ( !(iKnumber1 && iKnumber2) ) throw Error('iKerrorHandling1');  /*1+*/

	return iKnumber1 + iKnumber2;
};

module.exports = {iKfunction9};

/*1+ Your error handling must throw for chai to detect the throw . */

/*IK NEXT FILE IS ./test/10test.js , SO GO THERE FOR CONTINUED RECAP*/


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