$(document).ready(function(){
    $("#showHideM").hide();
    $("#showHideR").hide();
    $("#showHideG").hide();
    $("#showHideI").hide();
    $("#buttonManufacturer").click(function(){
      $("#showHideM").toggle();
    });
    $("#buttonReseller").click(function(){
        $("#showHideR").toggle();
    });
    $("#buttonGovernment").click(function(){
        $("#showHideG").toggle();
    });
    $("#buttonInstitution").click(function(){
        $("#showHideI").toggle();
    });
  });

  type='text/javascript'>document.addEventListener('DOMContentLoaded', function () {
      window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})