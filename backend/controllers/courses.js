const Course = require("../models/course");

exports.getCourses = (req, res, next) =>{
  Course.find().then(result =>{
    res.status(200).json({
      message: "Courses feteched sucessfully",
      courses: result
    })
  })
};

exports.addCourse = (req, res, next) =>{
  const course = new Course({
    id: req.body.id,
    credit_hours: req.body.credit_hours,
    name: req.body.name,
    description: req.body.description,
    prereqs: req.body.prereqs
  });

  course.save().then(result =>{
    res.status(200).json({
      message: "Courses feteched sucessfully",
      course: result
    })
  })

}
