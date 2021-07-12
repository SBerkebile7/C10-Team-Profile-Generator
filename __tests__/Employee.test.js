const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Spencer');

    expect(employee.name).toBe('Spencer');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});
