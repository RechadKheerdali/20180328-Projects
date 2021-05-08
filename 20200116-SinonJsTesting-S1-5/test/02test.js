/*02test use spy to wrap with existing method (aka. object.property(para) ) / insert the object within spy() / record arguments with spy */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const iKexpect = chai.expect;
chai.use(sinonChai);
/* + + + + + + + + + + node Main Codes ------------------------*/


/*use spy to wrap with existing method (aka. object.property(para) ) / insert the object within spy() / record arguments with spy */
describe('02test.js - spy within existing method and records argument values', function() {
	let iKobject1;

	beforeEach(function() {
		iKobject1 = {
			iKproperty1: function( iKpara1 ) {	/*1+*/
				this.iKpara1 = iKpara1;	/*2+*/
			}
		};
	});

	afterEach(function() {
		sinon.restore();	/*3+*/
	});

	it('iK correct argument given', function() {
		const iKspy = sinon.spy(iKobject1, 'iKproperty1');	/*4+*/

		iKobject1.iKproperty1('iKarg1');	/*5+*/

		iKexpect( iKspy ).have.been.calledWith('iKarg1');	/*6+*/
	});
}); /*END describe() */

/*1+ the existing method would be something like object.property() .
1+ you would not need to enter a callback function since we will inserting the object within the spy object.
2+ iK in the resource demo the chinese lady did not use return keyword. I would think it looks like a constructor function which would need a new constructor object or convert it into a return function.
	+\ iK anyway, do not worry about this as this is not vital for our understanding here.
3+ Ideal to use as it will reset sinon after each test.
4+ BIM By inserting the object within spy(), it will keep track of the existing method.
	+\ VIP you could insert function / object / object 'method' (aka. object.property() ) / object 'method' iKtype within the spy() to keep track.
		+\ iK more details online.
5+ BIM iKspy will keep track of the method being used.
	+\  notice I did not enter the spy object within the arguments as it is not needed.
6+ 	VIP you must always use the iKspy object within iKexpect() for it to work. */


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