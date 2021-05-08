/*03 simple use of node.js */
/*To run this file on node.js , open the terminal, type node 03.js and press ENTER. You should see all the output.
+\ this is the basic gist of writing server-side codes, using node.js .
+\ do not forget in the terminal you can open the node version of console by typing 'node' in the terminal and you will enter the repl mode. */
console.dir("03.js-iKstring1"); /*OP "03.js-iKstring1" */ /*1+*/
console.log("03.js-iKstring2"); /*OP 03.js-iKstring2 */ /*2+*/

const iKobject = { iKoProperty1: "iKoV1" };
console.dir(iKobject); /*OP { iKoProperty1: 'iKoV1' } */ /*3+*/
console.log(iKobject); /*OP { iKoProperty1: 'iKoV1' } */ /*3+*/


/*1+ notice there is a quote mark using console.dir() method.
2+ notice not quote marks on console.log() .
3+ however console.log() and console.dir() are still very similar and output are most of the time the same. */


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