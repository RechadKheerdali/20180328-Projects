/*07 method / querystring.parse() / collecting query string from POST method / uploading iK personal html file with all the external files */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/* .method / querystring.parse() / collecting query string from POST method / uploading iK personal html file with all the external files */
/* localhost:3007 */
/*Using 07z.html which include the form element:
	+\	<form method='POST' action='/'>
			<input type='search' name='iKsearch' value='iKvalue>
			<button type='submit'>submit</button>
		</form>
		+\ you could set it to GET but cleaner with POST .
		+\ url is homepage using / forward slash. */
const httpMod = require('http');
const fileSystemMod = require('fs');
const querystringMod = require('querystring');

httpMod.createServer( (requestP, responseP) => {
	responseP.writeHead(200, {'Content-Type': 'text/html'});

	console.log( requestP.method ); /*OP GET */ /*1+*/

	responseP.end( fileSystemMod.readFileSync('./07z.html') ); /*2+*/

	requestP.on('data', dataPacketP => {	/*3+*/
		console.log( dataPacketP.toString() ); /*OP 'iKsearch=iKvalue' */ /*4+*/
		const queryStringV = querystringMod.parse( dataPacketP.toString() ); /*5+*/
		console.log( queryStringV ); /*OP {iKsearch: 'iKvalue'} */ /*6+*/
		console.log( queryStringV.iKsearch ); /*OP 'iKvalue' */
	});

}).listen(3007, '127.0.0.1', () => console.log('iKserver working on: localhost:3007'));

/*1+ requestP is GET upon uploading. But when the user submit form than requestP will submit POST because I set to POST on form element.
2+ iK my personal html files seem to load fine, and work accordingly such as bootstrap class and etc...
3+ events still listen despite coming after responseP.end() .
3+ notice I do not need a responseString to append data onto. And I do not need end event too.
	+\ that is mainly because the query string data is too short.
		+\ plus you could get unwanted data such as space/etc...
4+ collects the query string data from the form element after the user submit form.
5+ .parse() will decode the query string into object literal.
6+ with the html name attribute and value of input. */


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