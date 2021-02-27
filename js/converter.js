(() => {
    var inputMinutes = document.getElementById('minutes');
    var inputHours = document.getElementById('hours');

    function toHours() {
        let valMinutes = this.value;
        inputHours.value = Math.round(valMinutes) / 60;
    }

    function toMinutes() {
        let valHours = this.value;
        inputMinutes.value = Math.round(valHours) * 60;
    }

    inputMinutes.addEventListener('keyup', toHours);
    inputHours.addEventListener('keyup', toMinutes);
})();