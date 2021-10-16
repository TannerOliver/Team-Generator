const Employee = require('../lib/employee');

test('If employee is exporting employee', () =>{
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test('If this.name can be set', () =>{
    const name = 'Tanner';
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('If this.id can be set', () =>{
    const id = 12;
    const emp = new Employee('Tanner', id);
    expect(emp.id).toBe(id);
});

test('If this.email can be set', () =>{
    const email = '435@mail.com';
    const emp = new Employee('name', 12, email);
    expect(emp.email).toBe(email);
});

test('if getName returns this.name', () =>{
    const name = 'Tanner';
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
});
test('If getID returns this.id', () =>{
    const id = 12;
    const emp = new Employee('Tanner', id);
    expect(emp.getId()).toBe(id);
});
test('If getEmail returns this.email', () =>{
    const email = '435@mail.com';
    const emp = new Employee('name', 12, email);
    expect(emp.getEmail()).toBe(email);
});