;(function(){
  'use strict';

  angular.module('addressBook', [ ])
    .controller('addressBookController', function(){
    var vm = this;


vm.entries = [
{
  name: 'Mittens McKitten',
  address: '7569 Main St. Columbus, Oh 44060',
  phone: 550-836-9088,
  email: 'mittens@gmail.com',
  image: 'http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg',
},
{
  name: 'Mittens McKitten',
  address: '7569 Main St. Columbus, Oh 44060',
  phone: 550-836-9088,
  email: 'mittens@gmail.com',
  image: 'http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg',
},
{
  name: 'Mittens McKitten',
  address: '7569 Main St. Columbus, Oh 44060',
  phone: 550-836-9088,
  email: 'mittens@gmail.com',
  image: 'http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg',
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
