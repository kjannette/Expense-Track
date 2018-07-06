import { setTextFilter, sortByAmount, sortByDate,
        setStartDate, setEndDate } from '../../actions/filters';

test('should set up set text filter action object', () => {
    const action = setTextFilter('test');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
        })
});

test('should set up set text filter action object with default values', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
        })
});

test('should set up sort by amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        })
});

test('should set up sort by date action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        })
});

test('should set up set start date action object', () => {
    const action = setStartDate('10/25/2017');

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: '10/25/2017'
        })
});

test('should set up set start date action object', () => {
    const action = setEndDate('10/25/2017');

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: '10/25/2017'
        })
});
