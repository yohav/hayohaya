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
    picture : String,
    points : Number,
    rank : {type: [Number]},
    takenLessons:{type: [Schema.Types.ObjectId], ref: 'Lesson' },
    publishedLessons:{type: [Schema.Types.ObjectId], ref: 'Lesson' }
},{ collection:'user_collection'});

var User=mongoose.model('User',UserSchema);

module.exports=User;