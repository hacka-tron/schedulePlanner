const express = require("express");

const CourseController = require("../controllers/courses");

const router = express.Router();

router.get("", CourseController.getCourses);

router.post("", CourseController.addCourse);

module.exports = router;
