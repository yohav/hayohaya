/**
 * Created by lenovo on 9/26/2016.
 */

function CleanUsers(users){
    for(i in users){
        var user=users[i]._doc;
        delete  user.takenLessons;
        delete  user.publishedLessons;
    }
}

module.exports={
    CleanUsers:CleanUsers
};

