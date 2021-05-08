/*06 module.exports. / transfering your module function to other files (07.js) to use */
/*You can send your functions to other files */
/* **** iK dummy function so I can send to the next file */
const iK06FileJsFunction = _argument1 => console.dir( _argument1.toUpperCase() );

iK06FileJsFunction( "iK argument from 06.js" ); /*OP "IK ARGUMENT FROM 06.JS" */

/* **** using terminal arguments for iK06FileJsFunction() */
/*iK you can test it out by using eg. node 06.js iKargument */
for (let _item of process.argv.slice(2) ) { /*1+*/
	iK06FileJsFunction( _item ); /*2+*/
};

/* **** exporting iK06FileJsFunction() so that other files can use if they need */
module.exports.iKproperty06 = iK06FileJsFunction; /*3+*/

/*1+ process.argv.slice(2) only works because we are using it in the local scope, but process.argv is still the same.
	+\ but you can possibly change it in the global scope, but difficult to use it in the next code block.
2+ so every argument you enter in the terminal will go to the function and not the first 2 default items in process.argv .
3+ iKproperty06 can be name anything, but this will be the property name that other files will use if they want to use this function.
	+\ iK06FileJsFunction is assign to the iKproperty06 .
		+\ not necessary to use parenthesis as callback. 
	+\ however you can export anything you want, that includes array, object literals, etc... */


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