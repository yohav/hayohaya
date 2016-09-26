var express = require('express');
var router = express.Router();
var models=require('../models');
var User=models.User;
/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.post('/takeLesson', function (req, res,next) {
    var details=req.body;
    User.findById(details.userId,function(err,doc){
        if(err)
        {
            console.error('error');
        }
        doc.takenLessons.push(details.lessonId);
        doc.save();
    });
    res.send("added lesson to user");
});

module.exports = router;