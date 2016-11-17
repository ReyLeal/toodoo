$(document).on('turbolinks:load', function() {
  console.log('document is ready', new Date());
  $("#task_name").focus();
});
