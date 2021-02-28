(() => {
    var inputMinutes = document.getElementById('minutes');
    var inputHours = document.getElementById('hours');


    /*
        Convert minutes to decimal hours
    */
    function toHours(input) {
        let valMinutes = input.value;
        if (valMinutes == "" || valMinutes == null) { inputHours.value = ''; return }
        let hours = Math.round(valMinutes) / 60;
        inputHours.value = hours.toFixed(2);
    }


    /**
     * Convert decimal hours to minutes 
     * @param {*} input 
     * Takes input from whom event is trigered
     */
    function toMinutes(input) {
        let valHours = input.value;
        if (valHours == "" || valHours == null) { inputMinutes.value = ''; return }
        inputMinutes.value = valHours * 60;
    }

    /**
     * Animates labels
     * @param {element} input 
     * Takes input elemnt as event trigerer
     */
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

    function pushEqual(input) {
        let val = input.value;
        let label = input.nextElementSibling;

        label.classList.toggle('active');
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

    inputMinutes.addEventListener('focus', function () {
        pushEqual(inputHours);
    });

    inputHours.addEventListener('focus', function () {
        pushEqual(inputMinutes);
    })

    inputMinutes.addEventListener('blur', function () {
        pushEqual(inputHours);
    });

    inputHours.addEventListener('blur', function () {
        pushEqual(inputMinutes);
    })

})();