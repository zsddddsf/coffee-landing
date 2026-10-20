var d = document.getElementById('dateField');
d.min = new Date().toISOString().split('T')[0];
document.getElementById('bookForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formOk').hidden = false;
  this.reset();
});
