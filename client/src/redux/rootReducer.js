import {all} from "redux-saga/effects";
import {combineReducers} from "redux";
import Auth from './reducers/Auth';
import Theme from './reducers/Theme';

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {usersSlice} from "../views/_redux/users/usersSlice";
import {activitiesSlice} from "../views/_redux/activities/activitiesSlice";
import {linkedactivitiesSlice} from "../views/_redux/linkedactivities/linkedactivitiesSlice";
import {discountsSlice} from "../views/_redux/discounts/discountsSlice";
import {vendormealsSlice} from "../views/_redux/vendormeals/vendormealsSlice";
import {vendortransportsSlice} from "../views/_redux/vendortransports/vendortransportsSlice";
import {vendoramenitiesSlice} from "../views/_redux/vendoramenities/vendoramenitiesSlice";
import {vendorsSlice} from "../views/_redux/vendors/vendorsSlice";
import {vendorsSlabSlice} from "../views/_redux/vendorsslab/vendorsslabSlice";
import {salesAgentSlice} from "../views/_redux/salesagent/salesagentSlice";

export const rootReducer = combineReducers({
  theme: Theme,
  auth: Auth,
  // auth: auth.reducer,
  users: usersSlice.reducer,
  activities: activitiesSlice.reducer,
  discounts: discountsSlice.reducer,
  linkedactivities: linkedactivitiesSlice.reducer,
  vendormeals: vendormealsSlice.reducer,
  vendortransports: vendortransportsSlice.reducer,
  vendoramenities: vendoramenitiesSlice.reducer,
  vendors: vendorsSlice.reducer,
  vendorsslab: vendorsSlabSlice.reducer,
  salesagent: salesAgentSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
