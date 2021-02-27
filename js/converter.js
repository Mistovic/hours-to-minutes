(() => {
    var inputMinutes = document.getElementById('minutes');
    var inputHours = document.getElementById('hours');

    function toHours() {
        let valMinutes = this.value;
        let hours = Math.round(valMinutes) / 60;
        inputHours.value = hours.toFixed(2)
    }

    function toMinutes() {
        let valHours = this.value;
        inputMinutes.value = valHours * 60;
    }

    inputMinutes.addEventListener('input', toHours);
    inputHours.addEventListener('input', toMinutes);
})();