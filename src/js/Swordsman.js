import Character from './Charachter.js';

export default class Swordsman extends Character {
	constructor(options) {
		super({ ...options, type: 'Swordsman' });
		this.attack = 40;
		this.defence = 10;
	}
}
