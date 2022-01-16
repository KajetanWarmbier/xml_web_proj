const express = require("express");
const cors = require("cors");

const index = express();

index.use(express.json());
index.use(cors());

const xmlRoutes = require("./drivers/routes/xmlRoutes");

index.use("/szpital", xmlRoutes);

module.exports = index;
