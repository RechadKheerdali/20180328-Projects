/*08test.js using mock data for test spec / setting up mock data for test spec / before() / after() / testing function if an item exist in an array*/
'use strict';
const kb = require('../zikBE/iKmodules/iKbe');
/* + + + + + + + + + + node Main Codes ------------------------*/


/*using mock data for test spec / setting up mock data for test spec / before() / after() / testing function if an item exist in an array */
/*the testing codes will be located on .test/08test.js */
const iKexpect = require('chai').expect;

describe('iK 08.js - iKfunction8 = finding abc within the object.array', () => {
	const iKfunc8 = require('../08.js').iKfunction8;

	let iKmockObject1;	/*1+*/

	before(function() {		/*2+*/
		iKmockObject1 = {		/*3+*/
			iKarray1: ['a', 'b', 'c', ['e', 'f']]
		};
	});

	after(function() {		/*4+*/
		console.log("iK 08.js, test suite testing complete");
	});

	it('iK should return false if value does not exist within the array', () => {
		iKexpect( iKfunc8( iKmockObject1, 'f' ) ).to.be.false;  /*5+*/
	});

	it('iK should return true if value does exist within the array', () => {
		iKexpect( iKfunc8( iKmockObject1, 'b' ) ).to.not.equal( false );
	});

	it('iK mock data should include a, b, or c within its array', () => {
		iKexpect( iKmockObject1.iKarray1 ).to.deep.include( ['e', 'f'] );  /*6+*/
	});

	it('iK pending status, I leave this empty and can come back to it when I am ready'); /*7+*/

}); /*END describe() */


/*1+ BIM we must initialize the mock data first on the test suite.
	+\ iK? try to give it the real name you would evenually create for the real code.
1+ BIM we could use const but not ideal in this situation as we often be changing our mock data to fit our task purpose.
2+ before() will set up the mock data for every test spec to use. Therefore we do not need to retype the mock data for each test spec.
	+\ BIM however any modification made by the test spec will be passed on to the next test spec.
		+\ BIM use beforeEach() property if you want the mock data to reset back to original data for the next test spec.
3+ BIM this is a mock data, which is fake for now, but we would use the mock data until we make the real data on the real code page.
	+\ mock data allows you to simulate and assume what kind of data we would need to create for the real function to work.
		+\ BIM the mock data will only live in our test files, not effecting our real code files.
		+\ it will help us understand how to layout the data we need in order to accomplish our task.
		+\ also do not be afraid to change the mock data as you progress if needed. As generally the testing outcome should still be the same.
	+\ you can type your mock data within the test suite or within each test spec.
		+\ BIM Your mock codes in your test suite means that every test spec will get the same mock data.
		+\ BIM Your mock codes in your test spec means that it is just for that test spec.
3+ You could type codes normally within the test suite or test spec, to experiment test expected outcome.
	+\ you could use previous tested proven function from other test suite/spec to get your expected outcome.
4+ after() will clean up any mock data created after test suite is complete.
	+\ you could use afterEach() after each test spec.
4+ iK it is not necesary to write any codes within, but you could console.log() a message at the end if you want.
5+ we need to send the mock data to the function so that it can use the mock data.
	+\ we do this because normally we have not yet created the real data so we need to use the mock data for the function to work as we want.
	+\ we also send the argument item we would like to know if it exist in the array, as our design function is suppose to do.
6+ BIM .include() would normally detect strings/ojbects and etc... but has trouble detecting inner objects values, which is why we include .deep so that you can search the inner objects values too.
6+\ notice we are now testing the mock object, and not the function.
7+ In pending status. Ideal if you have a test idea you would like to write later on.
7+ BIM however it will not work with describe() test suite. */


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