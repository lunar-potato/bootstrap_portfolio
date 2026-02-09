document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();   
        let isValid = true;
         
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        const phone = document.getElementById('phone').value;
        const dateInput = document.getElementById('date').value;
        const message = document.getElementById('message').value;
       
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
                   
            const parts = dateInput.split('-');
            const selectedDate = new Date(parts[0], parts[1] - 1, parts[2]); 
            
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
            document.getElementById('summaryName').textContent = name;
            document.getElementById('summaryEmail').textContent = email;
            document.getElementById('summaryPhone').textContent = phone;
            document.getElementById('summaryDate').textContent = dateInput;
            document.getElementById('summaryMessage').textContent = message;

            try {
                const myModal = new bootstrap.Modal(document.getElementById('summaryModal'));
                myModal.show();
            } catch (error) {
                console.error("Bootstrap Error:", error);
                alert("Error: Bootstrap JS validation failed. Check your internet connection or CDN links.");
            }
        }
    });