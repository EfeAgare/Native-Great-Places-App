import { ADD_PLACE } from '../constant/actionIdentifier';
import Place from '../../model/Place';

const initialState = {
  places: [],
};

export const placesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString, action.placeData.title);
      return {
        ...state,
        places: state.places.concat(newPlace),
      };

    default:
      return state;
  }
};
