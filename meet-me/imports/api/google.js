import { Meteor } from 'meteor/meteor';


Meteor.methods({
  'getRoute'() {
    console.log("GETROUTE");
    // GoogleApi.get('directions/json?origin=Waterkluiskaai+Gent&destination=Interleuvenlaan+Leuven&key=AIzaSyB2LZ7QHgblMmotbJzvzKk9Eo6rKWfty5k', { user : x }, function(error, answer) {
    //     console.log("ANSWER:" + answer);
    //     console.log("ERROR:" + error);
    //   });
  },
});
