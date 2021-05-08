/* iK you can give it a quick skim look to see guils way of adding, removing, and editing , etc...
+\ ik check out the before and after comparison DRY/refactoring base on guil teaching i learn. */

document.addEventListener('DOMContentLoaded', () => {
	/*ik variables*/
	const form = document.getElementById('registrar');
	const input = form.querySelector('input');

	const mainDiv = document.querySelector('.main');
	const ul = document.getElementById('invitedList');

	const div = document.createElement('div');
	const filterLabel = document.createElement('label');
	const filterCheckBox = document.createElement('input');
  
	/*ik checkbox of confirmed invitees and hides non-confirmed*/
	filterLabel.textContent = "Hide those who haven't responded";
	filterCheckBox.type = 'checkbox';
	div.appendChild(filterLabel);
	div.appendChild(filterCheckBox);
	mainDiv.insertBefore(div, ul);
	
	filterCheckBox.addEventListener('change', (e) => {
		const isChecked = e.target.checked;
		const lis = ul.children;
		if(isChecked) {
			for (let i = 0; i < lis.length; i += 1) {
				let li = lis[i];
				if (li.className === 'responded') {
					li.style.display = '';  
				} else {
					li.style.display = 'none';
				}
			}
		} else {
			for (let i = 0; i < lis.length; i += 1) {
				let li = lis[i];
				li.style.display = '';
			}                                 
		}
	}); /*END filterCheckBox.addEventListener('change'*/


	/*iK multiple functions to create LI element*/
	function createLI(text) {
		/*ik created cards element function from input text */
		function createElement(elementName, property, value) {
			const element = document.createElement(elementName);  
			element[property] = value; 
			return element;
		}
		/*ik append created element function*/
		function appendToLI(elementName, property, value) {
			const element = createElement(elementName, property, value);     
			li.appendChild(element); 
			return element;
		}
		/*ik use of function to create and append element to create LI*/
		const li = document.createElement('li');
		appendToLI('span', 'textContent', text);     
		appendToLI('label', 'textContent', 'Confirmed')
			.appendChild(createElement('input', 'type', 'checkbox'));
		appendToLI('button', 'textContent', 'edit');
		appendToLI('button', 'textContent', 'remove');
		return li;
	}; /*END function createLI(text) */

 
	/*ik insert submitted input text into LI and appended it to ul */
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const text = input.value;
		input.value = '';
		const li = createLI(text);
		ul.appendChild(li);
	});
   /*ik checkbox checked in the new LI element, than add class to trigger colour highlight*/
	ul.addEventListener('change', (event) => {
		const checkbox = event.target;
		const checked = checkbox.checked;
		const listItem = checkbox.parentNode.parentNode;

		if (checked) {
  			listItem.className = 'responded';
		} else {
		  	listItem.className = '';
		}
	});
    
	/*iK add function to the buttons - remove \ edit \ save */
/* IK BEFORE DRY */ /*
	ul.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			const button = e.target;
			const li = button.parentNode;
			const ul = li.parentNode;
		//remove button
			if (button.textContent === 'remove') {
				ul.removeChild(li);
			} 
		//edit button
			else if (button.textContent === 'edit') { 
				const span = li.firstElementChild;
				const input = document.createElement('input');
				input.type = 'text';
				input.value = span.textContent;
				li.insertBefore(input, span);
				li.removeChild(span);
				button.textContent = 'save';
			} 
		//save button
			else if (button.textContent === 'save') { 
				const input = li.firstElementChild;
				const span = document.createElement('span');
				span.textContent = input.value;
				li.insertBefore(span, input);
				li.removeChild(input);
				button.textContent = 'edit';
			}
		}
	}); /*END ul.addEventListener('click', (e) =>*/   

	
/* IK AFTER DRY */ /*ik slightly easier to read plus more flexible */
	ul.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			const button = e.target;
			const li = button.parentNode;
			const ul = li.parentNode;
			const iKbuttonText = button["textContent"];

			const iKbuttonFunctionsObj = {
				remove: () => ul.removeChild(li),
				edit: () => {
					const span = li.firstElementChild;
					const input = document.createElement('input');
					input.type = 'text';
					input.value = span.textContent;
					li.insertBefore(input, span);
					li.removeChild(span);
					button.textContent = 'save';
				},
				save: () => {
					const input = li.firstElementChild;
					const span = document.createElement('span');
					span.textContent = input.value;
					li.insertBefore(span, input);
					li.removeChild(input);
					button.textContent = 'edit';
				}
			}; /*END iKbuttonFunctionsObj {}*/

			/* iK no if statement is required anymore*/
			iKbuttonFunctionsObj[ iKbuttonText ]();

		} /*END if (e.target.tagName === 'BUTTON') */
	}); /*END ul.addEventListener('click', (e) => */

});/*END document.addEventListener('DOMContentLoaded' */