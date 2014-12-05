;(function(){
  'use strict';

  angular.module('myTodoApp', [ ])
    .controller('TodoAppController', function(){
    var scope = this;


scope.tasks = [
{
  name: 'Walk the dog',
  desc: 'the dog will explode if you don\'t walk it',
  due: 'tomorrow',
  priority: 'high',
  cost: 150.76
},
{
  name: 'Feed the dog',
  desc: 'the dog will die without food',
  due: 'today',
  priority: 'medium',
  cost: 5
},
{
  name: 'Give the dog a bath',
  desc: 'the dog smells terrible',
  due: 'yesterday',
  priority: 'high',
  cost: 1907.86
},
];

scope.addNewTask = function(){
  scope.tasks.push(scope.newTask);
  scope.newTask = freshTask;
}

scope.removeTask = function(todo){
  var index = scope.tasks.indexOf(todo);
  scope.tasks.splice(index, 1);
}

function _freshTask(){
  return{
    priority: 'medium'
  }
}

});

})();
