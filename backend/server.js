const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const plants = [
  {
    id: "1",
    common_name: "White Oak",
    scientific_name: "Quercus alba",
    type: "Tree",
    origin: "Eastern and Central North America",
    watering: "Moderate",
    maintenance: "Low",
    cycle: "Perennial",
    growth_rate: "Slow"
  },
  {
    id: "2",
    common_name: "Osage orange",
    scientific_name: "Maclura pomifera",
    type: "Tree",
    origin: "Central and Southern United States",
    watering: "Low",
    maintenance: "Low",
    cycle: "Perennial",
    growth_rate: "Medium"
  },
  {
    id: "3",
    common_name: "Peace rose",
    scientific_name: "Rosa 'Madame A. Meilland'",
    type: "Shrub",
    origin: "France",
    watering: "Moderate",
    maintenance: "Low",
    cycle: "Perennial",
    growth_rate: "Fast"
  }
]

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.get("/plants", (req, res) => {
  const filters = req.query;

  const filteredPlants = plants.filter((plant) => {
    return Object.entries(filters).every(([key, value]) => {
      return plant[key] == value;
    })
  })

  res.json(filteredPlants);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});