const express = require("express");
const db = require("../data/helpers/actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(getActions => {
      console.log("get actions request", getActions);
      res.status(200).json(getActions);
    })
    .catch(error => {
      console.log("get actions error", error);
      res
        .status(500)
        .json({ errorMessage: "Sorry we cannot retrive actions at this time" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(getActions => {
      console.log("get actions request", getActions);
      res.status(200).json(getActions);
    })
    .catch(error => {
      console.log("get actions error", error);
      res
        .status(500)
        .json({ errorMessage: "Sorry we cannot retrive actions at this time" });
    });
});

router.post("/", (req, res) => {
  const actionContent = req.body;
  db.insert(actionContent)
    .then(actionPost => {
      console.log("action post", actionPost);
      res.status(201).json(actionPost);
    })
    .catch(error => {
      console.log("action post error", error);
      res
        .status(500)
        .json({ errorMessage: "sorry cannot post a new action at this time" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(removeId => {
      res.status(200).json(removeId);
    })
    .catch(error => {
      console.log("remove action error", error);
      res
        .status(500)
        .json({ errorMessage: "sorry cannot remove this action at this time" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const actions = req.body;
  db.update(id, actions)
    .then(edit => {
      res.status(201).json(edit);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "sorry cannot edit this action at this time" });
    });
});

// ** custome middleware
// function checkBody(req, res, next) {
//   if (req.body.description.length >= 128) {
//     res
//       .status(404)
//       .json({ errorMessage: "description may only be 128 characters" });
//   }
//   next();
// }

// export actions router into index.js
module.exports = router;
