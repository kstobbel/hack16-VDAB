import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';
import './home.js'
import './user.js'
import './profile.js'
import './route.js'
import './rooms.js'
<<<<<<< HEAD
import './reservations.js'
=======
import './time.js'
import './results.js'
>>>>>>> origin/develop
import './main.html';

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

Router.route('/rooms', {
    name: 'rooms',
    template: 'rooms'
});

Router.route('/profile', {
    name: 'profile',
    template: 'profile'
});


Router.route('/reservations', {
    name: 'reservations',
    template: 'reservations'
	
Router.route('/time', {
    name: 'time',
    template: 'time'
});

Router.route('/results', {
    name: 'results',
    template: 'results'

});
