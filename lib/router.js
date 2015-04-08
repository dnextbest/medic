Router.route('/', function() {
  this.render('doctorsList');
});

Router.route('/doctors/:_id', function() {
  var doctor = Doctors.findOne({_id: this.params._id});
  this.render('doctorDetails', {doctor: doctor});
});

Router.route('/doctors', function(){

});
