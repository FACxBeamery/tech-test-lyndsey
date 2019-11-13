const express = require("express");

const router = express();
const handleJobs = require("./handlers/handleJobs")

router.use(express.static("public"));

router.get("/jobs", handleJobs)
module.exports = router