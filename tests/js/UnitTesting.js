export function createElement(tag, text, parent, attribs) {
	let element = document.createElement(tag);
	if (text) element.innerText = text;
	(parent || document.body).appendChild(element);
	if (attribs) for(let key in attribs)element.setAttribute(key, attribs[key]);
	return element;
}

export function test (label, callback, expected = 'OK',capture = true) {
	let lineElement =  createElement('p');
	createElement('b', label + ': ', lineElement);

	let result;
	if (capture) {
		// try { 
			result = callback(); 
			result =  'OK' + (result? ' (' + result + ')' : '');
		// } catch (e) {  result = 'ERROR: ' + e.message; throw e; }
	} else result = 'OK ' + (callback() || '');


	let color = (result.startsWith(expected))? 'green' : 'red';
	createElement('b', result, lineElement, {style : 'color: ' + color});
	
}
