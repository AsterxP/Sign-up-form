const pwd = document.querySelector("#pwd");
const confirm = document.querySelector("#confirm-pwd");

const error = document.createElement('p');
error.textContent = 'apple';
pwd.appendChild(error)

// if (pwd.value === confirm.value) {
//   error.textContent='';
//   pwd.appendChild(error)
// } else {
//   error.textContent='* Passwords do not match';
//   pwd.appendChild(error)
// }

