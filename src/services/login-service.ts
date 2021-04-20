const LOGIN = "Login";

export const logOut = () => {
  localStorage.removeItem(LOGIN);
};

export const getCurrentUser = () => {
  return localStorage.getItem(LOGIN);
};

export const logIn = (userName: string) => {
  localStorage.setItem(LOGIN, userName);
};
