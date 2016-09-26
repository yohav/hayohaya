/**
 * Created by lenovo on 9/26/2016.
 */


var mongoose=require('mongoose');
mongoose.Promise = global.Promise;

var Schema=mongoose.Schema;

var CategorySchema=new Schema({
    name:String,
    lessons:Array
},{ collection:'categories'});

var Category=mongoose.model('Category',CategorySchema);

module.exports=Category;/**
 * Created by lenovo on 9/26/2016.
 */
