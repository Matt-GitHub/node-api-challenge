const express = require("express");
const db = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(getId => {
      console.log("get project request", getId);
      res.status(200).json(getId);
    })
    .catch(error => {
      console.log("get project error", error);
      res
        .status(500)
        .json({ errorMessage: "cannot get projects at this time" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(getId => {
      console.log("get project request", getId);
      res.status(200).json(getId);
    })
    .catch(error => {
      console.log("get project error", error);
      res
        .status(500)
        .json({ errorMessage: "cannot get projects at this time" });
    });
});

router.get("/:id/project/actions", (req, res) => {
  const { id } = req.params;
  db.getProjectActions(id)
    .then(getId => {
      console.log("get project actions request", getId);
      res.status(200).json(getId);
    })
    .catch(error => {
      console.log("get project error", error);
      res
        .status(500)
        .json({ errorMessage: "cannot get projects at this time" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  db.insert(data)
    .then(postResponse => {
      console.log("post request", postResponse);
      res.status(201).json(postResponse);
    })
    .catch(error => {
      console.log("post error", error);
      res
        .status(500)
        .json({ errorMessage: "cannot post to database at this time" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(deleteProject => {
      console.log("delete project", deleteProject);
      res.status(200).json(deleteProject);
    })
    .catch(error => {
      console.log("delete error", error);
      res
        .status(500)
        .json({ errorMessage: "sorry cannot process the delete request" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const edit = req.body;
  db.update(id, edit)
    .then(change => {
      console.log("edit project", change);
      res.status(200).json(change);
    })
    .catch(error => {
      console.log("edit error", error);
      res
        .status(500)
        .json({ errorMessage: "sorry cannot edit project at this time" });
    });
});

// ** export router to index.js
module.exports = router;
