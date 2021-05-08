/*02 my simple version of creating a server*/
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/* my simple version of creating a server */
/* localhost:3002 */
const httpV = require('http');

httpV.createServer( (requestP, responseP) => {
	responseP.writeHead(200, {'Content-Type': 'text/plain'}) /*1+*/
	responseP.write('<div>iKvalue1</div>'); /*2+*/
	responseP.end();	/*3+*/
}).listen( 3002, '127.0.0.1' );

console.log('iK server is working on localhost:3002');	/*4+*/

 /*OP '<div>iKvalue1</div>' */	/*5+*/

/*1+ set the headers along with the status code for the response.
2+ this is similar to document.write(), but for the server-side.
3+ notice you do not have to enter any value within the parenthesis.
4+ this is not part of the .listen() , so best to use within callback to know if connection was successful.
5+ will display as raw string but if I used 'text/html' inside .writeHead() than this will display like .innerHTML .*/


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