angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
            
            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});
            
            // Form data for the login modal
            $scope.loginData = {};
            
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                                        scope: $scope
                                        }).then(function(modal) {
                                                $scope.modal = modal;
                                                });
            
            // Triggered in the login modal to close it
            $scope.closeLogin = function() {
            $scope.modal.hide();
            };
            
            // Open the login modal
            $scope.login = function() {
            $scope.modal.show();
            };
            
            // Perform the login action when the user submits the login form
            $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);
            
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                     $scope.closeLogin();
                     }, 1000);
            };
            })

.controller('PlaylistsCtrl', function($scope) {
            $scope.playlists = [
                                { title: 'One', id: 1 },
                                { title: 'Two', id: 2 },
                                { title: 'One', id: 3 },
                                { title: 'One', id: 4 },
                                { title: 'One', id: 5 },
                                { title: 'One', id: 6 }
                                ];
            })



.controller('AlertsCtrl', function($scope) {
            $scope.alerts = [
                             { title: 'One', id: 1 },
                             { title: 'Two', id: 4 },
                             { title: 'One', id: 3 },
                             { title: 'gghrh', id: 4 },
                             { title: 'One', id: 5 },
                             { title: 'One', id: 6 }
                             ];
            
            
            
            })



.controller('ChartCtrl', function($scope, $rootScope, $http, $state, $ionicModal) {

            
            $scope.doRefresh = function() {
            
            
            var friendsUrl ="https://plutus-matthew9012.c9users.io/social/getUsers";
            $http.get(friendsUrl).success(function(data, status, headers, config){
                                          
                                          $scope.accounts = data;
                                          
                                          })
            
//            var url ="https://plutus-matthew9012.c9users.io/progressbar?sessionid=" + sessionid;
//            
//            $http.get(url).success(function(data, status, headers, config){
//                                   
//                                   $scope.pos = data.income;
//                                   $scope.neg = data.expenditure;
//                                   
//                                   localStorage.setItem('currentExpense',data.expenditure);
//                                   
//                                   var pos_perc = 100 - parseInt(data.percent);
//                                   
//                                   $scope.pos_percent = "width:" + pos_perc + "%;";
//                                   $scope.neg_percent = "width:" + parseInt(data.percent) + "%;";
//                                   
//                                   
//                                   $scope.month = data.month;
//                                   
//                                   })
            
            };
            
            
            
            
            
            $scope.userName = localStorage.getItem('username');
            
            
            
            
            


            
            var sessionid = localStorage.getItem('sessionid');
            
            
            
            
            $scope.onHold = function() {
            $state.go("app.dialog");
            };
            
            $scope.onTap = function() {
            $state.go("app.friends");
            };
            
            
            var url ="https://plutus-matthew9012.c9users.io/progressbar?sessionid=" + sessionid;

            $http.get(url).success(function(data, status, headers, config){
                                   
                                   $scope.pos = data.income;
                                   $scope.neg = data.expenditure;
                                   
                                   localStorage.setItem('currentExpense',data.expenditure);
                                   
                                   var pos_perc = 100 - parseInt(data.percent);
                                   
                                   $scope.pos_percent = "width:" + pos_perc + "%;";
                                   $scope.neg_percent = "width:" + parseInt(data.percent) + "%;";
                                   
                                   
                                   $scope.month = data.month;
                                   
                                   });
            
            
            var adviceUrl = "https://plutus-matthew9012.c9users.io/recco/promotion";
            
            $http.get(adviceUrl).success(function(data, status, headers, config){
                                         
                                         $scope.advices = data;
                                         
                                         });
            
            
            
            $ionicModal.fromTemplateUrl('templates/advice.html', {
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal = modal
                                                })
            
            $scope.openModal = function() {
            $scope.modal.show()
            }
            
            $scope.closeModal = function() {
            $scope.modal.hide();
            };
            
            $scope.$on('$destroy', function() {
                       $scope.modal.remove();
                       });
            
            
            
            var goalUrl ="https://plutus-matthew9012.c9users.io/goals/goalList";
            
            $http.get(goalUrl).success(function(data, status, headers, config){
                                       
                                       
                                       
                                       var keys = Object.keys(data);
                                       
                                       $scope.goals = [data[keys[0]], data[keys[1]]];
                                       
                                       
                                       });
            
            

            
            $scope.colours = ["#F9690E","#FDE3A7" ];
            $scope.labels1 = ["Download Sales", "Mail-Order Sales"];
            $scope.data1 = [20, 100];
            

            
            })


.controller('FriendsCtrl', function($scope) {
            
            //            https://plutus-matthew9012.c9users.io/social/getUsers
            
            
            var sessionid = localStorage.getItem('sessionid');
            
            var friendsUrl ="https://plutus-matthew9012.c9users.io/social/getUsers";
            
            
            
            $http.get(friendsUrl).success(function(data, status, headers, config){
                                          
                                          $scope.accounts = data;
                                          
                                          });
            
            
            
            $scope.friends = [
                              { title: 'Dump', id: 1, updated: "true" },
                              { title: 'Judeau', id: 4, updated: false },
                              { title: 'Borama', id: 3, updated: false },
                              { title: 'Borama', id: 11, updated: true },
                              { title: 'Johney', id: 6, updated: true },
                              { title: 'Vladin', id: 8, updated: true }
                              ];
            })



//.controller('BudgetCtrl', function($scope, $http) {
//            $scope.data = {};
//            
//            var sessionid = localStorage.getItem('sessionid');
//            
//            
//            
//            
//            var catUrl ="https://plutus-matthew9012.c9users.io/money/get_budget?sessionid=" + sessionid;
//            
//            
//            var us = 0;
//            $http.get(catUrl).success(function(data, status, headers, config){
//                                      console.log(data);
//                                      
//                                      us = parseInt(data);
//                                      
//                                      localStorage.setItem('monthlyBudget', us);
//                                      
//                                      });
//            
//            $scope.user= {
//            min:0,
//            max:2000,
//            value:us
//            }
//            
//            $scope.user.value = us;
//            
//            
//            var average = 900;
//            
//            
//            
//            var net = parseInt(localStorage.getItem('net-worth'));
//            var savings = 400;
//            
//            var projected_net = parseInt(savings)*12 + parseInt(net);
//            
//            $scope.data.average = average;
//            $scope.data.affordable = 1000;
//            $scope.data.net = net;
//            
//            
//            
//            $scope.onRelease = function() {
//            
//            console.log($scope.user.value)
//
//            
//            var budgetUrl ="https://plutus-matthew9012.c9users.io/money/set_budget?sessionid=" + sessionid + "&budget=" + $scope.user.value;
//            
//            
//            $http.post(budgetUrl);
//            
//            };
//            
//            })
//

.controller('MenuCtrl', function($scope, $http, $ionicModal) {
            
            
            $scope.trends =   [{title:"Credit Card Payment",price:"1000"},{title:"Housing",price:"700"},{title:"Entertaiment",price: "80"},{title:"Movies&DVD",price: "70"},{title:"Income",price: "3000"},{title:"Grocery",price: "450"},{title:"Saving",price: "400"}];

            $scope.alerts = [
                             { title: 'CIBC', due: 'due in 5 days',id: 1 },
                             { title: 'RBC',due:'due in 5 days' , id: 2 }
                             ];
            
            
            
            
            $scope.friends = [
                              { title: '1. Dump', id: 1, score: 450 },
                              { title: '2. Judeau', id: 4, score: 390 },
                              { title: '3. Borama', id: 3, score: 340 },
                              { title: '4. Johney', id: 6, score: 300 },
                              { title: '5. Vladin', id: 8, score: 250 }
                              ];
            
            
            
            var sessionid = localStorage.getItem('sessionid');
            
            
            var friendsUrl ="https://plutus-matthew9012.c9users.io/social/getUsers";
            
            
            //FRIENDS
            $http.get(friendsUrl).success(function(data, status, headers, config){
                                          
                                          $scope.friends = data;
                                          
                                          console.log(data[localStorage.getItem('username')]);
                                          
                                          });
            
            
            var myPointsUrl ="https://plutus-matthew9012.c9users.io/social/getMyPoints?sessionid=" + sessionid;
            
            $http.get(myPointsUrl).success(function(data, status, headers, config){
                                           
                                           
                                           $scope.data.score = data;
                                           
                                           
                                           });
            
            
            
            
            var url ="https://plutus-matthew9012.c9users.io/money/get_banks?sessionid=" + sessionid;
            
            
            
            $http.get(url).success(function(data, status, headers, config){
                                   
                                   $scope.accounts = data;
                                   
                                   
                                   
                                   var sum = 0;
                                   angular.forEach(data, function(item){
                                                   sum += parseInt(item.balance);
                                                   })
                                   $scope.sum = sum;
                                   
                                   localStorage.setItem('net-worth', sum);
                                   
                                   
                                   });
            
            
            
            
            var catUrl ="https://plutus-matthew9012.c9users.io/money/get_categories?sessionid=" + sessionid;
            
            
            $http.get(catUrl).success(function(data, status, headers, config){
                                      
                                      
                                      
                                      
                                      var keys = Object.keys(data);
                                      
                                      
                                      
                                      $scope.labels = [keys[0], keys[1], keys[2], keys[3], keys[4]];
                                      $scope.datas = [data[keys[0]], data[keys[1]], data[keys[2]], data[keys[3]], data[keys[4]]];
                                      
                                      
                                      });
            
            
            $ionicModal.fromTemplateUrl('templates/budget.html', {
                                        scope: $scope,
                                        animation: 'slide-in-up'
                                        }).then(function(modal) {
                                                $scope.modal = modal
                                                })
            
            $scope.openModal = function() {
            $scope.modal.show()
            }
            
            $scope.closeModal = function() {
            $scope.modal.hide();
            };
            
            $scope.$on('$destroy', function() {
                       $scope.modal.remove();
                       });
            
            
            
            $scope.data = {};
            
            var sessionid = localStorage.getItem('sessionid');
            
            
            
            
            var catUrl ="https://plutus-matthew9012.c9users.io/money/get_budget?sessionid=" + sessionid;
            
            
            var us = 0;
            $http.get(catUrl).success(function(data, status, headers, config){
                                      
                                      us = parseInt(data);
                                      localStorage.setItem('monthlyBudget', us);
                                      
                                      });
            
            var monthlyBudget = localStorage.getItem('monthlyBudget');
            
            $scope.user= {
            min:0,
            max:2000,
            value: monthlyBudget
            }
            
            $scope.user.value = monthlyBudget;
            
            
            var average = 900;
            
            
            
            var net = parseInt(localStorage.getItem('net-worth'));
            var savings = 400;
            
            var projected_net = parseInt(savings)*12 + parseInt(net);
            
            $scope.data.average = average;
            $scope.data.affordable = 1000;
            $scope.data.net = net;
            
            
            
            $scope.onRelease = function() {
            
            console.log($scope.user.value)
            
            
            var budgetUrl ="https://plutus-matthew9012.c9users.io/money/set_budget?sessionid=" + sessionid + "&budget=" + $scope.user.value;
            
            
            $http.post(budgetUrl);
            localStorage.setItem('monthlyBudget', $scope.user.value);

            };
            
            
            var currentExpense = localStorage.getItem('currentExpense');
            
            console.log("bs");

            console.log(currentExpense);
            
            var remBudget = (monthlyBudget - parseInt(currentExpense));
            
            console.log(remBudget);
            
            $scope.remainingBudget = remBudget;
            

            
            
            
            })



.controller('LoginCtrl', function($scope, $state, $http, $state) {
            
            $scope.data = {};
            
            $scope.login = function() {
            console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
            var url ="http://plutus-matthew9012.c9users.io/auth?uname=" + $scope.data.username + "&pword="  + $scope.data.password;
            
            
            var tokenUrl = "https://plutus-matthew9012.c9users.io/initiateChat?sessionid=";
            
            localStorage.setItem('username',$scope.data.username);
            
            $http.post(url).success(function(data) {
                                    
                                    
                                    localStorage.setItem('sessionid',data);
                                    
                                    
                                    
                                    $state.go("app.main");
                                    
                                    
                                    });
            
            $http.get(tokenUrl + localStorage.getItem('sessionid'));
            
            
            
            
            }})



.controller('BrowseCtrl',function($scope,$state){
            $scope.playlists = [
                                { title: 'One', id: 1 },
                                { title: 'Two', id: 2 },
                                { title: 'One', id: 3 },
                                { title: 'One', id: 4 },
                                { title: 'One', id: 5 },
                                { title: 'One', id: 6 }
                                ];
            
            })

.controller('DialogCtrl', function($scope, $ionicFrostedDelegate, $ionicScrollDelegate, $rootScope, $http) {
            $scope.data = {};
            
            var message = '<p>' + $scope.data.message +'</p>';
            
            
            //            var messageOptions = [
            //                                  { content: '<p>Yea, it\'s pretty sweet</p>' },
            //                                  { content: '<p>I think I like Ionic more than I like ice cream!</p>' },
            //                                  { content: '<p>Gee wiz, this is something special.</p>' },
            //                                  { content: '<p>Is this magic?</p>' },
            //                                  { content: '<p>Am I dreaming?</p>' },
            //                                  { content: '<p>Am I dreaming?</p>' },
            //                                  { content: '<p>Yea, it\'s pretty sweet</p>' },
            //                                  { content: '<p>I think I like Ionic more than I like ice cream!</p>' },
            //                                  ];
            
            
            var messageIter = 0;
            //            $scope.messages = messageOptions.slice(0, messageOptions.length);
            
            
            $scope.messages = [];
            $scope.add = function() {
            
            var message = [{ content: '<p>' + $scope.data.message +'</p>'}];
            
            var nextMessage = message[0];
            
            $scope.messages.push(angular.extend({}, nextMessage));
            
            var dialUrl = "https://plutus-matthew9012.c9users.io/message?sessionid=" + localStorage.getItem('sessionid') +"&message=" + $scope.data.message;
            
            $http.get(dialUrl).success(function(data, status){
                                       
                                       
                                       var watsonMessage = [{ content: '<p>' + data +'</p>'}];
                                       nextMessage = watsonMessage[0];
                                       
                                       $scope.messages.push(angular.extend({}, nextMessage));
                                       
                                       
                                       
                                       });
            
            // Update the scroll area and tell the frosted glass to redraw itself
            $ionicFrostedDelegate.update();
            $ionicScrollDelegate.scrollBottom(true);
            };
            })


.controller('PlaylistCtrl', function($scope, $stateParams) {
            })

.controller('FriendCtrl', function($scope, $stateParams, $http) {
            
            

            $scope.updates = [
                              { title: 'Friend got the badge!', id: 1 },
                              { title: 'Friend reached the goal!', id: 2 },
                              { title: 'Friend reached the goal!', id: 3 },
                              { title: 'Friend got the badge!', id: 4 },
                              
                              ];
            
            
            
            
            var friendUrl =" https://plutus-matthew9012.c9users.io/social/userinfo?uid=" + $stateParams.friendId;
            
            $http.get(friendUrl).success(function(data, status, headers, config){

                                         
                                         $scope.friend = data;
                                          //$scope.accounts = data;
                                          
                                          })
            
            
            })



.controller('AlertCtrl', function($scope, $stateParams) {
            
            
            });


