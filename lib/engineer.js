const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github
    };
    //Ask for Github input with inquirer and return response
    getGithub(){
        return this.github;
    };
    //Return Engineer for HTML or building of cards
    getRole(){
        return 'Engineer'
    };
}
module.exports = Engineer;