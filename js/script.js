// --- START: AGGRESSIVE SCROLL FIX (v2) ---

// این بخش با قدرت بیشتری مرورگر را مجبور می‌کند که موقعیت اسکرول را فراموش کند
// و همیشه صفحه را از بالا نمایش دهد.

// ۱. جلوگیری از یادآوری اسکرول توسط مرورگر
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// ۲. اسکرول به بالا، درست قبل از خروج یا رفرش صفحه
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ۳. اجرای چندباره اسکرول به بالا در لحظات مختلف بارگذاری صفحه
document.addEventListener("DOMContentLoaded", function() {
    // بار اول: به محض آماده شدن ساختار صفحه
    window.scrollTo(0, 0);

    // بار دوم: با یک تاخیر بسیار کوتاه برای مقابله با هرگونه تنظیم دیرهنگام توسط مرورگر
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 50);

    // --- بخش ۱: کد مربوط به رمز عبور صفحه ادمین (بدون تغییر) ---
    if (window.location.pathname.endsWith("admin.html")) {
        const password = prompt("برای ورود به پنل مدیریت، لطفا رمز عبور را وارد کنید:");
        const correctPassword = "12345"; 

        if (password === correctPassword) {
            alert("رمز صحیح است. به پنل مدیریت خوش آمدید!");
            document.getElementById("upload-form").style.display = "block";
        } else {
            alert("رمز عبور اشتباه است! دسترسی غیرمجاز.");
            window.location.href = "index.html";
        }
    }

    // --- بخش ۲: کد پخش خودکار موسیقی با اسکرول (بدون تغییر) ---
    const backgroundMusic = document.getElementById("background-music");
    if (backgroundMusic) {
        let hasMusicStarted = false;
        backgroundMusic.volume = 0.3;

        window.addEventListener('scroll', function() {
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
        }, { once: true });
    }
});

// ۴. اسکرول نهایی به بالا بعد از بارگذاری کامل تمام محتوا (عکس‌ها و...)
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});
