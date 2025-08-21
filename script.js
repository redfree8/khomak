// این کد بررسی می‌کند که آیا در صفحه ادمین هستیم یا نه
document.addEventListener("DOMContentLoaded", function() {
    // اگر آدرس صفحه شامل 'admin.html' بود، کد رمز عبور را اجرا کن
    if (window.location.pathname.endsWith("admin.html")) {
        
        // از کاربر رمز عبور را بپرس
        const password = prompt("برای ورود به پنل مدیریت، لطفا رمز عبور را وارد کنید:");
        
        // رمز عبور صحیح را اینجا تعریف کنید. حتما آن را تغییر دهید!
        const correctPassword = "12345"; 

        if (password === correctPassword) {
            // اگر رمز صحیح بود، فرم آپلود را نمایش بده
            alert("رمز صحیح است. به پنل مدیریت خوش آمدید!");
            document.getElementById("upload-form").style.display = "block";
        } else {
            // اگر رمز اشتباه بود، به کاربر هشدار بده و او را به صفحه اصلی برگردان
            alert("رمز عبور اشتباه است! دسترسی غیرمجاز.");
            window.location.href = "index.html"; // بازگشت به صفحه اصلی
        }
    }
});
