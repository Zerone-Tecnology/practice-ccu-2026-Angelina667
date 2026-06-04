document.addEventListener('DOMContentLoaded', () => {
    
    const regForm = document.getElementById('regForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalBtn = document.getElementById('modalBtn');

    function openModal() {
        successModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        successModal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if (regForm) {
        regForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const githubInput = document.getElementById('github').value;
            if (!githubInput.includes('github.com')) {
                alert('Пожалуйста, введите корректную ссылку на профиль GitHub (должна содержать github.com)');
                return;
            }

            openModal();

            regForm.reset();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalBtn) {
        modalBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target === successModal) {
            closeModal();
        }
    });
});