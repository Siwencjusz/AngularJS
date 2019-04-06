(function () {
    "use strict";

    var app = angular.module("productManagement",
        [
            "ui.router"
        ]);

    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('AngularApp#/Index.cshtml');
            $stateProvider
            .state("home",
            {
                url: "/",
                templateUrl: '/Scripts/AngularApp/welcomeView.html'
            })
              .state("productList",
              {
                  url: "/list",
                  templateUrl: '/Scripts/AngularApp/productList.html'
              })
            .state("productEdit",
              {
                  url: "/edit",
                  templateUrl: '/Scripts/AngularApp/edit.html'
              })
            .state("AddProduct",
              {
                  url: "/add",
                  templateUrl: '/Scripts/AngularApp/AddProduct.html'
              })
             .state("ReomoveProduct",
              {
                  url: "/remove",
                  templateUrl: '/Scripts/AngularApp/ReomoveProduct.html'
              })
            
        }
    ]
 );
    app.controller('productManagement', ['$scope', function ($scope) {
        $scope.products = [
      {
          name: 'hummer',
          developer: 'Biedax',
          price: 5.99
      },
      {
          name: 'chainsaw',
          developer: 'Kruger',
          price: 99.99
      }
      ,
      {
          name: 'screwdriver',
          developer: 'EyeLightning',
          price: 0.99
      },
      {
          name: 'extension cord',
          developer: 'Lines & wires',
          price: 3.99
      }
        ];
        $scope.change = function (product) {
            var appElement = document.querySelector('[ng-app=myApp]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function (name, developer, price) {
                $scope.product = product;

            });
        }
        $scope.addProduct = function (name, developer, price) {
            $scope.products.push({
                name: name,
                developer: developer,
                price: price
            });
            $scope.name = "";
            $scope.developer = "";
            $scope.price = 0.00;
            $scope.removeItem = function (index) {
                $scope.items.splice(index, 1);
            };
        };
    }]);
}());