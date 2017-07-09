const express = require("express");
const likeRouter = express.Router();

likeRouter.post("/likes", function(req, res) {
  var newLike = models.like
    .build({
      like: req.body.likerid
    })
    .save()
    .then(function(savedLike) {})
    .catch(function(err) {
      console.warn("Error ", err);
    });
  // post req should have the post id and the liker id.
  return res.redirect("homepage");
});

module.exports = likeRouter;
