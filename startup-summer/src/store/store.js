import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/cardsSlice';
import tokenReducer from './reducers/tokenSlice';

const rootReducer = combineReducers({
  tokenReducer,
  cardReducer

  // [cardsAPI.reducerPath]: cardsAPI.reducer,
  // formReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware)
  });
};

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
