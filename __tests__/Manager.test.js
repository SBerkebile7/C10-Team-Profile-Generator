const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Spencer');

    expect(manager.name).toBe('Spencer');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
});

test('check the managers info', () => {
    const manager = new Manager('Spencer');

    expect(manager.getInfo()).toHaveProperty('name');
    expect(manager.getInfo()).toHaveProperty('id');
    expect(manager.getInfo()).toHaveProperty('email');
});

test('check the managers role', () => {
    const manager = new Manager('Spencer');

    expect(manager.getRole()).toBe('Manager');
});