/*05test simple use of sinonjs stub / calling stub() as a real function */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const iKexpect = chai.expect;
chai.use(sinonChai);
/* + + + + + + + + + + node Main Codes ------------------------*/

/*simple use of sinonjs stub / calling stub() as a real function */
/* sinonjs stubs are like functions you create on the fly to test out specific behaviours.
	+\ but with sinon.stub() you do not have to create a function with specific behaviour, as this is the quick route saving you time */
describe('05test.js -testing sinon.stub()', function() {
	afterEach(function() {
		sinon.restore();
	});

	it('expect arguments to be passed down to stub', function() {
		const iKstub = sinon.stub();  /*1+*/

		iKstub('iKarg1');	/*2+*/
		iKstub('iKarg2');

		console.log( iKstub.args ); /*OP [ [ 'iKarg1' ], [ 'iKarg2' ] ] */ /*3+*/

		iKexpect( iKstub.firstCall.args[0] ).to.equal('iKarg1'); /*4+*/
		iKexpect( iKstub ).have.been.calledWith('iKarg2');
	});
}); /*END describe() */

/*1+ create the stub object first to behave as our anonymous function we would be testing.
	+\ BIM there are various of sinon properties of how you can set your stub to begin with.
		+\ BIM iK check sinonjs documentation to see what you can do to set up your stub that you would want your function to behave.
			+\ iKBIM see sinonjs documentation on stubs, but also look at the Spy Call documentation page as it is also part of the stub properties.
				+\ iK reason is many spies properties and method is also compatible to use on sinonjs stubs and mocks.
1+ iK you could also use object / function / object method / etc.. within the stub() within the parethesis.
2+ iKVIP think of iKstub() as the callback function with its arguments.
	+\ remember that stub is your imaginary function you would eventually be creating down the line.
2+ iKBIM you could pass sinonjs spy() as argument to record additional information about the stub.
3+ .args property will show all the arguments (as array) you passed to the stub() callback function.
	+\ iK works with spies and mocks too.
	+\ Also there are other properties you could use such as .returnValues to get an array of return value you set for the stub.
4+ iKBIM notice I did not use parenthesis to call iKstub , because we are not calling the iKstub, we want to know what information has been collected by the iKstub object so far, and learning what the first argument that was passed through it.
	+\ VIP it is the same with every stub we use for iKexpect(), if we want to know what has already happened to the stub than we do not use callback parethesis and use the appropriate chain methods.
		+\ VIP But if we want to know how the stub will respond to certain situations than we would use the callback parenthesis. */


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