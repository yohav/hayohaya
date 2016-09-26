/**
 * Created by lenovo on 9/26/2016.
 */
app.controller('lessonDetailsController',LessonDetailsController)

LessonDetailsController.$inject=['lessonDetailsService'];

function LessonDetailsController(lessonDetailsService){
    var vm=this;
    vm.lesson={};
    vm.schema={};
    vm.form = [
        "*",
        {
            type: "submit",
            title: "Save"
        }
    ];
    function init(){
        console.log('LessonDetailsController')
        vm.lesson.theme="http://www.scarymommy.com/wp-content/uploads/2014/10/homework-sucks.jpg";
        lessonDetailsService.lessonSchema().then(function(response){
           vm.schema=response;
        });
    }
    init();

    vm.postLesson=()=>{
      lessonDetailsService.postLesson(vm.lesson);
    };
}
