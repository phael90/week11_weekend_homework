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
  personalEmail.textContent = `${email}`;
  newRow.appendChild(personalEmail);

  console.log(`${firstName}, ${lastName}, ${phoneNumber}, ${emailAddress}`);
  event.target.reset();

}

const handleDeleteAllData = () => {
  const tablePersonalData1 = document.querySelector('.personal-information');
  const tablePersonalData2 = document.querySelector('.personal-information');
  const tablePersonalData3 = document.querySelector('.personal-information');
  const tablePersonalData4 = document.querySelector('.personal-information');
  console.log(tablePersonalData1, tablePersonalData2, tablePersonalData3, tablePersonalData4);

  while(tablePersonalData1.firstChild,              tablePersonalData2.firstChild,
    tablePersonalData3.firstChild,
    tablePersonalData4.firstChild) {
      tablePersonalData1.removeChild(tablePersonalData1.firstChild);
      tablePersonalData2.removeChild(tablePersonalData2.firstChild);
      tablePersonalData3.removeChild(tablePersonalData3.firstChild);
      tablePersonalData4.removeChild(tablePersonalData4.firstChild);
    }
  }
