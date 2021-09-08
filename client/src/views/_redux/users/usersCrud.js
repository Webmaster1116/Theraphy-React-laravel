import axios from "axios";
import { API_URL } from "../../../_utiles/config";

export const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const USERS_URL = `${API_URL}/users`;

export const PRODUCTS_URL = "api/products";
// export const API_URL = "http://45.33.125.163/api";

export function getClients() {
  return axios.get(`${USERS_URL}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      
    },
  });
}

export function addUser(product, token) {
  if (JSON.parse(product)["id"] == 0) {
    return axios.post(`${USERS_URL}/add-user`, product, {
      headers: {
        "Content-Type": "application/json",
        
      },
    });
  } else {
    return axios.patch(`${USERS_URL}/add-user`, product, {
      headers: {
        "Content-Type": "application/json",
        
      },
    });
  }
}

export function getUserData(id, token) {
  return axios.get(`${USERS_URL}` + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
    },
  });
}

export function getUserLists() {
  return axios.get(`${USERS_URL}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Credentials": true
    },
  });
}
