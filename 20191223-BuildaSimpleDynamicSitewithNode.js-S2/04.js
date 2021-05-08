/*04 using the requestP.url to get the home page of the server */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using the requestP.url to get the home page of the server */
/* localhost:3004 */
/* the home domain page will show as / (forward slash) using the url property */
const httpV = require('http');

httpV.createServer( (requestP, responseP) => {
	responseP.writeHead(200, {'Content-Type': 'text/plain'} )

	responseP.write( requestP.url + "\n" ); /*1+*/

	if (requestP.url === "/") {	/*2+*/
		responseP.end('iK home domain page');
	} else {		/*3+*/
		responseP.end("iK not home domain page");
	};

}).listen(3004, '127.0.0.1', () => console.log("iKserver working: localhost:3004") );


/*1+ OP would be / .
	+\ however if you enter a pathname in the url address bar than you will also get the / with the pathname next to it.
		+\ eg. "/iKpathname".
1+ ignore the "\n", as that is to create a new line.
2+ will only become true if it is home domain page with no pathname.
3+ will only become true if pathname is included in the url. */


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