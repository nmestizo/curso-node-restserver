
const express = require('express');
const { getUser, updateUser, newUser, deleteUser } = require('../controller2/user');

const router = express.Router();


router.get('/', getUser);

  router.put('/:id', updateUser);
 
  router.post('/', newUser);

  router.delete('/', deleteUser);


module.exports = router;



