



var input = document.querySelector('#input'),
	output = document.querySelector('#output'),
	submit_code = document.querySelector('.submit');
	submit_code.onclick = function() {
		var raw_code = String(input.value)
		var code_arr = raw_code.split('');
		var filter = Array.prototype.filter.call(code_arr, function(iterate) {
			return iterate != ' ' && iterate != '\n' && iterate != '\t';
		});
		var obfuscated = String(filter.join(''))
		/* Iterate over JS reserved words */
		fix_vars = obfuscated.replace(/var/g, 'var ');
		fix_returns = fix_vars.replace(/return/g, 'return ');
		fix_instanceof = fix_returns.replace(/instanceof/g, ' instanceof ');
		fix_elseif = fix_instanceof.replace(/elseif/g, 'else if');
		output.value = fix_elseif;
	}
