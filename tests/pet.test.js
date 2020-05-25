const Pet = require('../src/pet');

describe('constructor', () => {

    it('returns an object', () => {
      const fido = new Pet('Maverick Meerkat');
      expect(new Pet('Maverick Meerkat')).toBeInstanceOf(Object);
    });

    it('returns pet name as fido', () => {
      const pet = new Pet('Maverick Meerkat');
      expect(pet.name).toEqual('Maverick Meerkat');
    });

    it('returns pet age', () => {
      const pet = new Pet('Maverick Meerkat');
      expect(pet.age).toEqual(0);
    });

    it('returns pet age once grown up', () => {
      const pet = new Pet('Maverick Meerkat');
      pet.growUp()
      expect(pet.age).toEqual(1);
      pet.growUp()
      expect(pet.age).toEqual(2);
      pet.growUp()
      expect(pet.age).toEqual(3);

    });

    it('hunger+5, age +1, fitness -3', () => {
      const pet = new Pet('Maverick Meerkat');
      pet.growUp()
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
      pet.growUp()
      expect(pet.age).toEqual(2);
      expect(pet.hunger).toEqual(10);
      expect(pet.fitness).toEqual(4);
      pet.growUp()
      expect(pet.age).toEqual(3);
      expect(pet.hunger).toEqual(15);
      expect(pet.fitness).toEqual(1);
    });

    it('exercise pet - increase fitness by 4', () => {
      const pet = new Pet('Maverick Meerkat');
      pet.growUp()
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    it('Feed pet - decrease hunger by 3', () => {
      const pet = new Pet('Maverick Meerkat');
      pet.growUp()
      pet.feed();
      expect(pet.hunger).toEqual(2);
      pet.feed();
      expect(pet.hunger).toEqual(0);
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });


    xit('check up on the pet levels', () => {
      const pet = new Pet('Maverick Meerkat');
      pet.checkUp()
      expect(pet.checkUpMsg).toEqual('I feel great!');


      pet.growUp()      
      pet.growUp()      
      pet.growUp()
      pet.feed()
      pet.feed();
      pet.checkUp()
      expect(pet.checkUpMsg).toEqual('I am hungry and I need a walk');

      pet.feed();
      pet.feed();
      pet.feed();
      pet.feed();
      pet.feed();
      pet.checkUp();
      expect(pet.checkUpMsg).toEqual('I need a walk');


      pet.walk();
      pet.walk();
      pet.checkUp();
      expect(pet.checkUpMsg).toEqual('I feel great!');

    });

    it('returns if pet is alive', () => {
      const pet = new Pet('Maverick Meerkat');

      pet.walk();
      expect(pet.isAlive).toEqual(true);
      pet.growUp();
      pet.growUp();
      pet.growUp();
      expect(pet.isAlive).toEqual(false);
    });


    it('kills pet- stops any other processes running', () => {
      const pet = new Pet('Maverick Meerkat')
      pet.age = 30;
      pet.hunger = 16;
      pet.fitness = 1;
      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
  });


