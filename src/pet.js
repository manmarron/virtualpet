function Pet(name) {
    this.name = name;
    this.age = 0;
    this.growOlder()
}
Pet.prototype = { growUp}
module.exports = Pet;
