function random () {
    let result = Math.ceil(Math.random()*8_999_999_999) + 1_000_000_000 
    return result
}
// console.log(random());
module.exports = random