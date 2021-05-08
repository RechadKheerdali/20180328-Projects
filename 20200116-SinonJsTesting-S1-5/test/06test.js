/*06test stub with pre-determine return values to certain arguments / passing spy() through stub */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const iKexpect = chai.expect;
chai.use(sinonChai);
/* + + + + + + + + + + node Main Codes ------------------------*/

/*stub with pre-determine return values to certain arguments / passing spy() through stub */
/* Basically you can also control what value is return in your stub if a specific argument is passed to the stub callback function.
+\ iK I did not bother with writing iKexpect() in this demo because it fairly straighforward, and you should know how to do it by now.
+\ iKBIM sinon.stub() and sinon.fake() are very similar, but if you want to create a simple fake function with the fewest required behaviour than it might be best to use sinon.fake() since it is suppose to replicate a fake function */
describe('06.js - creating stub with pre-determine return values, just like function\'s sometimes do', function() {
	afterEach(function() {
		sinon.restore();
	});

	it('return specific values with stub, and passing spy() too', function() {
		const 	iKstub = sinon.stub(),
				iKspy = sinon.spy();

		/*1+*/
		iKstub.withArgs(42, 66).returns('iKreturnValue1');
		iKstub.withArgs('XX').throws("iKreturnError");  /*2+*/

		iKstub(42, 66); /*OP 'iKreturnValue1' */
		// iKstub('XX'); /*OP throws error object with message 'iKreturnError' */ /*3+*/

		console.log( iKstub.returnValues ); /*OP ['iKreturnValue1'] */ /*4+*/

		iKstub( iKspy() ); /*5+*/
		console.log( iKspy.calledTwice ); /*OP false */ /*6+*/
	});
}); /*END describe() */

/*1+ you can create stub to return certain values on certain arguments.
1+ you do not have to use .withArgs() property, and instead create a stub with just a return value.
	+\ iKstub.returns('iKvalue');  =eg. a pretend function that returns 'iKvalue' .
2+ set the stub to throw an error with .throws()
	+\ the message is optional.
3+ iK I commented it out because I did not want to cause error on the console terminal.
4+ .returnValues can be use with sinonjs spy / stub / mock / etc...
4+ .returnValues will return an array of all the stub callback return values.
5+ BIM you can pass your spy object through stub callback function too.
6+ false because spy() was only called once through the stub object. */

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