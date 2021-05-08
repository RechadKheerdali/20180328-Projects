/*03test using spy() without setup callback parameter within the function */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const iKexpect = chai.expect;
chai.use(sinonChai);
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using spy() without setup callback parameter within the function */
/*iK? I am not sure if this is the official way of using spy() as parameter when there is no callback parameter set up in the function.
+\ iK I did not read this anywhere, I came up with this on my own but seems to work perfect and as expected.
	+\ iKVIP however this method cannot track arguments.
		+\ BIM only use this if you do not need to track arguments through the function because otherwise you would need to insert spy() as a callback parameter */
describe('03test.js - spy tracking function without callback parameter', function() {
	let iKfunction3, iKfunction4;

	beforeEach(function() {	/*1+*/
		iKfunction3 = function(iKvalueP) {
			return iKvalueP;
		}
		iKfunction4 = function () {
			return 4;
		}
	});

	afterEach(function() {
		sinon.restore();
	});

	it('spy successfully tracks function without callback parameter', function() {
		const iKspy1 = sinon.spy();	/*2+*/

		iKfunction3( 'iKv1', iKspy1() );	/*3+*/
		iKfunction3( 'iKv2', iKspy1() );

		iKexpect( iKspy1 ).to.have.callCount(2);
	});

	it('function called in the righr order using spy', function() {
		const iKspy2 = sinon.spy();	/*4+*/
		const iKspy3 = sinon.spy(iKfunction4);	/*5+*/

		iKfunction3( 'iKv4', iKspy2() );
		iKfunction4( iKspy3() );	/*6+*/

		iKexpect( iKspy2 ).have.been.calledBefore( iKspy3 );
		iKexpect( iKspy3 ).have.been.calledAfter( iKspy2 );
	});
}); /*END describe() */

/*1+ BIM As you can see both function do not have a callback parameter setup.
2+ iKBIM base on what I read, you could add the function variable within .spy() , but I notice it makes no difference if I do or not.
3+ BIM notice I entered the first argument as normal but the second argument is iKspy() which does not exist in the function parameters.
	+\ VIP you must include the iKspy() within the argument if you want spy to record the function activities.
	+\ VIP you must include the parenthesis for iKspy() to call it as it passes through the function for it to work.
4+ VIP you must add more spies if you want to keep track of individual functions.
5+ iKBIM I notice it makes no difference if I include the function name within.
6+ iKfunction4 has no parameter setup but you still insert the spy object within as argument. */


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