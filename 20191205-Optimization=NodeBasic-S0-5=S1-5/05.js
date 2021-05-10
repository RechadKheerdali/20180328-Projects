/*05 process / process.argv */
/*process object is a node host object that is the same as window object to the browser */
console.dir(process); /*OP process object */

console.dir( process.argv );  /*OP [ ...nodeBinary... , ...filePath... , ... ] */ /*1+*/


/*1+ process.argv will always return an array.
	+\ the first 2 items will be the node binary path, and the second will be the file path of 05.js .
1+ if you type something in the node terminal, the process.argv will collect it within its array as argument which you could use to do something if want to.
	+\ enter in the terminal: node 05.js iKargument		=eg.
		+\ you should see 'iKargument has been added to the process.argv as the third item of the array.
		+\ node 05.js iKargument1 iKargument2	=eg.
			+\ you will get 2 items added, as process argv automatically understand there is 2 items because of the whitespace in between them.
	+\ if you want to use arguments of the terminal than ensure you remove the first 2 items of the array (.eg process.argv.slice(2) ) as you do not want to use that.


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