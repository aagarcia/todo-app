import { v4 as uuid } from 'uuid';

/**
 * @typedef {Object} Todo
 * @property {String} id
 * @property {String} description
 * @property {Boolean} done
 * @property {Date} createAt
 */
export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createAt = new Date();
    }
}