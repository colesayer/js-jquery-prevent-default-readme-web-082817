$(document).ready(function(){

  // browser refreshes on submit
  $('form').on('submit', function(ev){
    var name = $('#name').val();
    $("#hello").text("Hello, " + name);
    ev.preventDefault()
  });

  //examine event object
  // $('form').on('submit', function(event){
  //   var name = $('#name').val();
  //   $("#hello").text("Hello, " + name);
  //   debugger;
  //   event.preventDefault();
  // });

  // stop page refresh
  // $('form').on('submit', function(event){
  //   var name = $('#name').val();
  //   $("#hello").text("Hello, " + name);
  //   event.preventDefault();
  // });

});
