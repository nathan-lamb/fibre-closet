
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1,
          yarn: 'rowValue1',
          brand: 'xx',
          quantity: 'yy',
          colourway: 'xx',
          nearest_colour: 'zz',
          weight: 'xx',
          fibre_content: 'ee'

        },
        {id: 2,
          yarn: 'rowValue1',
          brand: 'xx',
          quantity: 'yy',
          colourway: 'xx',
          nearest_colour: 'zz',
          weight: 'xx',
          fibre_content: 'ee'

        },
        {id: 3,
          yarn: 'rowValue1',
          brand: 'xx',
          quantity: 'yy',
          colourway: 'xx',
          nearest_colour: 'zz',
          weight: 'xx',
          fibre_content: 'ee'

        },
      ]);
    });
};
