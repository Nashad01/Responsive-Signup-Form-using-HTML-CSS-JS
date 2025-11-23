// Get elements
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phonenumber');
const occupation = document.getElementById('occupation')
const submitBtn = document.getElementById('submitBtn');

// Error spans
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const occupationError = document.getElementById('occupationError');

// Add event listener
submitBtn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent page reload

  // Clear old errors
  usernameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  occupationError.textContent = '';

  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const occupationValue = occupation.value.trim();
  let isValid = true;

  // Check empty fields
  if (userValue === '') {
    usernameError.textContent = '⚠️ Please enter your username.';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    emailError.textContent = '⚠️ Please enter your email.';
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = '❌ Please enter a valid email address.';
    isValid = false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (phoneValue === '') {
    phoneError.textContent = '⚠️ Please enter your phone number.';
    isValid = false;
  } else if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = '📱 Must be a 10-digit number.';
    isValid = false;
  }
  // ################# I done this
  if(occupationValue === ''){
    occupationError.textContent = '🐷 Please enter your occupation detail';
    isValid = false;
  }

  // If valid
  if (isValid) {
    alert(`✅ Sign Up Successful!\n\nUser: ${userValue}\nEmail: ${emailValue}\nPhone: ${phoneValue}`);

    username.value = '';
    email.value = '';
    phone.value = '';
    occupation.value = '';  //#####I dont this
  }
});
