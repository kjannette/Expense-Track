import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 1} = {}) => ({
  type: 'SET',
  count: count
});

const resetCount = () => ({
  type: 'RESET',
});

const multiplyCount = ({multiplyBy = 1} = {}) => ({
  type: 'MULTIPLY_COUNT',
  multiplyBy
})

const divideCount = ({divideBy = 10} = {}) => ({
  type: 'DIVIDE_COUNT',
  divideBy
})

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

      case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
          count: state.count - decrementBy
      };

      case 'RESET':
        return {
          count: state.count = 0
      };

      case 'SET':
        return {
          count: action.count
      };

      case 'MULTIPLY_COUNT':
        return {
          count: state.count * action.multiplyBy
      };

      case 'DIVIDE_COUNT':
        return {
          count: state.count / action.divideBy
      };

      default:
        return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 10 }));

store.dispatch(multiplyCount({ multiplyBy: 10 }));

store.dispatch(divideCount({ divideBy: 5 }));
