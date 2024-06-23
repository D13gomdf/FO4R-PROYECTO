document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-field input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.nextElementSibling;
            label.style.top = '0';
            label.style.transform = 'translateY(-100%)';
            label.style.color = '#fff';
        });
        input.addEventListener('blur', function() {
            if (this.value === '') {
                const label = this.nextElementSibling;
                label.style.top = '50%';
                label.style.transform = 'translateY(-50%)';
                label.style.color = '#fff';
            }
        });
    });
});