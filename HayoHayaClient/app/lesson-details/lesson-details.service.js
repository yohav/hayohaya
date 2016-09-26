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

    this.lessonSchema=()=>{
      var defer=$q.defer();

        defer.resolve({
            "type": "object",
            "title": "Lesson",
            "properties": {
                "category": {
                    "title": "Category",
                    "type": "string"
                },
                "name": {
                    "title": "Name",
                    "type": "string"
                },
                "publisher": {
                    "title": "Publisher",
                    "type": "string"
                },
                "description": {
                    "title": "Description",
                    "type": "string"
                },
                "pointsForCompletion": {
                    "title": "Points For Completion",
                    "type": "number"
                },
                "hours": {
                    "title": "Hours",
                    "type": "number"
                },
                "theme": {
                    "title": "Theme",
                    "type": "string"
                }
//          }
            }
        });
        return defer.promise;
    };

}
