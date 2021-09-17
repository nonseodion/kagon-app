import axios from "axios";

const baseUrl = "https://api.kagon.io/v1/";

// let accessToken = sessionStorage.getItem("kagon_token");

// if (accessToken) {
//   axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
// }

export const login = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}business/account/auth/login`,
    data,
  });
};

export const signup = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}business/account/user/create`,
    data,
  });
};

export const fetchCoins = () => {
  return axios({
    method: "get",
    url: `${baseUrl}business/coins/coin/list`,
  });
};

export const fetchWallets = () => {
  return axios({
    method: "get",
    url: `${baseUrl}business/wallets/wallet/list`,
  });
};

export const postOrder = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}business/transactions/transaction/create`,
    data,
  });
};

export const sendCoin = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}business/wallets/wallet/send`,
    data,
  });
};
