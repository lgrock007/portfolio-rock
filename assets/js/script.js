
document.addEventListener('DOMContentLoaded', function () {
    const texts = ['Techy', 'Designer', 'Programmer', 'Freelancer'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    type(); // Start typing when the page loads

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('#home span').textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(erase, 2000); // Wait 2 seconds before erasing
        } else {
            setTimeout(type, 100); // Type speed
        }
    }

    function erase() {
        setTimeout(function () {
            if (index > 0) {
                letter = currentText.slice(0, --index);
                document.querySelector('#home span').textContent = letter;
                erase();
            } else {
                count++;
                setTimeout(type, 1000); // Wait 1 second before typing next word
            }
        }, 100);
    }
});
