/*04test using sinon.useFakeXMLHttpRequest() / iK very simple example */
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const iKexpect = chai.expect;
chai.use(sinonChai);
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using sinon.useFakeXMLHttpRequest() / iK very simple example */
/*iK this example is so simple, .useFakeXMLHttpRequest() has so many other things within its object, and I might not be using it correctly.
	+\ iK check console.log( sinon.useFakeXMLHttpRequest() ) to see them all the property.
	+\ iK I am not sure how to use it to its full extend but when checking online, they would use .onCreate / requests / etc... and I think I am not using it properly.
		+\ iK but this should be good for now. */
describe('04test.js - xhr', function() {
	let iKxhr;

	before(function() {
		iKxhr = sinon.useFakeXMLHttpRequest();	/*1+*/
	});

	it('xhr testing', function() {
		iKexpect(iKxhr.statusCodes['400']).to.equal('Bad Request'); /*2+*/

		sinon.restore();
	});
}); /*END describe() */

/*1+ Behaves like new XMLHttpRequest() for browser.
	+\ sinon also allows you to create a fake server for nodejs too.
		+\ iK I suspect it would work a little similar.
1+ .useFakeXMLHttpRequest() has all sort of property that you would want possible outcomes just like a real xhr object.
2+ contains many testing status code which can be useful. */


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