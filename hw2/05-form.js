document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const registrationStatus =
      document.getElementById('registrationStatus').value;
    const message = document.getElementById('message').value;

    let courses = [];
    if (document.getElementById('course1').checked) {
      courses.push(document.getElementById('course1').value);
    }
    if (document.getElementById('course2').checked) {
      courses.push(document.getElementById('course2').value);
    }
    if (document.getElementById('course3').checked) {
      courses.push(document.getElementById('course3').value);
    }

    const modalContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Registration Status:</strong> ${registrationStatus}</p>
      <p><strong>Courses:</strong> ${courses.join(', ') || 'None'}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById('modalBody').innerHTML = modalContent;
  });

  const resetButton = form.querySelector('button[type="reset"]');
  resetButton.addEventListener('click', () => {
    document.getElementById('modalBody').innerHTML = '';
  });
});
