/**
 * Created by lenovo on 9/26/2016.
 */


var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
var User=require('./User');
var Schema=mongoose.Schema;

var LessonSchema=new Schema({
    category:String,
    name:String,
    publisher:String,
    description:String,
    pointsForCompletion:Number,
    hours:Number
},{ collection:'lessons'});

var Lesson=mongoose.model('Lesson',LessonSchema);
Lesson.AddUserDetails=function(lesson){
    User.findById(lesson.publisher,function(err,user){
        if(err)
        {
            return false;
        }
        lesson.userDetails={
            name:user.name,
            picture:user.profile
        };
    });
};

 Lesson.EnrichLessons=function(lessons){
    for(i in lessons){
        Lesson.AddUserDetails(lessons[i]._doc);
    }
};


module.exports=Lesson;