import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';
import './main.html';

Template.getRoute.events({
  'click button'(event, instance) {
    Meteor.call('getRoute');
  },
});

Router.route('/', {
    name:'home',
    template: 'home'
});

Router.route('/user', {
    name: 'user',
    template: 'user'
});

Router.route('/route', {
    name: 'route',
    template: 'route'
});
