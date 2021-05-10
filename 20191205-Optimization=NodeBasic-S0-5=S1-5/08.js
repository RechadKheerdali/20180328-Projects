/*08 my quick demo of showing how to add error handlings to the code / .STATUS_CODES[] */
/*same code as 04.js file, requesting data into json.
+\ I used promise object / try...catch / if statement .
+\ iK not needing to study the codes but more of the infrastructure of the error placing related with the url. */
const _https = require('https');
const _http = require('http');	/*1+*/

const _promise = new Promise( (resolve, reject) => { /*2+*/
	try {		/*3+*/
		_https.get( 'https://httpbin.org/get', _responseObjectP => { /*4+*/
			if (_responseObjectP.statusCode === 200) {	/*5+*/
				let _responseString = '';

				_responseObjectP.on('data', _dataPacketP => _responseString += _dataPacketP.toString() );

				_responseObjectP.on('end', () => {
					try {		/*6+*/
						const _responseJson = JSON.parse(_responseString);
						resolve( _responseJson );
					} catch (_errorP) {
						reject( 'reject tryCatchScope2 (check json conversion or properties/methods) >>>\n' + _errorP );
					};
				});

			} else {
				reject( `iKreject ifStatementElse (check url pathname?) >>>\n ${_responseObjectP.statusCode} : ${_http.STATUS_CODES[_responseObjectP.statusCode]}` );
			};

			_responseObjectP.on('error', _errorP => reject('reject onError handler >>>\n' + _errorP)); /*7+*/
		}); /*END _https.get() */

	} catch(_errorP) {
		reject( 'reject tryCatchScope1 (check protocol?) >>>\n' + _errorP );
	};
})
	.then( _jsonP => console.dir(_jsonP) )
	.catch(_errorP => console.error( 'iKpromise >>> ' + new Error(_errorP) ) ); /*8+*/


/*1+ only the http module allows me to use the .STATUS_CODES[] . Which it would brieftly describe the status connection in text.
2+ not completely necessary to use promise, but easier to direct all errors to one .catch() . Plus if feels right too.
3+ this first try...catch will catch error if the protocol of the url is incorrect.
4+ apparently the url has to be browser compatible, so each section of the url is handled by different error handling.
	+\  however the domain name cannot seem to be control with any error handlers that I tried, and will give an automatic just throw an error .
5+ the if statement makes sure you get 200 status, because some other status could still work but cause problems with how you collect the data.
	+\ also the if statements checks that the pathname of the url exist, if not than 404 .
6+ this try...catch makes sure data is correct when converting to json, and that the property you are after exist in the json.
7+ iK however I could not determine what errors this onerror handler checked on (I thought it would be the url domain but nope). My guess is something that is to do with the server connection or something, perhaps a natural error?
8+ all the errors in the promise object will come here.
+\ just to note that promise object was my input, and great for collecting all the errors if any, a keeper for sure. */


 /*OP */
/***** d */     /*
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
		throw new Error("iKerror >>>> ", iKcatchError1);
	};
};
	iKasyncFunction1();	*/