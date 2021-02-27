(() => {
    var inputMinutes = document.getElementById('minutes');
    var inputHours = document.getElementById('hours');

    function toHours(input) {
        let valMinutes = input.value;
        let hours = Math.round(valMinutes) / 60;
        inputHours.value = hours.toFixed(2)
    }

    function toMinutes(input) {
        let valHours = input.value;
        inputMinutes.value = valHours * 60;
    }

    function animation(input) {
        let val = input.value;
        console.log('Blur', val)
        let parent = input.parentNode;
        let label = input.nextElementSibling;
        if (val != 0 || val != '') {
            label.style = "font-size: 1.5rem"
            console.log('Jesmo li dobrii', label)
        } else {
            label.style = "font-size: 4rem";

        }
    }


    // Input event
    inputMinutes.addEventListener('input', function () {
        toHours(this);
        animation(this);
    });
    inputHours.addEventListener('input', function () {
        toMinutes(this);
        animation(this);
    });

})();