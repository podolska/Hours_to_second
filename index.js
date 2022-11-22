function getSec () {
    const form = document.querySelector('form');
    form.addEventListener('submit', getSeconds);

    function getSeconds (e) {
        e.preventDefault();
        const hours = document.querySelector('input').value;
        const seconds = Number(hours) * 60 *60;
        console.log(hours, seconds);
        let word = '';
        switch (hours){
            case '0': 
                word = 'годин';
                break;
            case '1': 
                word = 'годині';
                break;
            default: 
                word = 'годинах';
                break;
        };
        if(hours) {
            alert(`У ${hours} ${word} - ${seconds} секунд`);
        };
    }
};

getSec();