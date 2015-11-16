/* 
 * Controller for Home Page
 * Not much happening here
 * @author Paul Schweppe
 * 
 */
angular.module('sharedControllers').controller('defaultController', function($scope,$modal,$location) {
    
    $scope.menuClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "active" : "";
    };
  
    /**
     * 
     * @param {string} size Options are lg, sm or blank
     * @param {boolean} errorModal
     * @returns {undefined}
     */
    $scope.openModal = function(template,size,local) {
        var templateDir = '../shared/views/partials/modals/';
        if(local){
            templateDir = 'app/views/partials/modals/';
        }
        $modal.open({
            templateUrl: template?templateDir+template:templateDir+'errorModal.html',
            windowTemplateUrl : '../shared/views/partials/modalWindow.html',
            size: size,
            controller: function($scope, $modalInstance,iconCls){
		$scope.iconCls = iconCls;
  
                $scope.ok = function(){
                    $modalInstance.close();
                };
                $scope.cancel = function(event){
                    if(event){
                        event.preventDefault();
                    }
                    $modalInstance.dismiss();
                };
            },
            //Used to pass in values from current scope
            resolve: {
                iconCls: function(){
                        return $scope.iconCls;
                }
            }
        });
        
        return false;
    };
    
});