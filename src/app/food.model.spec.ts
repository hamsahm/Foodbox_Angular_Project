import { Food } from './food.model';

describe('Food', () => {
  it('should create an instance', () => {
    expect(new Food(0,"", 0,"","","","")).toBeTruthy();
  });
});
