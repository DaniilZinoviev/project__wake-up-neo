'use strict';

const text = [
    '  ',
    '  ',
    '  ',
    '  ',
    '  ',
    'Wake up, Neo...  \n',
    '  ',
    '  ',
    '  ',
    '  ',
    // "Follow the white rabbit.",
    '  ',
    '  ',
];

typeText(text);

function typeText(text = []) {
    let line = 0, count = 0, result = '';
    let output = document.querySelector('.js-output');

    typeLine();

    function typeLine() {
        // Рисуем строку
        let interval = setTimeout(() => {
            result += text[line][count];
            output.innerHTML = result + '|'; 

            count++;
            // Check end of line
            if (count >= text[line].length) {
                count = 0;
                line++;
                // result = '';
                output.innerHTML = result;
            }
            // Check end of text
            if (line >= text.length) {
                clearTimeout(interval);
                output.innerHTML = result; // Remove vertical line
                return true;
            }

            typeLine();
        }, getRandomInt(getRandomInt(350 * 2.5)));
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}