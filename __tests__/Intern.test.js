const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Spencer');

    expect(intern.name).toBe('Spencer');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
});

test('check the interns info', () => {
    const intern = new Intern('Spencer');

    expect(intern.getInfo()).toHaveProperty('name');
    expect(intern.getInfo()).toHaveProperty('id');
    expect(intern.getInfo()).toHaveProperty('email');
    expect(intern.getInfo()).toHaveProperty('school');
    expect(intern.getInfo()).toHaveProperty('role');
});

test('check the interns school', () => {
    const intern = new Intern('Spencer');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('check the interns role', () => {
    const intern = new Intern('Spencer');

    expect(intern.getRole()).toBe('Intern');
});