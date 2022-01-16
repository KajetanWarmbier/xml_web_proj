const xmlControllers = require("../controllers/xmlControllers");
const express = require("express");
const router = express.Router();

// GETs
router.get("/", xmlControllers.xml_get_all_data);
router.get("/pacjenci", xmlControllers.xml_get_pacjenci);
router.get("/zespolMedyczny", xmlControllers.xml_get_zespolmedyczny);
router.get("/opiekaMedyczna", xmlControllers.xml_get_opiekamedyczna);

// POSTs
router.post("/pacjent", xmlControllers.xml_post_pacjent);
module.exports = router;
