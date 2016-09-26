/**
 * Created by lenovo on 9/26/2016.
 */

function AddUserDetails(lesson,User){
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
}

function EnrichLessons(lessons,User){
    for(i in lessons){
        AddUserDetails(lessons[i]._doc, User);
    }
}

module.exports={
    AddUserDetails:AddUserDetails,
    EnrichLessons:EnrichLessons
};

