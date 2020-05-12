const Pet = require('../src/pet');

describe('constructor', () => {
    xit('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });

      it('sets the age property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });
      it('increases the age of the pet by 1', () => {
        const pet = new Pet('Fido');
    
        expect(pet.growOlder).toEqual(0);
      });
  });