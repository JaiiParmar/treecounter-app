import { combineReducers } from 'redux';
import commonReducers from './commonReducers';
import { createAction } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

export const userLogout = createAction('USER_LOGOUT');
import currentUserProfileIdReducer from './currentUserProfileIdReducer';

import selectedPlantProjectIdReducer from './selectedPlantProjectIdReducer';
import supportedTreecounterReducer from './supportedTreecounterReducer';
import sideNavReducer from './sideNavReducer';

const appReducer = combineReducers({
  ...commonReducers,
  form: formReducer,
  currentUserProfileId: currentUserProfileIdReducer,
  selectedPlantProjectId: selectedPlantProjectIdReducer,
  supportedTreecounter: supportedTreecounterReducer,
  sideNav: sideNavReducer,
  mediaPath: (state = {}) => state
});

export default (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
