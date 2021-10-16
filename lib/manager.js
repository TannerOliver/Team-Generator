const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    //generate HTML for the school or pass this .val onto the html
    getOfficeNumber(){
        return this.officeNumber;
    };
    //Return Manager for HTML or building of cards
    getRole(){
        return 'Manager'
    };
}
module.exports = Manager;