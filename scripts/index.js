// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    //grabbing all "modal" class and initialize them
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    //same as above
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });