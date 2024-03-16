const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let user = req.users.filter(user => user.username === req.params.name);
    if (user.length === 0){
      res.send({
        error: {
          message: 'User not found',
          status: 404
        }
      });
    } else {
      res.send(user);
    }
  });

module.exports = router