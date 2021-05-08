/*01test using sinon spy as anonymous function to record information about the function / using sinon-chai assertion style */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using sinon spy as anonymous function to record information about the function / using sinon-chai assertion style */
/* iK you require all these modules for you to be able to use mocha/chai/sinon/sinon-chai together */
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai"); /*1+*/
const iKexpect = chai.expect;
chai.use(sinonChai);	/*2+*/

describe('01test.js - Using sinon spy() and sinon-chai on a function with a callback', function() {
	function iKfunction1 (iKvalueP, iKcallbackP) {	/*3+*/
		iKcallbackP(iKvalueP);	/*4+*/
		return iKvalueP;	/*5+*/
	};

	it('expect iKfunction1 to be called twice', function() {
		const iKspy = sinon.spy();	/*6+*/

		iKfunction1( 'iKv1', iKspy );	/*7+*/
		iKfunction1( 'iKv1', iKspy );

		/*8+*/
		iKexpect( iKspy ).to.have.been.called;
		iKexpect( iKspy ).to.have.been.calledTwice;
		iKexpect( iKspy ).to.have.callCount(2);

		sinon.restore();	/*9+*/
	});

	it('expect iKfunction1 to be called with the right argument', function() {
		const iKspy = sinon.spy();

		iKfunction1( 'iKv2', iKspy );

		/*10+*/
		iKexpect( iKspy ).have.been.calledWith('iKv2');
		iKexpect( iKspy ).have.been.calledWithExactly('iKv2');

		sinon.restore();
	});
}); /*END describe() */


/*1+ sinon-chai module will make typing expect() easier to write and understand.
	+\ iK normal chai and sinon properties and method have things mix up a bit which makes it harder to know which order you are suppose to type expect() .
2+ iK? must do in order for sinon-chai to work accordingly.
3+ VIP you must include a callback parameter so that you can pass the sinon spy through the function.
4+ this is exclusively for the sinon spy to record information about the function.
	+\ iKBIM it seems I will have to write a callback parameter for my future function just so that I can test my unit testing which seems such a hassle.
		+\ iK Unless I take away the sinon fake data after I created the real data, which to me makes sense.
			+\  iK from comments that I have read, it is not recommended to remove any fake data, and should keep.
		+\ iK? I suspect that when you write the real function, you do not have to use the callback parameter, and can adjust your unit test slighltly to fit your function.
			+\ iK? however this might not be true, I might have to keep callback parameter.
4+ VIP iKvalueP is optional, but if I want to record what arguments was passed to the function than I need to insert it into spy() too.
5+ This presumely will return the real data you are expecting.
6+ VIP You have to create sinon spy to pass down to the function.
7+ everytime you use the function and pass iKspy through it, iKspy will record that information.
8+ VIP you must use iKspy within expect() , if you want to get details of the function activities.
8+ .called / .calledTwice / .callCount() / .calledOnce is from the sinon library.
	+\ it also appears easier to read because we are also using the sinon-chai library, which formats the expect() chain method as normal.
		+\  iK if we did not use the sinon-chai library, than the chain method could be much harder to put together.
9+ VIP you must use sinon.restore() after each test to reset sinon for the next test.
	+\ sinon.restore() will reset all the fake/spies/stubs/mocks after each test. Otherwise we could be carrying different data to the next test and giving false information. 
	+\ BIM you could use sinon.restore() with the after() / afterEach() hooks instead.
		+\ iK Alternatively I could instead use the sinon-test module package. Eventually I will be using sinon-test after I get use to sinon first.
10+ for .calledWith() / .calledWithExactly() to work, you need to ensure you inserted the arguments into spy object too, as shown on 4+ . */


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