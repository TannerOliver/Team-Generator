const Employee = require('../lib/manager')

test('If manager is exporting manager', () =>{
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});
test('If this.officeNumber can be set', () =>{
    const officeNumber = 1;
    const emp = new Employee('name', 12, 'email', officeNumber);
    expect(emp.officeNumber).toBe(officeNumber);
});
test('if getOfficeNumber returns this.officeNumber', () =>{
    const officeNumber = 1;
    const emp = new Employee('name', 23, 'email', officeNumber);
    expect(emp.getOfficeNumber()).toBe(officeNumber);
});