var fs = require('fs');
var BbPromise = require('bluebird');

/* pushes Json data (dataToPush) to mock-db.json */
const createCard = (card) => {

	return new BbPromise((resolve, reject) => {
		fs.readFile('./mock-db.json', (err, data) => {
			if (err) reject(err);
			
			var cards = JSON.parse(data);
			const newId = cards.cards.length + 1;

			card["id"] = newId;
			cards.cards.push(card);

			fs.writeFile('./mock-db.json', JSON.stringify(cards), 'utf8', (err) => {
				if (err) reject(err);
				else resolve(newId);
			});
		});
	});

}

module.exports = createCard;