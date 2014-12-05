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
  cost: 150.76,
  image: 'http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg',
},
{
  name: 'Feed the dog',
  desc: 'the dog will die without food',
  due: 'today',
  priority: 'medium',
  cost: 5,
  image: 'http://jasonlefkowitz.net/wp-content/uploads/2013/07/big_cat_found_spoh-760994.jpg',
},
{
  name: 'Give the dog a bath',
  desc: 'the dog smells terrible',
  due: 'yesterday',
  priority: 'high',
  cost: 1907.86,
  image: 'http://static.tumblr.com/81b6d42b4064def5e9062d5f4410c820/betml74/Yl5ml0lia/tumblr_static_impress.jpg',
},
];

scope.addNewTask = function(){
  scope.tasks.push(scope.newTask);
  scope.newTask = _freshTask();
};



scope.removeTask = function(todo){
  var index = scope.tasks.indexOf(todo);
  scope.tasks.splice(index, 1);
};

scope.newTask = _freshTask();

scope.priorityOptions = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  notimportant: 'Meh'
};

function _freshTask(){
  return{
    priority: 'medium'
  }
}

});

})();
