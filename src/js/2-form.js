const inputForm = document.querySelector('input');
inputForm.classList.add('input-form-email');
const textareaForm = document.querySelector('textarea');
textareaForm.classList.add('textarea-form-message');
const buttonForm = document.querySelector('button');
buttonForm.classList.add('btn-form');

const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const funformData = () => {
  try {
    const formDataLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formDataLS === null) {
      return;
    }
    formData = formDataLS;

    for (const key in formDataLS) {
      const formElement = feedbackFormEl.elements[key];
      if (formElement) {
        formElement.value = formDataLS[key];
      }
    }
  } catch (err) {
    console.log(err);
  }
};

funformData();

const funformInput = event => {
  const formel = event.target;
  const inputValue = formel.value;
  const inputName = formel.name;

  formData[inputName] = inputValue.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const btnFormSubmit = event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    feedbackFormEl.reset();
  }
};

feedbackFormEl.addEventListener('input', funformInput);
feedbackFormEl.addEventListener('submit', btnFormSubmit);
