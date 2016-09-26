var express = require('express');
var router = express.Router();
var models=require('../models');
var User=models.User;
var Lesson =models.Lesson;

/* GET users listing. */
router.get('/', function (req, res) {
    User.find()
        .exec(function(err,doc){
            res.send(doc);
        });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var data=new User(req.body);
    data.save();
    res.send("success");
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

function PointsTransaction(from,to,amount){
    if(from.points<amount){
        return false;
    }
    from.points=from.points-amount;;
    to.points=to.points+amount;
    return true;
}

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    User.findById(id, function (err, data) {
        if (err) {
            console.error(err);
        }
        res.send(data);
    })
});

router.get('/rank/:id', function (req, res, next) {
    var id = req.params.id;
    var details = req.body;
    User.findById(id, function (err, user) {
        res.send((user.rank.reduce(function(a, b) { return a + b; }, 0)) / user.rank.length);
    })
});

router.post('/rank/:id', function (req, res, next) {
    var id = req.params.id;
    var details = req.body;
    User.findById(id, function (err, user) {
        user.rank.push(details.rank);
        user.save();
        res.send((user.rank.reduce(function(a, b) { return a + b; }, 0)) / user.rank.length);
    })
});



module.exports = router;