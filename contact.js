document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            let isValid = true;
            
            const email = document.getElementById('email').value;
            const confirmEmail = document.getElementById('confirmEmail').value;
            const dateInput = document.getElementById('date').value;
            

            const confirmEmailField = document.getElementById('confirmEmail');
            if (email !== confirmEmail || email === "") {
                confirmEmailField.classList.add('is-invalid');
                isValid = false;
            } else {
                confirmEmailField.classList.remove('is-invalid');
            }

            const dateField = document.getElementById('date');
            if (!dateInput) {
                dateField.classList.add('is-invalid');
                isValid = false;
            } else {
                const selectedDate = new Date(dateInput);
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(0, 0, 0, 0);

                if (selectedDate < tomorrow) {
                    dateField.classList.add('is-invalid');
                    isValid = false;
                } else {
                    dateField.classList.remove('is-invalid');
                }
            }

            if (isValid) {
                document.getElementById('summaryName').textContent = document.getElementById('name').value;
                document.getElementById('summaryEmail').textContent = email;
                document.getElementById('summaryPhone').textContent = document.getElementById('phone').value;
                document.getElementById('summaryDate').textContent = dateInput;
                document.getElementById('summaryMessage').textContent = document.getElementById('message').value;

                const myModal = new bootstrap.Modal(document.getElementById('summaryModal'));
                myModal.show();
            }
        });