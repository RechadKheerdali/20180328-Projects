/*07 importing module from file 06.js */
/*we just need to enter the relative file path in the require() method than we can use it */
const iKFileFunctionFrom06Js = require("./06.js"); /*1+*/

iKFileFunctionFrom06Js.iKproperty06("iK argument from 07.js"); /*2+*/
 /*OP	'IK ARGUMENT FROM 06.JS'
		'IK ARGUMENT FROM 07.JS' */ /*3+*/

/*1+ we must require() the file module if we want to use its function.
1+ store it in a variable so you can use it multiple times without repeatedly typing require() again.
2+ you must use the given property name by the module.exports.property if you want to use the function or whatever object they exported.
3+ you will notice any values that outputed from the file will also carry over to your file.
+\ remember you can also enter arguments in the terminal as it will work the same way as 06.js .*/


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