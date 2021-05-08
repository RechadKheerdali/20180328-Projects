/*07test using stub as promise object (resolve) / using async function to keep codes synchronous / iKexpect() using asynchronous codes */
'use strict';
const	kb = require('../zikBE/iKmodules/iKbe'),
		chai = require("chai"),
		sinon = require("sinon"),
		sinonChai = require("sinon-chai"),
		iKexpect = chai.expect;
chai.use(sinonChai);
/* + + + + + + + + + + node Main Codes ------------------------*/

/*using stub as promise object (resolve) / using async function to keep codes synchronous / iKexpect() using asynchronous codes */
/* You could also think of the promise object as fetch() / any asynchronous codes / http request / etc... */
describe('07test.js - using stub as promise object', function() {
	afterEach(function() {
		sinon.restore();
	});

	it('stub returns a resolve promise object', async function() { /*1+*/
		const iKstub = sinon.stub().resolves('iKresolve');  /*2+*/

		await iKstub()	/*3+*/
			.then( iKpara => console.log( iKpara ) ); /*OP 'iKresolve' */ /*4+*/

		console.log(69); /*OP 69 */ /*5+*/

		iKexpect( await iKstub() ).to.equal('iKresolve'); /*6+*/
	});
}); /*END describe() */

/*1+ VIP Notice that I am using the async keyword, which is a must if you want to keep your code in synchronous style.
2+ .resolve() will make the stub act like a promise object.
	+\ there is also other sinonjs promise property such as .reject() / etc...
	+\ BIM it will also behave asynchrnonusly too, so any synchronous codes will jump ahead of it as normal.
2+ you could think of .resolve() as fetch() too and other asynchrnonous codes.
3+ just as normal, if you want your asynchronous codes to wait and behave as synchronous codes, than you insert the await keyword in front of it.
4+ acts just like the real promise object, sinonjs .resolve() can use thenable handlers too.
5+ console.log() output is synchronous, but because of async function it will stay behind await iKstub() .
6+ VIP Notice I used await keyword for iKstub within iKexpect() which is allowed, and a must for iKexpect() to read the asyncrhonous codes within. */

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