import Character from './Charachter.js';

export default class Undead extends Character {
	constructor(options) {
		super({ ...options, type: 'Undead' });
		this.attack = 25;
		this.defence = 25;
	}
}
