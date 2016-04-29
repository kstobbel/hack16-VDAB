import { Template } from 'meteor/templating';
import { Users } from '../imports/api/users.js';
import { Session } from 'meteor/session';

import './user.html'

var SelectedUsers = [];

Template.user.helpers({
    getAllUserInfo() {
      return Users.find({owner: {$ne: Meteor.userId()}});
    },
});

Template.user.events({
  'click .userselected'(event, instance) {
    var ownerId = event.currentTarget.name;

    if(!_(SelectedUsers).contains(ownerId)){
        SelectedUsers.push(ownerId);
        $("#"+ownerId+" i").addClass("light-green");
    }else{
      SelectedUsers = _(SelectedUsers).filter(su => su != ownerId);
      $("#"+ownerId+" i").removeClass("light-green");
    }
    Session.set("selectedUsers", SelectedUsers);
  }
});
