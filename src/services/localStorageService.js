const USER = "user";

export const localStorageService = {

  setUserLocal: (dataLogin) => {
    let dataJson = JSON.stringify(dataLogin);
    localStorage.setItem(USER, dataJson);
  },

  getUserLocal: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      return JSON.parse(dataJson);
    } else {
      return null;
    }
  },

  removeUserLocal: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      localStorage.removeItem(USER);
    }
  }
}