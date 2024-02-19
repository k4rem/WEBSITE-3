window.onload = function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    };
// ----------------------------------- Buttons Alert
document.getElementById('alert').addEventListener('click', function() {
    alert('WE Will Contact You As Soon As Possible !');
  });
document.getElementById('alert2').addEventListener('click', function() {
    alert('WE Will Contact You As Soon As Possible !');
  });
document.getElementById('alert3').addEventListener('click', function() {
    alert('WE Will Contact You As Soon As Possible !');
  });
//   -----------------------------------------------