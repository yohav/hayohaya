var express = require('express');
var router = express.Router();
var models=require('../models');
var User=models.User;
var Lesson =models.Lesson;
/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.post('/takeLesson', function (req, res,next) {
    var details=req.body;
    User.findById(details.userId,function(err,user){
        if(err)
        {
            res.send({error:"500"});
        }
        Lesson.findById(details.lessonId,function(err,lesson){
            if(err)
            {
                res.send({error:"500"});
            }
            User.findById(lesson.publisher,function(err,publisher){
                if(err)
                {
                    res.send({error:"500"});
                }
                if(user.points<lesson.pointsForCompletion){
                    res.send("error: user doesn't have enough points");
                    return;
                }
                PointsTransaction(user,publisher,lesson.pointsForCompletion);
                user.takenLessons.push(details.lessonId);
                user.save();
                res.send({success:"transcation successful"});
            });

        });
    });
    res.send("added lesson to user");
});

function PointsTransaction(from,to,amount){
    from.points=from.points-amount;;
    to.points=to.points+amount;
}

module.exports = router;