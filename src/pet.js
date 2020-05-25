const MIN_HUNGER = 0;
const MAXIMUM_FITNESS = 10;
const FEEDMSG = 'I am hungry'
const FITNESSMSG = 'I need a walk'
const HUNGERCHECKLEVEL = 5
const FITNESSCHECKLEVEL = 3
const OKMSG = 'I feel great!'


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MIN_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.checkUpMsg = ''
    
    }

    Pet.prototype = {
        get isAlive() {
          return this.age < 30 && this.hunger < 15 && this.fitness > 0;
        }
      };  

    Pet.prototype.growUp = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }

    Pet.prototype.walk = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.fitness += 4;
        if (this.fitness >= MAXIMUM_FITNESS) {this.fitness = MAXIMUM_FITNESS};
    };

    Pet.prototype.feed = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.hunger -= 3;
        if (this.hunger <= MIN_HUNGER) {this.hunger = MIN_HUNGER};

    };

    Pet.prototype.checkUp = function() {
        if (this.fitness <= FITNESSCHECKLEVEL && this.hunger >= HUNGERCHECKLEVEL){
            this.checkUpMsg = FEEDMSG + ' and ' + FITNESSMSG
        } else if (this.fitness <= FITNESSCHECKLEVEL) {
            this.checkUpMsg = FITNESSMSG
        }else if (this.hunger >= HUNGERCHECKLEVEL) {
            this.checkUpMsg = FEEDMSG
        }else if (this.fitness > FITNESSCHECKLEVEL && this.hunger < HUNGERCHECKLEVEL){
            this.checkUpMsg = OKMSG
        }; 


    };
module.exports = Pet