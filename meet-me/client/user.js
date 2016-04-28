import { Template } from 'meteor/templating';
import { Users } from '../imports/api/users.js';

import './user.html'

var SelectedUsers = [];

Template.user.helpers({
    getAllUserInfo() {
      return Users.find({});
    },
});

Template.user.events({
  'click .userselected'(event, instance) {
    var ownerId = event.currentTarget.name;
    console.log("User selected " + ownerId);
    if(!_(SelectedUsers).contains(ownerId)){
        SelectedUsers.push(ownerId);
    }
    console.log(SelectedUsers);
  }
});
