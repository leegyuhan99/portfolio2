const btn = document.querySelector('.btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const visitorInput = document.querySelector('#visitor');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || visitorInput.value === '') {
    msg.innerHTML = '빈칸을 채워주세요';
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${visitorInput.value}`)
    );
    userList.appendChild(li);
    nameInput.value = '';
    visitorInput.value = '';
  }
}
