// Import stylesheets
import './style.css';

// Write Javascript code!

window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey && e.keyCode === 70) || (e.metaKey && e.keyCode === 70)) {
    e.preventDefault();
    // trigger your filters here
    var options = { backdrop: true, keyboard: true, focus: true, show: true };
    $('#exampleModal').modal(options);
  }
});
