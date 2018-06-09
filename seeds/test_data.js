
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stash').del()
    .then(function () {
      // Inserts seed entries
      return knex('stash').insert([
        {id: 1,
          yarn: 'Häkelgarn',
          brand: 'Wolle Rödel',
          quantity: '280m',
          colourway: '032',
          nearest_colour: 'White',
          weight: 'Lace',
          fibre_content: 'Cotton'

        },
        {id: 2,
          yarn: 'Mille Fili',
          brand: 'Wolle Rödel',
          quantity: '130m',
          colourway: 'Alge',
          nearest_colour: 'Turquoise',
          weight: 'DK',
          fibre_content: 'Cotton'

        },
        {id: 3,
          yarn: 'Mille Fili',
          brand: 'Wolle Rödel',
          quantity: '130m',
          colourway: 'Nachtblau',
          nearest_colour: 'Dark Blue',
          weight: 'DK',
          fibre_content: 'Cotton'
        },
      ]);
    });
};
