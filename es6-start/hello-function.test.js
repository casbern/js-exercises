
import {hello} from "./hello-function"

describe('my first suite of tests', () => {
  test('my first test', () => {
    expect(hello()).toEqual("Hello");
  });

});
