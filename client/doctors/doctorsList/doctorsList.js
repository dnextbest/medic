Template.doctorsList.helpers({
  doctors: function(){
    return Doctors.find();
  }
});

Template.doctorsList.events({
  'click button' : function(event){
    Router.go('/doctors/', {'_id': event.target.value});
  }
});
