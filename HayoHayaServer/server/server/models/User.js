/**
 * Created by lenovo on 9/26/2016.
 */
/**
 * Created by lenovo on 9/26/2016.
 */


var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name : String,
    password : String,
    profession : String,
    profile : String,
    points : Number,
    takenLessons:Array,
    publishedLessons:Array
},{ collection:'user_collection'});

var User=mongoose.model('User',UserSchema);

module.exports=User;