import { Template } from 'meteor/templating';
import { Users } from '../imports/api/users.js';

import './profile.html'

Template.profile.helpers({
    getUserInfo() {
      doc = Users.findOne({owner: Meteor.userId()});
      if(doc){
        return [doc];
      } else {
        Users.insert({
          owner: Meteor.userId(),
  //        email: Meteor.user().emails[0].address,
          transportations:[
            {type: "Bike", isOption: false },
            {type: "Car", isOption: false},
            {type: "PublicTransportation", isOption: false}
          ]
        });
        return [Users.findOne({owner: Meteor.userId()})];
      }
    },
    getAllUserInfos() {
      return Users.find({});
    },
});

Template.profile.events({
  'submit form'(event) {
    event.preventDefault();
    const target = event.target;
    doc = Users.findOne({owner: Meteor.userId()});
    Users.update({_id: doc._id}, {$set:
      { name: target.nameUser.value,
        address: target.addressUser.value,
    //    email: Meteor.user().emails[0].address,
        transportations: [
          {type: "Bike", isOption: false},
          {type: "Car", isOption: true},
          {type: "PublicTransportation", isOption: false}
        ]
      }
    });
  },
});
