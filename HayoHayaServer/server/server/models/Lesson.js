/**
 * Created by lenovo on 9/26/2016.
 */


var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var LessonSchema=new Schema({
    name:String,
    publisher:String,
    description:String,
    pointsForCompletion:Number,
    hours:Number,
    theme:String
},{ collection:'lessons'});

var Lesson=mongoose.model('Lesson',LessonSchema);

module.exports=Lesson;