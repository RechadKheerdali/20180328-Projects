/*01 creating a server*/
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*creating a server */
/*resource: nodejs.org .
+\ after running node, use url localhost:3001 in browser */
const http = require('http');

const hostname = '127.0.0.1'; /*1+*/
const port = 3001;	/*2+*/

const server = http.createServer( ( requestP, responseP ) => {	/*3+*/
	responseP.statusCode = 200;	/*4+*/
	responseP.setHeader('Content-Type', 'text/plain'); /*5+*/
	responseP.end('iK end value!\n');	/*6+*/
});

server.listen(port, hostname, () => {	/*7+*/
	console.log(`Server running at http://${hostname}:${port}/`);	/*8+*/
});

 /*OP 'iK end value!' */ /*9+*/

/*1+ your ip address.
	+\ which is your local machine number.
		+\ I think this is the default number for every local computer.
2+ the port number is the number you server will listen on the outside world.
	+\ VIP this will detemine what url you have to enter to see this page running on the browser.
		+\ when you run node, enter localhost:3001 in the address bar on the browser.
2+ iK however I notice I can change change the port number to any number, including 5 digits.
3+ .createServer() creates your own server.
3+ requestP is the client side sending data to the server-side and what they would like in its response object.
3+ responseP is the server side (nodejs) sending back a response to the client-side.
4+ iK not too sure what this does yet. UPDATE WHEN YOU KNOW.
5+ iK setting header, however responseP.writeHead() seem more powerful, makes me wonder why have this.
	+\ iK UPDATE WHEN YOU KNOW.
6+ .end() will end any more response coding, and the client-side will no longer be listening after this.
6+ will also allow you to write on document (like document.write() ).
7+ .listen() will set the server to listen to matching connection.
	+\ .listen() has other arguments too, so research online for more details if you want.
7+ iK i think you do not need to include hostname ip address as it will listen naturally out there as the is the local machine number. Perhaps if it was specific than you might need to include it.
8+ iK not necessary to enter code here but is useful as it will let you know on node terminal that the server code is running.
9+ will display output on document page. */


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
		const iKpromise1 = await new Promise(function(responsePolve, reject) {
		});
		return iKpromise1;
	} catch(iKcatchError1) {
		throw new Error("iKerror >>> ", iKcatchError1);
	};
};
	iKasyncFunction1();	*/