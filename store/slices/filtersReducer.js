import { SET_FILTERS_BUTTON } from '../../actions/types';

const initialState = {
  filtersButton: 0,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS_BUTTON:
      return {
        ...state,
        filtersButton: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
