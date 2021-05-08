/*02 using chai expect() for bdd without mocha */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using chai expect() for bdd without mocha */
/*must use command node 02.js for you to see the result on the console */
const iKexpect = require('chai').expect;	/*1+*/

iKexpect(true).to.be.true;	/*2+*/
iKexpect(true).to.be.false; /*3+*/


/*1+ we will be using the expect() assertion style from chai. so we do not need to use any other library within chai.
	+\ the other 2 would be 'assert' and 'should' .
2+	when you run node 02.js on terminal, you will get no error because true is true.
3+ but you will get error because true was expected to be false. */


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