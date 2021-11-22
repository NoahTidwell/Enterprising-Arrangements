const router = require('express').Router();
const { Venuetype } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all venue Types
    Venuetype.findAll({
    })
      .then(dbData => res.json(dbData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });
  
  router.get('/:id', (req, res) => {
    // find one venue type by its `id` value
    Venuetype.findOne({
      where: {
        id: req.params.id
      },
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No venue type found with this id' });
          return;
        }
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
   });
  
  router.post('/', (req, res) => {
    // create a new category
    Venuetype.create({
        type_name: req.body.type_name,
        description: require.body.description

     })
      .then(dbData => res.json(dbData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Venuetype.update({
        type_name: req.body.type_name,
        description: require.body.description
        },
        {
          where: {
          id: req.params.id
          }
        }
      )     
        .then(dbData => {
          if (!dbData[0]) {
            res.status(404).json({ message: 'No Categgory is found with this id' });
            return;
          }
          res.json(dbData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });
  
  router.delete('/:id', (req, res) => {
    Venuetype.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No Category found with this id' });
          return;
        }
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;