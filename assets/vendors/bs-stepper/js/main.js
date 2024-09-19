var stepperForm;

document.addEventListener("DOMContentLoaded", function () {
  stepper3 = new Stepper(document.querySelector("#stepper3"));


  var btnNextList = [].slice.call(document.querySelectorAll(".btn-next-form"));

  var inputMailForm = document.getElementById("inputMailForm");
  var inputPasswordForm = document.getElementById("inputPasswordForm");

  btnNextList.forEach(function (btn) {
    btn.addEventListener("click", function () {
      stepperForm.next();
    });
  });


});
