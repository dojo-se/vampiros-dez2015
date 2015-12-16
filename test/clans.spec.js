var assert = require('assert');
var clans = require('../src/clans');

describe('Ataque de clãs de vampiros', function(){
	it('Vampiros 1 e 2 tem 7, 5 de ev, at = 2 e d = 4', function() {
		var energias = clans.ataque(7,5,2,4)
		assert.equal(energias.vampiro1, 3);
		assert.equal(energias.vampiro2, 9);
	});
});
