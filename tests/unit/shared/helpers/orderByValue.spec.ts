import { describe, expect, it } from 'vitest';
import type { Bars } from '../../../../src/interfaces/bars';
import { orderObjectListByKey } from '../../../../src/shared/helpers/orderByValue';

describe('+ orderByValue test', () => {

  const customList: Bars[] = [{
    color: '#000',
    tag: 'foo',
    value: 5
  }, {
    color: '#000',
    tag: 'foo',
    value: 90
  }, {
    color: '#000',
    tag: 'foo',
    value: 80
  }];

  it('should order a custom typed list by a given arg', () => {

    const orderedCustomListByValue = orderObjectListByKey<Bars>(
      customList,
      'value'
    );
    
    expect(orderedCustomListByValue).toEqual([{
      color: '#000',
      tag: 'foo',
      value: 90
    }, {
      color: '#000',
      tag: 'foo',
      value: 80
    }, {
      color: '#000',
      tag: 'foo',
      value: 5
    }]);
  });
});