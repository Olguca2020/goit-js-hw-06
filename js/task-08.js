const refs = {
  form: document.querySelector(`form`),
  btn: document.querySelector(`button`),
};

refs.form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === `` ||
    event.currentTarget.elements.password.value === ``
  ) {
    alert(`Всі поля форми повинні бути заповнені`);
  } else {
    const formData = new FormData(event.currentTarget);
    const data = {};
    formData.forEach((name, value) => {
      data[value] = name;
    });
    console.log(data);
    refs.form.reset();
  }
}
