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
            {type: "Car1", isOption: false},
            {type: "PublicTransportation", isOption: false}
          ]
        });
        return [Users.findOne({owner: Meteor.userId()})];

        if(Meteor.user()){
          Users.insert({
            owner: Meteor.userId(),
            email: Meteor.user().emails[0].address,
            transportations:[
              {type: "Bike", isOption: false },
              {type: "Car1", isOption: false},
              {type: "PublicTransportation", isOption: false}
            ]
          });
          return [Users.findOne({owner: Meteor.userId()})];
        }

      }
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
        email: Meteor.user().emails[0].address,
        transportations: doc.transportations
      }
    });
  },
  'click .selectedTransportation'(event, instance) {
    console.log("Clicked");
    type = event.currentTarget.name;
    doc = Users.findOne({owner: Meteor.userId()});
    console.log("Doc" + doc);
    var updatedTransportation = [];
    _(doc.transportations).forEach(t => {
      if(t.type == type){
        var current = t.isOption;
        t.isOption = !current;
        console.log("Updated from " + current + " to " + t.isOption);
      }
      updatedTransportation.push(t);
    });

    Users.update({_id: doc._id}, {$set:
      { name: doc.name,
        address: doc.address,
        email: Meteor.user().emails[0].address,
        transportations: updatedTransportation
      }
    });

    console.log("Updated");
  }
});
