document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const status = document.getElementById('contact-status');
    const button = form.querySelector('button');

    button.disabled = true;
    status.textContent = 'Sending...';
    status.className = '';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(form),
        });
        const result = await response.json();

        if (result.success) {
            status.textContent = 'Message sent! Thank you.';
            status.className = 'success';
            form.reset();
        } else {
            status.textContent = 'Something went wrong. Please try again.';
            status.className = 'error';
        }
    } catch (error) {
        status.textContent = 'Something went wrong. Please try again.';
        status.className = 'error';
    } finally {
        button.disabled = false;
    }
});
