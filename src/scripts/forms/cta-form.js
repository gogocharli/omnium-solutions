export function linkForms(mainForm) {
  var ctaForm = document.querySelector('.hero__form');
  ctaForm.addEventListener('submit', deferForm(mainForm));
}

function deferForm(handlerForm) {
  return function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var emailValue = formData.get('email-cta');
    var emailField = handlerForm.querySelector('input[type="email"]');
    emailField.value = emailValue;
    handlerForm.querySelector('input:first-of-type').focus();
  };
}
