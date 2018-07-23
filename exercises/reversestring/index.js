// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'








// The simplest solution I have for reversing a string is the cleaned up version of Solution 1 that follows:

function reverse(str) {
    return str.split('')
    .reverse()
    .join('');
}

module.exports = reverse;






/***********************
*
*  Solution Archive
*
***********************/


// =====================
// Solution 1
// =====================


// Initial Solution
/*
    function reverse(str) {
        const arr = str.split('');
        arr.reverse();
        return arr.join('');
    }

module.exports = reverse;
*/


// Solution Simplified
/*
    function reverse(str) {
        return str.split('').reverse().join('');
    }

    module.exports = reverse;
*/


// Solution Simplified Further
/*
    function reverse(str) {
        return str.split('')
        .reverse()
        .join('');
    }

    module.exports = reverse;
*/



// =====================
// Solution 2
// =====================


/*
    function reverse(str) {
        let reversed = '';

        for (let character of str) {
            reversed = character + reversed;
        }

        return reversed;
    }

    module.exports = reverse;
*/



// =====================
// Solution 3
// =====================


// Simple Solution
/*
    function reverse(str) {
        return str.split('').reduce((reversed, character) => {return character + reversed;}, '');
    }

    module.exports = reverse;
*/


// Solution Simplified Further
/*
    function reverse(str) {
        return str.split('').reduce((reversed, character) => {
            return character + reversed;
        }, '');
    }

    module.exports = reverse;
*/