import * as requestFromServer from "./usersCrud";
import { usersSlice, callTypes } from "./usersSlice";
import MockUtils from "../../../_utiles/mock.utils";

const { actions } = usersSlice;

export const addUser = (productForCreation, token) => (dispatch) => {
  // dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .addUser(productForCreation, token)
    .then(({ data }) => {
      dispatch(actions.statusFetched({ statusData: data.msg }));
    })
    .catch((error) => {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getUserData = (id, token) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getUserData(id, token)
    .then(({ data }) => {
      if (data.success) {
        let userRole = "1";
        if (data.data.role == "Vendor") {
          userRole = "2";
        }
        const userdata = {
          id: data.data.id,
          business_name: data.data.businessname,
          first_name: data.data.first_name,
          last_name: data.data.last_name,
          email: data.data.email,
          address: data.data.address,
          zip: data.data.zip,
          city: data.data.city,
          phone_number: data.data.phone_number,
          website: data.data.website,
          social: data.data.social,
          description: data.data.description,
          rab: data.data.rab,
          organisation: data.data.organisation,
          insurance: data.data.insurance,
          price_range: data.data.price_range,
          business_logo: data.data.business_logo,
          role: data.data.role,
          password: data.data.password,
        };
        dispatch(actions.userFetched({ userData: userdata }));
      }
    })
    .catch((error) => {
      error.clientMessage = "Can't find client";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getUserLists = () => (dispatch) => {
  // dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getUserLists()
    .then(({ data }) => {
      dispatch(actions.userListFetched({ userListData: data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find vendors";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const setUserData = (token) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getUserLists(token)
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setUserDataFetched({ statusData: data.data }));
      }
    })
    .catch((error) => {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
