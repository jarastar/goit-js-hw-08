const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

function updateFormState() {
  const formState = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function loadFormState() {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedState) {
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }
}

form.addEventListener('input', _.throttle(updateFormState, 500));
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formState = { email: emailInput.value, message: messageInput.value };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});

loadFormState();
