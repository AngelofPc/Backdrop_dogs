import { fetchDogs, likeDog, unLikeDog, setError, setPending } from './actionsSlice';

export const getDogsFromApi = async (dispatch) => {
  dispatch(setPending(true));
  try {
    const response = await fetch(
      'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20'
    );
    const data = await response.json();
    dispatch(fetchDogs(data));
  } catch (error) {
    if (error?.message === 'Network Error') {
      dispatch(setError(error.message));
    } else {
      dispatch(setError(error.response.data.message));
    }
  }
};

export const favDog = async (dog, dispatch) => {
  dispatch(setPending(true));
  dispatch(likeDog(dog));
  dispatch(setPending(false));
};

export const unFavDog = async (dog, dispatch) => {
  dispatch(setPending(true));
  dispatch(unLikeDog(dog));
  dispatch(setPending(false));
};
