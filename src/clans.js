
var nextRandom;

function setNextRandom(number) {
	nextRandom = number;
}

function random() {
	return nextRandom;
}

function ataque(vampiros, at, d) {

  var dado = random();

	var vampirosResultante = {
		vampiro1: vampiros.vampiro1,
	  vampiro2: vampiros.vampiro2
	};

	if (dado <= at) {
		vampirosResultante.vampiro1 += d;
		vampirosResultante.vampiro2 -= d;
	} else {
		vampirosResultante.vampiro2 += d;
		vampirosResultante.vampiro1 -= d;
	}

	return vampirosResultante;
}

module.exports.ataque = ataque;
module.exports.setNextRandom = setNextRandom;
