const pwd = document.querySelector("#pwd");
const confirm = document.querySelector("#confirm-pwd");
const container = document.querySelector("#pwd-container")
const error = document.createElement('p');

pwd.addEventListener('change',  (event) => {
  if (pwd.value === confirm.value) {
    error.textContent='';
    container.appendChild(error)
  } else {
    error.textContent='*Passwords do not match';
    container.appendChild(error)
  }
});

confirm.addEventListener('change',  (event) => {
  if (pwd.value === confirm.value) {
    error.textContent='';
    container.appendChild(error)
  } else {
    error.textContent='*Passwords do not match';
    container.appendChild(error)
  }
});

