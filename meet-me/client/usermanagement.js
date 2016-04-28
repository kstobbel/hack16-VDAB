import './usermanagement.html'

Template.usermanagement.currentUser = function(){
  return Meteor.user();
};
