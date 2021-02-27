(() => {
    var inputMinutes = document.getElementById('minutes');
    var inputHours = document.getElementById('hours');

    function toHours(input) {
        let valMinutes = input.value;
        if (valMinutes == "" || valMinutes == null) { inputHours.value = ''; return }
        let hours = Math.round(valMinutes) / 60;
        inputHours.value = hours.toFixed(2);
    }

    function toMinutes(input) {
        let valHours = input.value;
        inputMinutes.value = valHours * 60;
    }

    function animation(input) {
        let val = input.value;
        let label = input.nextElementSibling;

        if (val != 0 || val != '') {
            label.style = "opacity: 0;"
            console.log('oapciti  0')
        } else {
            label.style = "opacity: 1;";

        }
    }


    // Input event
    inputMinutes.addEventListener('input', function () {
        toHours(this);
        animation(inputHours);
        animation(this);
    });
    inputHours.addEventListener('input', function () {
        toMinutes(this);
        animation(inputMinutes);
        animation(this);
    });

})();