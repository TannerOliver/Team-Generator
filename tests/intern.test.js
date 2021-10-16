const Employee = require('../lib/intern')

test('If intern is exporting intern', () =>{
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});
test('If this.school can be set', () =>{
    const school = 'school';
    const emp = new Employee('name', 12, 'email', school);
    expect(emp.school).toBe(school);
});
test('if getSchool returns this.school', () =>{
    const school = 'school';
    const emp = new Employee('name', 23, 'email', school);
    expect(emp.getSchool()).toBe(school);
});