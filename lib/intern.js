const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school
    }
    //generate HTML for the school or pass this .val onto the html
    getSchool(){
        return this.school;
    };
    //Return Intern for HTML or building of cards
    getRole(){
        return 'Intern'
    };
}
module.exports = Intern;