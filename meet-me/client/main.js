import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import '../imports/api/google.js';
import './main.html';

Template.getRoute.events({
  'click button'(event, instance) {
    Meteor.call('getroute');
  },
});
