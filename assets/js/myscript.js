const swiper = new Swiper('.login-textslider', {    
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },    
  });

  $('#togglePassword').on('click', function() {
    let input = $('#passwordInput');
    let type = input.attr('type') === 'password' ? 'text' : 'password';
    input.attr('type', type);
    let iconSrc = type === 'password' ? 'assets/images/icons/eye-off.svg' : 'assets/images/icons/eye.svg';
    $(this).attr('src', iconSrc);
});


$(document).ready(function () {
  // Handle input typing and auto-focus
  $('.otp-input').on('input', function (e) {
      let currentInput = $(this);
      let nextInput = currentInput.next('.otp-input');
      let prevInput = currentInput.prev('.otp-input');

      // Move to the next input if a digit is entered
      if (currentInput.val().length > 0) {
          if (nextInput.length) {
              nextInput.focus();
          }
      }
  });

  // Handle keydown for backspace and arrow key navigation
  $('.otp-input').on('keydown', function (e) {
      let currentInput = $(this);
      let prevInput = currentInput.prev('.otp-input');
      let nextInput = currentInput.next('.otp-input');

      // Move focus to previous input on Backspace
      if (e.key === "Backspace" && currentInput.val().length === 0) {
          prevInput.focus();
      }

      // Move focus to next input on ArrowRight
      if (e.key === "ArrowRight") {
          nextInput.focus();
      }

      // Move focus to previous input on ArrowLeft
      if (e.key === "ArrowLeft") {
          prevInput.focus();
      }
  });

  // Handle the paste event
  $('.otp-input').on('paste', function (e) {
      let pasteData = e.originalEvent.clipboardData.getData('text');
      let otpInputs = $('.otp-input');
      
      // Only process if exactly 4 digits are pasted
      if (pasteData.length === otpInputs.length && /^\d+$/.test(pasteData)) {
          otpInputs.each(function (index) {
              $(this).val(pasteData[index]);
          });
          otpInputs.last().focus();  // Focus on the last field after pasting
      } else {
          e.preventDefault(); // Prevent invalid input if pasteData is incorrect
      }
  });

  // Submit OTP
  $('#submit-btn').click(function () {
      let otp = '';
      $('.otp-input').each(function () {
          otp += $(this).val();
      });

      if (otp.length === 4) {
          alert('OTP Entered: ' + otp);
      } else {
          alert('Please enter all 4 digits of the OTP.');
      }
  });
});
