import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  it('toBe', () => {
    const value = 5;
    expect(value).toBe(5);
  });

  it('not.toBe', () => {
    const value = 5;
    expect(value).not.toBe(10);
  });

  it('toEqual', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(obj1).toEqual(obj2);
  });

  it('not.toEqual', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(obj1).not.toEqual(obj2);
  });

  it('toBeDefined', () => {
    const value = 5;
    expect(value).toBeDefined();
  });

  it('toBeUndefined', () => {
    const value = undefined;
    expect(value).toBeUndefined();
  });

  it('toBeNull', () => {
    const value = null;
    expect(value).toBeNull();
  });

  it('toBeTruthy', () => {
    const value = true;
    expect(value).toBeTruthy();
  });

  it('toBeFalsy', () => {
    const value = false;
    expect(value).toBeFalsy();
  });

  it('toBeGreaterThan', () => {
    const value = 10;
    expect(value).toBeGreaterThan(5);
  });

  it('toBeGreaterThanOrEqual', () => {
    const value = 10;
    expect(value).toBeGreaterThanOrEqual(10);
  });

  it('toBeLessThan', () => {
    const value = 5;
    expect(value).toBeLessThan(10);
  });

  it('toBeLessThanOrEqual', () => {
    const value = 5;
    expect(value).toBeLessThanOrEqual(5);
  });

  it('toContain', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toContain(3);
  });

  it('toContainEqual', () => {
    const arr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    expect(arr).toContainEqual({ id: 1, name: 'John' });
  });

  it('toHaveLength', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
  });

  it('toHaveProperty', () => {
    const obj = { name: 'John', age: 30 };
    expect(obj).toHaveProperty('name');
  });

  it('toHaveBeenCalled', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });

  it('toHaveBeenCalledTimes', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('toHaveBeenCalledWith', () => {
    const mockFn = jest.fn();
    mockFn('John', 30);
    expect(mockFn).toHaveBeenCalledWith('John', 30);
  });

  it('toThrow', () => {
    const throwError = () => {
      throw new Error('Error occurred');
    };
    expect(throwError).toThrow();
  });

  it('toThrowError', () => {
    const throwError = () => {
      throw new Error('Error occurred');
    };
    expect(throwError).toThrowError('Error occurred');
  });

  it('toMatch', () => {
    const value = 'Hello, Jest!';
    expect(value).toMatch('Jest');
  });

  it('not.toMatch', () => {
    const value = 'Hello, World!';
    expect(value).not.toMatch('Jest');
  });

  it('toMatchObject', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { b: 2, c: { d: 3 } };
    expect(obj1).toMatchObject(obj2);
  });
});
