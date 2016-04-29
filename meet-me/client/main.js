import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';
import './home.js'
import './user.js'
import './profile.js'
import './route.js'
import './rooms.js'
import './reservations.js'
import './time.js'
import './results.js'
import './make-reservation.js'


import './main.html';

Router.route('/', {
    name:'home',
    template: 'home'
});

Router.route('/make-reservation', {
    name: 'make-reservation',
    template: 'makereservation'
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
});

Router.route('/results', {
    name: 'results',
    template: 'results'

});
