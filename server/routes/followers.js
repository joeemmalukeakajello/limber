const { Router } = require('express');
const { Op } = require("sequelize");

const followersRouter = Router();

const { Pose, AfterPose, PoseBodyPart, User, UserPose, Flow, BodyPart, PoseFlow, Following } = require('../db/sequelize');

followersRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  Following.findAll({ where: { follower_id: id }})
    .then(rows => {
      Promise.all(rows.map(row => User.findByPk(row.followee_id)))
        .then(followees => {
          res.status(200).send(followees);
        })
        .catch(err => {
          console.warn(err);
          res.sendStatus(404);
        })
    })
    .catch(err => {
      console.warn(err);
      res.sendStatus(404);
    })
});

followersRouter.get('/allusers/:id', (req, res) => {
  const { id } = req.params;

  User.findAll({ where: { id: { [Op.ne]: id }}})
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      console.warn(err);
      res.sendStatus(404);
    })
});

followersRouter.delete('/unfollow/:id&:unfollowId', (req, res) => {
  const { id, unfollowId } = req.params;

  Following.destroy({
    where: {
      follower_id: id,
      followee_id: unfollowId
    }})
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.warn(err);
      res.sendStatus(404);
    })
})

followersRouter.post('/follow/:id&:followId', (req, res) => {
  const { id, followId } = req.params;

  Following.create({ follower_id: id, followee_id: followId })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.warn(err);
      res.sendStatus(404);
    })
})



module.exports = followersRouter;