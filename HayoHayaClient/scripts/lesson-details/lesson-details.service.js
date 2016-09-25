/**
 * Created by lenovo on 9/26/2016.
 */
app.service('lessonDetailsService',LessonDetailsService)

LessonDetailsService.$inject=['$http','$q','serverUrl'];

function LessonDetailsService($http,$q,serverUrl){

    this.postLesson=(lesson)=>{
        $http.post(`${serverUrl}/lessons`,lesson).then(function(response){
           console.log(response);
        });
    };

}
