document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tab container and target tab
            const tabContainer = this.closest('.tab-container');
            const targetTabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs in this container
            tabContainer.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.closest('.tab').classList.add('active');
            
            // Hide all tab panes in this container
            tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Show the target tab pane
            const targetPane = document.getElementById(targetTabId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Form validation
    const form = document.getElementById('Form1');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check required fields
            const requiredFields = form.querySelectorAll('[class*="required"]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Form is valid, you can submit it here
                console.log('Form is valid, submitting...');
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Toolbar button functionality
    const toolbarButtons = document.querySelectorAll('.toolbar button');
    toolbarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            switch(action) {
                case '閉じ':
                    window.close();
                    break;
                case '編集':
                    // Enable form editing
                    enableFormEditing();
                    break;
                case '下書き保':
                    // Save as draft
                    saveForm('draft');
                    break;
                case '保':
                    // Save form
                    saveForm('save');
                    break;
                case '部門取引審査責任者へ送信':
                    // Submit to department
                    submitToDepartment();
                    break;
            }
        });
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

function enableFormEditing() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.removeAttribute('disabled');
    });
}

function saveForm(type) {
    // Get form data
    const formData = new FormData(document.getElementById('Form1'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Save to localStorage for demo purposes
    localStorage.setItem('formData', JSON.stringify(data));
    alert(type === 'draft' ? 'Draft saved successfully!' : 'Form saved successfully!');
}

function submitToDepartment() {
    // Validate form first
    const form = document.getElementById('Form1');
    const requiredFields = form.querySelectorAll('[class*="required"]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '';
        }
    });
    
    if (isValid) {
        // Form is valid, submit to department
        alert('Form submitted to department successfully!');
    } else {
        alert('Please fill in all required fields before submitting.');
    }
} 