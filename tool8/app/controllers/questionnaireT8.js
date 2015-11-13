/* 
 * Controller for Questionaire
 *
 * @author Paul Schweppe
 */

// ALFR :: TODO - REMOVE THIS AND HAVE THE DEFAULT SCOPE DEAL WITH IT AS IT IS USED EVEREYWHERE IN THIS TOOL!
angular.module('sstTool8App').controller('questionnaireT8Controller',function($scope,$routeParams,$location,$modal) {
    
    //Sets questionnaire to scope
    $scope.q_your_online_orientation = tool8Questionnaire['your-online-orientation'];
        
    /**
     * Function for question answer click event.
     * Sets the select answer for a question.
     * 
     * @param object question
     * @param object option
     */
    $scope.answer = function(question,option){
        question['response'] =  option.value;//option.answer;
        question['selected'] = option;
    };
   
    
});

