/*05 using requestP.url to grab the pathname name the user enters in */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using requestP.url to grab the pathname name the user enters in */
/* localhost:3005 */
const httpV = require('http');

httpV.createServer( (requestP, responseP) => {
	responseP.statusCode = 200;
	responseP.setHeader('Content-Type', 'text/plain');

	let pathNameUrl = requestP.url.replace("/", ""); /*1+*/

	if ( pathNameUrl.length > 0 ) {	/*2+*/
		responseP.end( pathNameUrl );	/*3+*/
	} else {				/*4+*/
		responseP.end( "iK no pathname entered, still in home page" );
	};

}).listen(3005, '127.0.0.1', () => console.log('iK server working on localhost:3005') );


/*1+ replaced the / with an empty space. So currently now it is an empty string.
2+ will only become true if a any pathname is entered by the user.
	+\ here it does not matter if the pathname exist or not.
3+ will OP the pathname that was entered.
4+ true if no pathname was entered. */


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