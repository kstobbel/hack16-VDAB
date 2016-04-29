import './time.html'

Template.time.events({
  'change input': function (event) {
  var currentTarget = event.currentTarget;
  var newValue = currentTarget.value;
    if(!Session.equals(currentTarget.name, newValue)){
      Session.set(currentTarget.name, newValue);
    }
    console.log('Input ' + Session.get(currentTarget.name));
  }
});
