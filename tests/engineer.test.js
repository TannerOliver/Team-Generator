const Employee = require('../lib/engineer')

test('If engineer is exporting engineer', () =>{
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});
test('If this.github can be set', () =>{
    const github = '435@mail.com';
    const emp = new Employee('name', 12, 'email', github);
    expect(emp.github).toBe(github);
});
test('if getGithub returns this.github', () =>{
    const github = 'github';
    const emp = new Employee('name', 23, 'email', github);
    expect(emp.getGithub()).toBe(github);
});