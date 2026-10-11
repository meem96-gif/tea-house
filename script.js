// Newsletter form: validate the email and give feedback
const form = document.querySelector('.newsletter');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.elements.email;
  if (!input.checkValidity()) { input.reportValidity(); return; }
  form.reset();
  input.placeholder = 'Thanks for subscribing!';
});

const form = document.querySelector('.newsletter');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = form.elements.email;
  if (!input.checkValidity()) { input.reportValidity(); return; }
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!res.ok) throw new Error();
    form.reset();
    input.placeholder = 'Thanks for subscribing!';
  } catch {
    input.placeholder = 'Something went wrong, try again';
  }
});