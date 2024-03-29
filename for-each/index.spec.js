describe('forEach', function() {
  it('should succeed on correct hooray and expression, adding all numbers', function() {
    var hooray = new Hooray(1, 2, 3);
    var result = 0;
    var add = function(number) { result += number; };
    hooray.forEach(add);

    expect(result).toBe(6);
  });

  it('should succeed on correct hooray and expression, concatenating all numbers', function() {
    var hooray = new Hooray(1, 2, 3);
    var result = '';
    var concatenate = function(number) { result += number; };
    hooray.forEach(concatenate);

    expect(result).toBe('123');
  });

  it('should succeed on correct hooray and expression, multiplying all numbers by 10', function() {
    var hooray = new Hooray(1, 2, 3);
    var result = [];
    var multiply = function(number, index) { result[index] = number * 10; };
    hooray.forEach(multiply);

    expect(result.length).toBe(hooray.length);

    for (var i = 0; i < result.length; i++)
      expect(result[i]).toBe(hooray[i] * 10);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(1, 2, 3);
    var result = 0;
    var add = function(number) { result += number; };
    hooray.forEach(add);

    expect(hooray).toEqual(new Hooray(1, 2, 3));
  });

  it('should return undefined on an empty array received', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var result = 0;
    var add = function(number) { result += number; };

    expect(hooray.forEach(add)).toBe(undefined);
  });

  it('should fail on undefined expression', function() {
    var hooray = new Hooray(1, 2, 3);
    var expression;

    expect(function() { hooray.forEach(expression); }).toThrowError(TypeError, 'undefined is not a function');
  });

  it('should fail on non-function expression', function() {
    var hooray = new Hooray(1, 2, 3);

    expect(function() { hooray.forEach(undefined); }).toThrowError(TypeError, 'undefined is not a function');
    expect(function() { hooray.forEach(true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { hooray.forEach(1); }).toThrowError(TypeError, '1 is not a function');
  });
});