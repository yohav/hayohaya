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
    teacher:{type: Schema.Types.ObjectId, ref: 'User' },
    description:String,
    price:Number,
    hours:Number
},{ collection:'lessons'});

var Lesson=mongoose.model('Lesson',LessonSchema);


module.exports=Lesson;