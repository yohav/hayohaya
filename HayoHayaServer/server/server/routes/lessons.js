var express = require('express');
var router = express.Router();
var models=require('../models');
var Lesson=models.Lesson;

router.get('/', function(req, res, next) {
    Lesson.find()
        .then(function(doc){
            res.send(doc);
        });
});

router.post('/lessons/', function(req, res, next) {
    var heroes=req.body;
    Lesson.find({'_id': { $in: heroes } },
        function(err, docs){
            res.send(docs);
        });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var data=new Lesson(req.body);
    data.save();

    res.send("success");
});

router.put('/:id', function(req, res, next) {
    var id=req.params.id;
    Lesson.findById(id,function(err,doc){
        if(err)
        {
            console.error('error');
        }
        doc.save();
    });
    res.send(id+" updated");
});

router.delete('/:id', function(req, res, next) {
    var id=req.params.id;
    Lesson.findByIdAndRemove(id).exec();
    res.send(id+" deleted");
});

router.get('/?name=:name', function(req, res, next) {
    var name = req.params.name;
    Lesson.find({'name':'/'+name+'/i'})
    .then(function(doc){
        res.send(doc);
    });
});

router.get('/lessonPicture/:id', function(req, res, next) {
    var id = req.params.id;
    Lesson.findById(id,function(err,doc){
        if(err)
        {
            console.error('error');
        }
        res.send(doc._doc.picture);
    });
});


module.exports = router;