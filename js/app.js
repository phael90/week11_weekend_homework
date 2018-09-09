document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  const submitForm = document.querySelector('#form').reset();
  form.addEventListener('submit', handleSubmitForm);
});


const handleSubmitForm = ( event ) => {
  event.preventDefault();

  const firstName = event.target.first.value;
  const lastName = event.target.last.value;
  const phoneNumber = event.target.phone.value;
  const emailAddress = event.target.email.value;
}
