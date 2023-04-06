import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[type=email]');
const btnEl = document.querySelector('button[type=submit]');
const arrText = document.querySelector('textarea');


  const data = {
    email: inputEl.value,
    message: arrText.value,
  };

  // localStorage.setItem('feedback-form-state', JSON.stringify(data));

  const updateData = throttle(event => {
    data[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500);

  inputEl.addEventListener('input', updateData);
  arrText.addEventListener('input', updateData);


const loadData = () => {
  if (localStorage.getItem('feedback-form-state')) {
    arrText.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).message;
    inputEl.value = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
  }
};

arrText.addEventListener('input', () => {
  localStorage.setItem('feedback-form-state', arrText.value);
  localStorage.setItem('feedback-form-state', inputEl.value);
});

loadData();

btnEl.addEventListener('click', ev => {
  ev.preventDefault();
  inputEl.value = '';
  arrText.value = '';
  localStorage.clear();
});
