;(function(){
  'use strict';

  angular.module('AddressBookApp', [ ])
    .controller('AddressBookController', function(){
    var vm = this;


vm.entries = [
{
  name: 'Mittens McKitten',
  address: '7569 Main St. Columbus, Oh 44060',
  phone: '550-836-9088',
  email: 'mittens@gmail.com',
  image: 'http://instapinch.com/blog/wp-content/uploads/2010/11/kitten-500x500.jpg',
},
{
  name: 'Mittens McKitten',
  address: '7569 Main St. Columbus, Oh 44060',
  phone: '550-836-9088',
  email: 'mittens@gmail.com',
  image: 'http://www.omghowcheap.co.uk/ekmps/shops/omghowcheap/images/birthday-card-blank-little-cat-design-square-size-5.25-x-5.25-by-ling-ff0555-5434-p.jpg',
},
{
  name: 'Mittens McKitten',
  address: '7569 Main St. Columbus, Oh 44060',
  phone: '550-836-9088',
  email: 'mittens@gmail.com',
  image: 'http://www.omghowcheap.co.uk/ekmps/shops/omghowcheap/images/birthday-card-blank-kitten-design-large-square-size-6.25-x-6.25-hi0160-5476-p.jpg',
},
];

vm.addNewEntry = function(){
  vm.entries.push(vm.newEntry);
  vm.newEntry = _freshEntry();
};



vm.removeEntry = function(AddressBook){
  var index = vm.entries.indexOf(AddressBook);
  vm.entries.splice(index, 1);
};

vm.newEntry = _freshEntry();

function _freshEntry(){
  return {

  }
}


});

})();
