document.addEventListener("DOMContentLoaded", function() {
    function startCountdown() {
        var storedCountdown = localStorage.getItem("countdownValue");

        if (storedCountdown !== null) {
            var timeleft = parseInt(storedCountdown);
        } else {
            var timeleft = 9548;
        }

        var expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

        var downloadTimer = setInterval(function() {
            timeleft = timeleft + Math.floor(Math.random() * 100);
            document.getElementById('countdowntimer').textContent = timeleft;
            localStorage.setItem("countdownValue", timeleft);

            // Check if 24 hours have passed, if so, remove the item
            var storedTime = localStorage.getItem("countdownTime");
            if (storedTime !== null && Date.now() - parseInt(storedTime) >= expirationTime) {
                localStorage.removeItem("countdownValue");
                localStorage.removeItem("countdownTime");
            }

            if (timeleft <= 0) {
                clearInterval(downloadTimer);
            }
        }, 5000);

        // Store the current timestamp to check for expiration
        var currentTimestamp = Date.now();
        localStorage.setItem("countdownTime", currentTimestamp);
    }

    startCountdown();
});