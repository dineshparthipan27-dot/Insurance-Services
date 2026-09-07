const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(n => n.classList.remove("active"));


        this.classList.add("active");


        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {


    const newsletterForm = document.getElementById('footerNewsletterForm');
    const emailInput = document.getElementById('footerEmailInput');
    const subscribeBtn = document.getElementById('footerSubscribeBtn');
    const errorMsg = document.getElementById('footerEmailError');
    const successMsg = document.getElementById('footerSuccessMsg');


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevents page reload

            const emailValue = emailInput.value.trim();


            if (emailValue === "") {
                showError("Please enter your email address.");
            }

            else if (!emailRegex.test(emailValue)) {
                showError("Please enter a valid email format.");
            }

            else {
                clearError();


                const originalIcon = subscribeBtn.innerHTML;
                subscribeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
                subscribeBtn.disabled = true;
                subscribeBtn.style.opacity = "0.8";


                setTimeout(() => {
                    subscribeBtn.innerHTML = originalIcon;
                    subscribeBtn.disabled = false;
                    subscribeBtn.style.opacity = "1";


                    newsletterForm.style.display = 'none';
                    successMsg.style.display = 'block';
                    newsletterForm.reset();


                    setTimeout(() => {
                        newsletterForm.style.display = 'block';
                        successMsg.style.display = 'none';
                        window.location.href = '404.html'
                    }, 3500);

                }, 1200);
            }
        });


        emailInput.addEventListener('input', clearError);

        function showError(msg) {
            emailInput.classList.add('input-error-border');


            emailInput.classList.remove('newsletter-shake');
            void emailInput.offsetWidth;
            emailInput.classList.add('newsletter-shake');

            errorMsg.textContent = msg;
            errorMsg.style.display = 'block';
        }

        function clearError() {
            emailInput.classList.remove('input-error-border', 'newsletter-shake');
            errorMsg.style.display = 'none';
        }
    }
});