/*08 creating 3 page (host page \ path page \ non-existent page) / 303 redirected / iK created a site with form elements, take value and redirected them to other path url of the home page */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*creating 3 page (host page \ path page \ non-existent page) / 303 redirected / iK created a site with form elements, take value and redirected them to other path url of the home page */
/*home page: localhost:3008
+\path page: localhost:3008/303
+\non-existent page (aka error page): localhost:3008/... */
/*Using 08zA.html as the form element home file page, and 08zB.html as the path page where the user search input will be displayed onto. Unless you go directly to the path page where you will see the default {{iKplaceholder}} text.
	+\	<form method='POST' action='/'>
			<input type='search' name='iKsearch' value='iKvalue333>
			<button type='submit'>submit</button>
		</form>
	+\ I did not include an error page in this demo but I could have. */
const httpMOD = require('http');
const fileSystemMOD = require('fs');
const queryStringMOD = require('querystring');

let queryStringObjV;		/*1+*/

httpMOD.createServer( (requestP, responseP) => {
	if ( requestP.url === '/' ) {		/*2+*/
		responseP.writeHead(200, {'Content-Type': 'text/html'}); /*3+*/

		if ( requestP.method.toUpperCase() === 'GET' ) {	/*4+*/
			responseP.write( fileSystemMOD.readFileSync('./08zA.html') ); /*5+*/
			responseP.end('iK home page working\n');	/*6+*/

		} else if (requestP.method.toUpperCase() === 'POST') { /*7+*/
			requestP.on('data', dataPacketP => {
				queryStringObjV = queryStringMOD.parse( dataPacketP.toString() );

				responseP.writeHead(303, {Location: '/303'})	/*8+*/
				console.log('iK post redirect to path page /303');
				responseP.end();
			});
		};
	}
	else if ( requestP.url === '/303') {	/*9+*/
		responseP.writeHead(200, {'Content-Type': 'text/html'});
		const B08file = fileSystemMOD.readFileSync('./08zB.html', 'utf8'); /*10+*/

		if (queryStringObjV === undefined) {	/*11+*/
			responseP.write(B08file);	/*12+*/
		}
		else {							/*13+*/
			console.log(queryStringObjV);
			const iKreplace = B08file.toString().replace(/{{iKplaceholder}}/gi, queryStringObjV.iKsearch); /*14+*/
			responseP.write(iKreplace);	/*15+*/
		}
		responseP.end('iK path file working\n'); /*16+*/
	}
	else {								/*17+*/
		responseP.writeHead(200, {'Content-Type': 'text/plain'});
		responseP.write('iK non-existent path url which I could place an error page or redirect it\n');
		responseP.end('iK error page working\n');
	};

	responseP.on('error', errorP => {throw new Error(errorP)} );

}).listen(3008, '127.0.0.1', () => console.log('iKserver working on: localhost:3008') );


/*1+ this is when the user sumbit their search text on form, and append the querystring object to this variable. So you can use it when user have been redirected to the path page.
	+\ VIP it has to be at least 1 scope above the .createServer() as it will not append otherwise.
2+ '/' represent the home page (08zA.html)
3+ BIM best practice to use responseP.writeHead() on each page for your server.
4+ GET represent what the requestP method (home page) is currently on.
	+\ also easier to set if statement, because when user sumbit their search text, it will become POST method. But I am sure there are plenty of alternatives ways.
4+ BIM use .toUpperCase() because some browser inconsistency of typing method differently.
5+ inserting home page to '\' .
6+ use responseP.end() for each page.
7+ will only trigger when user submit their search text on home page.
	+\ the POST method was set in the form element on the home page html file (08zA.html).
8+ VIP after user submits, we can use responseP.writeHead() to redirect the user to the path page, using the 303 status code and header Location.
	+\ there are plenty of other status code but this was in context for us, which fits with header Location too.
9+ VIP '/303' represent our path page (08zB.html). But you could use any pathname you want after '/' .
10+ BIM used 'utf8' to ensure file content is string and not buffer content data.
	+\ so it will be easier to use .replace() method.
	+\ however still works fine without, if instead you use .toString() when using .replace() method.
11+ true if user did not vist home page or user did not submit their search text home page.
12+ display default path page.
	+\ on path page you will see {{iKplaceholder}} string text unchanged since user has not submit their search text.
13+ true if user did submit their search text on the home page.
14+ you have to ensure the file content is string for .replace() to work.
	+\ VIP You could use either .toString() or set the encoding 'utf8' on .readFileSync() .
		+\ notice I used both, but setting either one of them will work fine too.
15+ will display user search text on path page replacing the {{iKplaceholder}} string.
16+ notice I use responseP.end() for the whole path page. That is because here we are not redirecting to another page so it is unnecessary to do so for each conditions here.
17+ true if user entered url that is not home page or path page. This would be considered as a non-existent page for your server.
	+\ you could consider it as error page too if you wanted to.
17+ iK I did not create an error page so I just left a simple text message instead. */


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