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
            res.send({error:"500"}).statusCode(500);
        }
        Lesson.findById(details.lessonId,function(err,lesson){
            if(err)
            {
                res.send({error:"500"}).statusCode(500);
            }
            User.findById(lesson.publisher,function(err,publisher){
                if(err)
                {
                    res.send({error:"500"}).statusCode(500);
                }

                if(!PointsTransaction(user,publisher,lesson.pointsForCompletion)){
                    res.send("error: doesn't have enough points");
                }
                user.takenLessons.push(details.lessonId);
                user.save();
                res.send({success:"transcation successful"});
            });

        });
    });
    res.send("added lesson to user");
});

router.get('/users/', function (req, res, next) {
    User.find()
        .then(function(doc){
            res.send(doc);
        });
});

router.get('/users:id', function (req, res, next) {
    var id = req.params.id;
    User.findById(id, function (err, data) {
        if (err) {
            console.error(err);
        }
        res.send(data);
    })
});

function PointsTransaction(from,to,amount){
    if(from.points<amount){
        return false;
    }
    from.points=from.points-amount;;
    to.points=to.points+amount;
    return true;
}

module.exports = router;