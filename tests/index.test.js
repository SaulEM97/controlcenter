// Prueba genérica para cualquier proyecto Node.js

describe('Entorno básico de Node.js', () => {
  test('El entorno ejecuta código JavaScript correctamente', () => {
    expect(1 + 1).toBe(2);
  });

  test('El módulo global process está disponible', () => {
    expect(typeof process).toBe('object');
    expect(process.version).toMatch(/^v\d+\.\d+\.\d+/);
  });

  test('Se puede importar un módulo sin errores', () => {
    const path = require('path');
    expect(path.basename('/home/user/test.js')).toBe('test.js');
  });
});

