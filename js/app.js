document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

  const submitForm = document.querySelector('#form').reset();
  form.addEventListener('submit', handleSubmitForm);

  const deleteAll = document.querySelector('#deleteAll');
  deleteAll.addEventListener('click', handleDeleteAllData);
});

const handleSubmitForm = ( event ) => {
  event.preventDefault();

  const firstName = event.target.first.value;
  const lastName = event.target.last.value;
  const phoneNumber = event.target.phone.value;
  const emailAddress = event.target.email.value;

  const newRow = document.createElement('tr');
  const tablePersonalData = document.querySelector('.personal-information');
  tablePersonalData.appendChild(newRow);

  const personalFirstName = document.createElement('td');
  personalFirstName.textContent = `${firstName}`;
  newRow.appendChild(personalFirstName);

  const personalLastName = document.createElement('td');
  personalLastName.textContent = `${lastName}`;
  newRow.appendChild(personalLastName);

  const personalNumber = document.createElement('td');
  personalNumber.textContent = `${phoneNumber}`;
  newRow.appendChild(personalNumber);

  const personalEmail = document.createElement('td');
  personalEmail.textContent = `${emailAddress}`;
  newRow.appendChild(personalEmail);
  event.target.reset();
}

const handleDeleteAllData = () => {
  const tablePersonal = document.querySelector('#personal-information')

  while(tablePersonal.firstChild) {
      tablePersonal.removeChild(tablePersonal.firstChild);
    }
  }
