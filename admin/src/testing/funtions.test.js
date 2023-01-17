const functions = require('./functions');

test('data strings', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(typeof data[0].type).toEqual('string');
  });



test('data object', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(typeof data).toEqual('object');
  });


test('data true', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(typeof data).toBeTruthy();
  });


test('data false', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(data.nothing).toBeFalsy();
  });


test('data object values length', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    expect(Object.values(data).length).toBe(0);
  });

test('check if array or not', async () => {
    expect.assertions(1);
    const data = await functions.fetchData();
    // expect data to be an object
    expect(Array.isArray(data)).toBe(false);
  });