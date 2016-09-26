/**
 * Created by lenovo on 9/26/2016.
 */
var express = require('express');
var router = express.Router();
var models=require('../models');
var Category=models.Category;

router.get('/', function(req, res, next) {
    Category.find()
        .then(function(doc){
            res.send(doc);
        });
});


router.post('/getLessons', function(req, res, next) {
    var offset=req.body;
    var id=offset.id;
    Category.findById(id,function(err,category){
        if(err)
        {
            res.send({error:"500"});
        }
        var lessons=category.lessons.splice(offset.index,offset.amount);
        res.send(lessons);
    });
});

router.post('/categories/', function(req, res, next) {
    var heroes=req.body;
    Category.find({'_id': { $in: heroes } },
        function(err, docs){
            res.send(docs);
        });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var data=new Category(req.body);
    data.save();

    res.send("success");
});

router.put('/:id', function(req, res, next) {
    var body=req.body;
    var id=req.params.id;
    Category.findById(id,function(err,doc){
        if(err)
        {
            console.error('error');
        }
        doc=body;
        doc.save();
    });
    res.send(id+" updated");
});

router.delete('/:id', function(req, res, next) {
    var id=req.params.id;
    Category.findByIdAndRemove(id).exec();
    res.send(id+" deleted");
});

router.get('/?name=:name', function(req, res, next) {
    var name = req.params.name;
    Category.find({'name':'/'+name+'/i'})
        .then(function(doc){
            res.send(doc);
        });
});



module.exports = router;