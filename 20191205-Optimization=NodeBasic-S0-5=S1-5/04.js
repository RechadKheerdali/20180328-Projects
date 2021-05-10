/*04 a simple basic get request / require() / .get() / data event / end event */
const _https = require('https');	/*1+*/

_https.get( 'https://httpbin.org/get', _responseObject => { /*2+*/
	let _responseString = '';	/*3+*/

	_responseObject.on( 'data', _dataPacketEvent => _responseString += _dataPacketEvent.toString() ); /*4+*/

	_responseObject.on( 'end', () => {	/*5+*/
		const _responseJson = JSON.parse( _responseString );
		console.log(_responseJson);  /*OP response object of the GET url */ /*6+*/
	});

	_responseObject.on('error', _error => console.error("iKerror >>> " + _error)); /*6+*/
}); /*END _https.get() */


/*1+ require() collects modules from different files / node object properties.
	+\ https a node module with its set of properties and method.
1+ if we are using a http url than we would instead need the http module, and not the https module.
2+ .get() is a GET method request.
3+ You have to set up empty string for use of json parsing.
3+ You could console.dir() the _responseObject and it will show as normal object on node terminal.
4+ .on() works just like .addEventListener() . And you have to enter the type of event.
4+ 'data' is a data event.
	+\ However any request made on node could recieve parts of the data at a time, so it could be incomplete which is why we stream all the data packet to a string.
		+\ so if you do not do this than you might have missing data.
	+\ the _responseObject data could sometimes return as a buffer value, which is why we would use .toString() .
		+\ iK however I notice it works fine without .toString() , perhaps updates makes it convert automatically.
5+ 'end' event waits for the data event to complete. 
6+ strange because it does not work when their is an error in the domain, so I do not know sure when it will be triggered. Perhaps it is do with the connection of device / server / ??? */


 /*OP */
/* **** d */     /*
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
	} catch(iKcatchError1) {
		throw new Error("iKerror >>> ", iKcatchError1);
	};
};
	iKasyncFunction1();	*/