'use strict';
/*showing recent searches on the page for the user / iK writing a similar real case scenario */
/*it will add/remove the user search input to the dom.
+\ iK the main codes are the upper half, and the hoisted functions is at the bottom.
+\ iK took me at least 3 solid days to complete this.
	+\ quite proud I acheive this, it was not as simple as I thought it would be and much longer than expected. There were several complications but I evenually solve it all. */
								/*MAIN CODE */
								/*MAIN CODE */
if ( iKlocalstorageBrowserSupport() ) {	/*1+*/

/***** STEP 1:
When page loads, it will seek what is in the localStorage ("iKuserRecentSearchString" property) and add any values to the dom */
	const iKset = new Set();	/*2+*/
	const iKlocalstorageArray = iKcheckIfLocalstorageArrayStringExistOrNot_ReturnArray();

	iKtransferLocalstorageArrayIntoSetObject( iKset, iKlocalstorageArray );

	iKaddSetObjectToDom( iKset );


/***** STEP2:
When user submit search text, it will be appended to the dom */
	iKformId.onsubmit = function (event) {
		event.preventDefault();

		const iKuserSearchString = event.target.children[0].value; /*5+*/

		const iKboolean = iKcheckIfUserSearchAlreadyExist( iKuserSearchString, iKset );

		iKaddUserSearchStringToSetObject( iKboolean, iKuserSearchString, iKset ); /*7+*/

		iKaddUserSearchStringToLocalstorageArray_TransferLocalstorageArrayToLocalstorage( iKboolean, iKuserSearchString, iKlocalstorageArray ); /*8+*/

		iKaddUserSearchStringToDomDivList( iKboolean, iKuserSearchString );

		iKinputSearchId.value = "";
	}; /*END iKformId.onsubmit */


/***** STEP 3:
When user click on the clear button, all set object, localStorage ("iKuserRecentSearchString" property), and dom elements will be removed */
	iKbuttonId.onclick = function(event) {
		localStorage.removeItem( "iKuserRecentSearchString" );

		iKset.clear();

		iKremoveAllParagraphElements ();

		iKinputSearchId.value = "";
	}; /*END iKresetId.onclick */

	console.log( localStorage );
	console.log( iKlocalstorageArray );
	console.log( iKset );
}; /*END if ( iKlocalstorageBrowserSupport() ) */


	/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
	/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
	/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

								/*HOISTED FUNCTIONs */
								/*HOISTED FUNCTIONs */

			/***** STEP 1 */
			/***** STEP 1 */

function iKlocalstorageBrowserSupport() {
	try{
		return "localStorage" in window && localStorage !== null;
	} catch( iKerrorEvent ) {
		return console.log("iKcatchError");
	};
}; /*END */

	/********/

function iKcheckIfLocalstorageArrayStringExistOrNot_ReturnArray() {
	if ( localStorage.getItem("iKuserRecentSearchString") ) {	/*3+*/
		const iKarray = JSON.parse( localStorage.getItem("iKuserRecentSearchString") );
		return iKarray;
	} else {
		return [];	/*4+*/
	};
}; /*END */

	/********/

function iKtransferLocalstorageArrayIntoSetObject(
	iKsetP,
	iKlocalstorageArrayP
) {
	for (let iKitem of iKlocalstorageArrayP) {
		iKsetP.add( iKitem );
	};
}; /*END */

	/********/

function iKaddSetObjectToDom( iKsetP ) {
	for (let iKsetValue of iKsetP) {
		iKcreateParagraphElementAndAppendToDomDivList( iKsetValue );
	};
}; /*END */

	/********/

function iKcreateParagraphElementAndAppendToDomDivList( iKValueP ) {
	const paragraphElement = document.createElement("p");
	paragraphElement.textContent = iKValueP;
	paragraphElement.className = "iKparagraphClass";
	iKdivId.appendChild( paragraphElement );
}; /*END */

	/********/

			/***** STEP 2 */
			/***** STEP 2 */

function iKcheckIfUserSearchAlreadyExist(
	iKuserSearchStringP,
	iKsetP
) {
	if ( iKsetP.has(iKuserSearchStringP) || !iKuserSearchStringP ) { /*6+*/
		return false;
	} else {
		return true;
	};
}; /*END */

	/********/

function iKaddUserSearchStringToSetObject(
	iKbooleanP,
	iKuserSearchStringP,
	iKsetP
) {
	if (iKbooleanP) {
		iKsetP.add( iKuserSearchStringP );
	};
}; /*END */

	/********/

function iKaddUserSearchStringToLocalstorageArray_TransferLocalstorageArrayToLocalstorage(
	iKbooleanP,
	iKuserSearchStringP,
	iKlocalstorageArrayP
) {
	if (iKbooleanP) {
		iKlocalstorageArrayP.splice( -1, 0, iKuserSearchStringP ); /*9+*/
		const iKjsonArrayString = JSON.stringify( iKlocalstorageArrayP );
		localStorage.setItem( "iKuserRecentSearchString", iKjsonArrayString );
	};
}; /*END */

	/********/

function iKaddUserSearchStringToDomDivList(
	iKbooleanP,
	iKuserSearchStringP
) {
	if (iKbooleanP) {
		iKcreateParagraphElementAndAppendToDomDivList( iKuserSearchStringP ); /*function in STEP1 */
	};
}; /*END */

	/********/

			/***** STEP 3 */
			/***** STEP 3 */

function iKremoveAllParagraphElements() {
	while( iKdivId.firstChild ) {	/*10+*/
		iKdivId.removeChild( iKdivId.firstChild );
	};
}; /*END */


/*1+ first checks if the browser supports localStorage .
2+ ideal to use set object because it will not store repeated value, and it the same order in was inserted.
	+\ however because set object also gather data from the json array in the localStorage, you order will be alphabetic, and not in order of insertion.
3+ keep all the user search in the "iKuserRecentSearchString" property. as there could be other property in localStorage which has nothing to do with your recent search task.
4+ if "iKuserRecentSearchString" values does not exist than you create a new array.
5+ it is the input[type=search] element value on the dom.
6+ !iKuserSearchStringP basically means empty string/null/undefined/any falsy value.
	+\ best not use use iKuserSearchStringP === null as that will only search for null value.
7+ reason you must add value to the set object so that if the user submit their search text again, the iKbloolean value can assess the set object again and deterimine there are no repeats.
	+\ if you skip this code than repeated user search text could appear in the dom again and again.
8+ therefore if the user refresh page or leaves but come back, you can access the localStorage value and append it to the dom again as it was before.
9+ -1 means inserting at the back of the array, just like .push() .
	+\ alternatively you could have use .push() or other methods.
10+ iK .firstChild seem to be the most effective in removing elements in html containers, as the others I tried have inconsistency, such as either first or last element will persist to remain in the dom. */