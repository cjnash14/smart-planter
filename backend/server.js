const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const plants = [
  {
    id: "1",
    commonName: "White Oak",
    attributes: {
        plantType: "Tree",
        sunlight: "high",
        waterNeeds: "medium",
        maxHeightCm: "2133",
        maxWidthCm: "1982"
    }
  },
  {
    id: "2",
    commonName: "Osage orange",
    attributes: {
        plantType: "Tree",
        sunlight: "medium",
        waterNeeds: "low",
        maxHeightCm: "1219",
        maxWidthCm: "914"
    }
  },
  {
    id: "3",
    commonName: "Peace rose",
    attributes: {
        plantType: "Shrub",
        sunlight: "high",
        waterNeeds: "medium",
        maxHeightCm: "150",
        maxWidthCm: "105"
    }
  }
]

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.get("/plants", (req, res) => {
  const filters = req.query;

  const filteredPlants = plants.filter((plant) => {
    return Object.entries(filters).every(([key, value]) => {
      return plant.attributes[key] == value;
    })
  })

  res.json(filteredPlants);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});