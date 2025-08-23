// --- START: NEW & IMPROVED SCROLL FIX ---
// This is the modern way to prevent the browser from remembering the scroll position
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// As a fallback, force scroll to top right before the page is left or reloaded
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
// --- END: NEW & IMPROVED SCROLL FIX ---


document.addEventListener("DOMContentLoaded", function() {

    // Just to be safe, we scroll to top again here
    window.scrollTo(0, 0);

    // --- بخش ۱: کد مربوط به رمز عبور صفحه ادمین ---
    if (window.location.pathname.endsWith("admin.html")) {
        
        const password = prompt("برای ورود به پنل مدیریت، لطفا رمز عبور را وارد کنید:");
        
        // !توجه: حتما این رمز را به یک رمز شخصی تغییر دهید
        const correctPassword = "12345"; 

        if (password === correctPassword) {
            alert("رمز صحیح است. به پنل مدیریت خوش آمدید!");
            document.getElementById("upload-form").style.display = "block";
        } else {
            alert("رمز عبور اشتباه است! دسترسی غیرمجاز.");
            window.location.href = "index.html"; // بازگشت به صفحه اصلی
        }
    }


    // --- بخش ۲: کد پخش خودکار موسیقی با اسکرول ---
    const backgroundMusic = document.getElementById("background-music");
    
    // این کد فقط در صفحه‌ای اجرا می‌شود که عنصر موسیقی در آن وجود داشته باشد (صفحه اصلی)
    if (backgroundMusic) {
        let hasMusicStarted = false;

        // تنظیم صدای اولیه موسیقی (می‌توانید بین 0.0 تا 1.0 تغییر دهید)
        backgroundMusic.volume = 0.3;

        // عملکرد پخش با اولین اسکرول کاربر
        window.addEventListener('scroll', function() {
            // این کد فقط یک بار اجرا می‌شود
            if (!hasMusicStarted && backgroundMusic.paused) {
                const playPromise = backgroundMusic.play();
                if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        hasMusicStarted = true;
                    }).catch(error => {
                        console.log("Autoplay on scroll was blocked by the browser.");
                    });
                }
            }
        }, { once: true }); // این تابع فقط با اولین اسکرول اجرا می‌شود
    }

});
