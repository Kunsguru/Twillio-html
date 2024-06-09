function handleRegistrationSubmit(event) {
            event.preventDefault();  // Prevent form from submitting the default way
            alert('Redirecting You, Our dearest customer to our Official Web Form Page ...');
            
            // Gather form data
            const formData = new FormData(event.target);

            // Send form data to server using Fetch API
            fetch('https://your-server-endpoint.com/register', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Optionally redirect after successful submission
                window.location.href = 'https://arts-with-artsbassey-registration-form.onrender.com';
            })
            .catch(error => {
                console.error('Error:', error);
            });
              }

