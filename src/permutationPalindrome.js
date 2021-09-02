/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
    //check for palindrome
    const isPalindrome = (word) => {
        const wordArray = Array.from(word)
        const forward = wordArray.toLowerCase().join('');
        const backward = wordArray.toLowerCase().split('').reverse().join('');

        (forward === backward) ? true : false;
    }
    console.log(isPalindrome('Hello'))
}

module.exports = permutationPalindrome;
