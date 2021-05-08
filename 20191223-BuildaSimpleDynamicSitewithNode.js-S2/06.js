/*06 file system / .readFile() / .readFileSync() */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/* file system / .readFile() / .readFileSync() */
/* localhost:3006 */
const fsV = require('fs');	/*1+*/

require('http').createServer( (requestP, responseP) => { /*2+*/
	responseP.writeHead(200, {'Content-Type': 'text/html'});

	fsV.readFile('./zzajax.html', {encoding: 'utf8'}, (errorP, dataP) => {	/*3+*/
		if (errorP) throw errorP;
		responseP.end(dataP + '\n');
	});

	responseP.write(
		fsV.readFileSync('./zzajax.html') + '\n\n' /*4+*/
	);

	responseP.write('<div>iKresponseP.write()</div> \n\n'); /*5+*/

}).listen(3006, '127.0.0.1', () => console.log('iK server running on: localhost:3006') );


/*1+ the file system module.
2+ notice I did not declare const http module.
3+ .readFile is asynchronous, so it will be last on the call stack. Which is why I inserted responseP.end() .
3+ {encoding: 'utf8'} is the optional argument.
	+\ you can change the endcoding or the fs flags.
	+\ you could also type encoding as string and not object.
3+ dataP is the full content of the file we are extracting from.
4+ .readFileSync() is force synchronous, so it will block any further codings until the file is retrieve (or error too).
	+\ .readFileSync() will output before .readFile() .
	+\ it does not use a callback function unlike .readFile() . It just outputs the content of the file.
5+ last on the source code but output before .readFile() output. */


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