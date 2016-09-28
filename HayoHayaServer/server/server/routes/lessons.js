var express = require('express');
var router = express.Router();
var models = require('../models');
var Lesson = models.Lesson;
var User = models.User;
var Utils = models.Utils;
var Category=models.Category;
router.get('/', function (req, res, next) {
    Lesson.find()
        .populate('teacher')
        .exec(function (err, doc) {
        Utils.CleanUsers(doc);
        res.send(doc);
    });
});

router.get('/:id', function (req, res, next) {
    var id=req.params.id;
    Lesson.findById(id)
        .populate('teacher')
        .exec(function (err, doc) {
            Utils.CleanUsers([doc]);
            res.send(doc);
        });
});

router.post('/lessons/', function (req, res, next) {
    var heroes = req.body;
    Lesson.find({ '_id': { $in: heroes } })
        .populate('teacher')
    .exec(function (err, docs) {
        res.send(docs);
    });
});

router.post('/', function (req, res, next) {
    var lesson=req.body;
    console.log(req.body);
    var data = new Lesson(lesson);
    data.save(function (err) {
        if(err) throw err;
        Category.findOne({name:lesson.category},function(err,category){
            if(err) {
                res.status(500).send({ error: "500" });
            }
            category.lessons=category.lessons.concat(data._id);
            category.markModified('lessons');

            User.findById(lesson.teacher, function (err,teacher) {
                if(err) {
                    res.status(500).send({ error: "500" });
                }
                teacher.publishedLessons=teacher.publishedLessons.concat(data._id);
                teacher.markModified('publishedLessons');

                category.save();
                teacher.save();
                res.send("success");
            });


        });
    });


    

});

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    var newData=req.body;
    Lesson.findById(id, function (err, doc) {
        if (err) {
            res.status(500).send({ error: "500" });
        }
        doc=newData;
        doc.save();
        res.send(id + " updated");
    });

});

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Lesson.findOneAndRemove({_id: id}, function(err){
        if(err)throw err;
        res.send(id+" deleted");
    });
});

router.get('/?name=:name', function (req, res, next) {
    var name = req.params.name;
    Lesson.find({ 'name': '/' + name + '/i' })
        .populate('teacher')
        .exec(function (err, doc) {
        Utils.AddUserDetails(doc, User);
        res.send(doc);
    });
});

//router.get('/lessonPicture/:id', function(req, res, next) {
//    var id = req.params.id;
//    Lesson.findById(id,function(err,doc){
//        if(err)
//        {
//          res.status(500).send({error:"500"});
//        }
//        res.send(doc._doc.picture);
//    });
//});



module.exports = router;