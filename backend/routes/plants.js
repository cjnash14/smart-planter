const express = require("express");
const controller = require("../controllers/plantController");
const router = express.Router();

router.get("/", controller.getAllPlants);
router.get("/:id", controller.getPlantById);

router.post("/", controller.createPlant);
router.put("/:id", controller.updatePlant);
router.delete("/:id", controller.deletePlant);

module.exports = router;