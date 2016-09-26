/**
 * Created by lenovo on 9/26/2016.
 */


var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var LessonSchema=new Schema({
    category:String,
    name:String,
    publisher:String,
    description:String,
    pointsForCompletion:Number,
    hours:Number,
    theme:String
},{ collection:'lessons'});

var Lesson=mongoose.model('Lesson',LessonSchema);

 Lesson.EnrichLessons=function(lessons){
    for(i in lessons){
        AddUserDetails(lessons[i]);
    }
}

 Lesson.AddUserDetails=function(lesson){
    User.findById(id,function(err,user){
        if(err)
        {
            return false;
        }
        lesson.userDetails={
            name:user.name,
            picture:user.profile
        };
    });
}


module.exports=Lesson;