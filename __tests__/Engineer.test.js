const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Spencer');

    expect(engineer.name).toBe('Spencer');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
});

test('check the engineers info', () => {
    const engineer = new Engineer('Spencer');

    expect(engineer.getInfo()).toHaveProperty('name');
    expect(engineer.getInfo()).toHaveProperty('id');
    expect(engineer.getInfo()).toHaveProperty('email');
    expect(engineer.getInfo()).toHaveProperty('github');
    expect(engineer.getInfo()).toHaveProperty('role');
});

test('check the engineers github', () => {
    const engineer = new Engineer('Spencer');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('check the engineers role', () => {
    const engineer = new Engineer('Spencer');

    expect(engineer.getRole()).toBe('Engineer');
});