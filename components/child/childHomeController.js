tryStarJungleApp.controller('ChildHomeController', ['$scope',
    function ($scope) {

		$scope.childHome.money = getMoney();

		$scope.childHome.companiesArray = getCompanies();

		$scope.childHome.user = getUser();

      }]);
