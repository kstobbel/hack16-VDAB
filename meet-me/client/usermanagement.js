import './usermanagement.html'

Template.usermanagement.helpers ({
  currentUser: function(){
    return Meteor.user();
  },
});
