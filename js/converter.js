(() => {
    /**
        * # Minutes to Hours to Minutes - Converter
        * 
        * # Website  : Timerack 
        * # Dev      : Vuk Mistovic
        * # Content  : {
            1: # Variables ( Input Elements )
            2: # To hours  ( function ) - tranlsates minutes to hours
            3: # To minutes ( function ) - translates hours to minutes
            4: # animate ( function ) - Hide / Show label if input is empty / has value
            5: # addSign ( function ) - Add equal signt to label elemnt
        }
    */

    var inputMinutes = document.getElementById('minutes');
    var inputHours = document.getElementById('hours');


    /**
     * Convert minutes  to decimal hours
     * @param {element} input 
     * Takes input from whom event is trigered
     */
    function toHours(input) {
        let valMinutes = input.value;
        if (valMinutes == "" || valMinutes == null) { inputHours.value = ''; return }
        let hours = Math.round(valMinutes) / 60;
        inputHours.value = hours.toFixed(2);
    }

    /**
     * Convert decimal hours to minutes 
     * @param {element} input 
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
     * Takes input elemnt from whom event is trigered
     */
    function animate(input) {
        let val = input.value;
        let label = input.nextElementSibling;

        if (val != 0 || val != '') {
            label.style = "left: 60%;font-size: 0.85rem";
            label.classList.add('is-moved')

        } else {
            label.classList.remove('is-moved')
            label.style = "left: 1;font-size: 1.2rem";;

        }
    }

    /**
     * Add equal sign on labels
     * @param {element} input 
     * Takes input elemnt from whom event is trigered
     */
    function addSign(input) {
        let val = input.value;
        let label = input.nextElementSibling;
        let parent = input.parentNode;
        parent.classList.toggle('active');
        label.classList.toggle('active');
    }


    // Input event
    inputMinutes.addEventListener('input', function () {
        toHours(this);
        animate(inputHours);
        animate(this);
    });

    inputHours.addEventListener('input', function () {
        toMinutes(this);
        animate(inputMinutes);
        animate(this);
    });

    // Focus event
    inputMinutes.addEventListener('focus', function () {
        addSign(inputHours);
    });

    inputHours.addEventListener('focus', function () {
        addSign(inputMinutes);
    })

    // Blur event
    inputMinutes.addEventListener('blur', function () {
        addSign(inputHours);
    });

    inputHours.addEventListener('blur', function () {
        addSign(inputMinutes);
    })

})();