document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            this.parentElement.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form validation
    const form = document.getElementById('Form1');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check required fields
        const requiredFields = document.querySelectorAll('[class*="required-star"]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            const input = field.closest('td').nextElementSibling.querySelector('input, textarea');
            if (input && !input.value) {
                isValid = false;
                input.style.borderColor = 'red';
            } else if (input) {
                input.style.borderColor = '#C0C0C0';
            }
        });
        
        if (isValid) {
            // Form is valid, you can submit it here
            console.log('Form is valid');
        }
    });

    // Date field initialization
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value) {
            input.value = new Date().toISOString().split('T')[0];
        }
    });

    // Radio button groups
    const radioGroups = document.querySelectorAll('.radio-group');
    radioGroups.forEach(group => {
        const radios = group.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                // You can add additional logic here when radio buttons change
                console.log('Radio changed:', this.name, this.value);
            });
        });
    });
}); 