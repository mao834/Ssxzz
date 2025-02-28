document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let image = document.getElementById("image");
        let audio = document.getElementById("audio");

        image.style.opacity = "1"; // ค่อยๆ แสดงรูป
        audio.style.display = "block";
        audio.volume = 1.0; // ตั้งค่าเสียงดังสุดๆ
        audio.play(); // เล่นเสียง
    }, 4000); // รูปและเสียงจะเริ่มหลังจากข้อความหายไป (4 วินาที)
});