const plantService = require("../services/plantService");

async function getAllPlants(req, res) {
    try {
        const plants = await plantService.getAllPlants();

        res.json(plants);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Unable to retrieve plants"
        });
    }
}

async function getPlantById(req, res) {
    try {
        const plant = await plantService.getPlantById(req.params.id);
        if (plant) {
            res.json(plant);
        } else {
            res.status(404).json({ message: "Plant not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to retrieve plant" });
    }
}

async function createPlant(req, res) {
    try {
        const newPlant = await plantService.createPlant(req.body);
        res.status(201).json(newPlant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to create plant" });
    }
}

async function updatePlant(req, res) {
    try {
        const updatedPlant = await plantService.updatePlant(req.params.id, req.body);
        if (updatedPlant) {
            res.json(updatedPlant);
        } else {
            res.status(404).json({ message: "Plant not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to update plant" });
    }
}

async function deletePlant(req, res) {
    try {
        const deleted = await plantService.deletePlant(req.params.id);
        if (deleted) {
            res.json({ message: "Plant deleted" });
        } else {
            res.status(404).json({ message: "Plant not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to delete plant" });
    }
}

module.exports = {
    getAllPlants,
    getPlantById,
    createPlant,
    updatePlant,
    deletePlant
};