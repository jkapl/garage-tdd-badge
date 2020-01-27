module.exports = (phrase) => {
    if (phrase.trim() == '') return false
    return phrase === phrase.split('').reverse().join('');
}