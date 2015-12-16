
function random() {
	return 4;
}

function ataque(ev1, ev2, at, d) {

  var dado = random();

	var vampiros = {
		vampiro1: ev1,
	  vampiro2: ev2
	};

	if (dado <= at) {
		vampiros.vampiro1 += d;
		vampiros.vampiro2 -= d;
	} else {
		vampiros.vampiro2 += d;
		vampiros.vampiro1 -= d;
	}

	return vampiros;
}

module.exports.ataque = ataque;
