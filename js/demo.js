$(document).ready(function () {
 $('#select_btn').click(function () {
  $('#select_file').trigger('click');
 })
 $('#select_file').change(function () {
		$('#select_text').val($('#select_file').val());
  importf(this);
 })
})