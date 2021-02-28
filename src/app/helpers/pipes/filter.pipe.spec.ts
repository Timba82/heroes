/* tslint:disable:no-unused-variable */

import { FilterPipe } from './filter.pipe';

fdescribe('Pipe: Filter', () => {
  it('Test for filter pipe', () => {
    const heroes = [
      {
        id: '-MUXI-GNc6JoIkkpbkGe',
        name: 'Batman',
        powers: 'high tech gear, martial arts, and high intelligence'
      }
    ];
    const filterPipe = new FilterPipe();
    const result = filterPipe.transform(heroes, 'Batman', 'name');
    expect(result).toEqual([heroes[0]]);
  });
});
