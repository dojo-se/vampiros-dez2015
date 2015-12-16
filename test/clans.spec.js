var assert = require('assert');
var clans = require('../src/clans');

describe('Ataque de clãs de vampiros', function(){
	it('Vampiros 1 e 2 tem 7, 5 de ev, at = 2 e d = 4 e rolagem 4', function() {
		clans.setNextRandom(4);
		var energias = clans.ataque({
			vampiro1: 7,
			vampiro2: 5
		},2,4)
		assert.equal(energias.vampiro1, 3);
		assert.equal(energias.vampiro2, 9);
	});

	it('Vampiros 1 e 2 tem 7, 5 de ev, at = 2 e d = 4 e rolagem 1', function() {
		clans.setNextRandom(1);
		var energias = clans.ataque({
			vampiro1: 7,
			vampiro2: 5
		},2,4)
		assert.equal(energias.vampiro1, 11);
		assert.equal(energias.vampiro2, 1);
	});

	it('Vampiros 1 e 2 tem 7, 5 de ev, at = 2 e d = 4 com duas rolagens (uma o vampiro1 ganha e a outra o vampiro2 ganha)', function() {
		var vampiros = {
			vampiro1: 7,
			vampiro2: 5
		};
		clans.setNextRandom(1);
		vampiros = clans.ataque(vampiros,2,4)
		clans.setNextRandom(4);
		vampiros = clans.ataque(vampiros,2,4);
		assert.equal(vampiros.vampiro1, 7);
		assert.equal(vampiros.vampiro2, 5);
	});

	it('Vampiros 1 e 2 tem 1, 1 de ev, at = 2 e d = 4 com uma rolagem', function() {
		var vampiros = {
			vampiro1: 1,
			vampiro2: 1
		};
		clans.setNextRandom(1);
		vampiros = clans.ataque(vampiros,2,4);

		assert.equal(vampiros.vampiro1, 5);
		assert.equal(vampiros.vampiro2, -3);
	});
});
