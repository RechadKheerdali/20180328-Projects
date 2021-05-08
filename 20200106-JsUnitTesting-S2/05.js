/*05 creating a capital first letter function with bdd chai expect() */
'use strict';
const kb = require('./zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*creating a capital first letter function with bdd chai expect() */
/*must use command node 05.js for you to see the result on the console */
/*created a function trying to convert capital case in front of every word.
+\ you would first create the iKexpect() chai of what you would like to happen, and then create the real code. */
const iKexpect = require('chai').expect;

function iKtitle( iKtitle ) {
	const iKstringArray = iKtitle.split(" ");

	const iKcapitalTitle = [];

	for (let iKitem of iKstringArray) {
		iKcapitalTitle.push( iKitem[0].toUpperCase() + iKitem.slice(1) ); /*1+*/
	};

	return iKcapitalTitle.join(" ");
};

iKexpect( iKtitle("iK") ).to.be.a('string');	/*2+*/
iKexpect( iKtitle('ik') ).to.equal('Ik');
iKexpect( iKtitle('iK second') ).to.equal('IK Second');
iKexpect( iKtitle("the matrix") ).to.equal( "The Matrix" );


/*1+ every word in the array will have capital letters now.
1+ you do not test javascript or library codes since there are legit and very unlikely to go wrong.
	+\ only test codes that comes from either you, other developers or user.
2+ for every iKexpect() I run here, the codes will also be real too, meaning there would be an output if there was one.
	+\ for eg. if I added console.log() within the iKtitle function, than there would be 4 output since there is for iKexpect() running the function.
2+ ideally in real situation you would think of most of the real life possible errors that could occur, and place it in the iKexpect() so that user or other developers do not mistakenly use the function the wrong way. */

/*IK NEXT FILE IS ./test/06test.js , SO GO THERE FOR CONTINUED RECAP*/


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