import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';
import './home.js'
import './user.js'
import './profile.js'
import './route.js'
import './rooms.js'
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

<<<<<<< HEAD
Router.route('/rooms', {
    name: 'rooms',
    template: 'rooms'
});
=======
Router.route('/profile', {
    name: 'profile',
    template: 'profile'
});
>>>>>>> 0930872a872d89aafe6ea998ee1cac2ad947a621
