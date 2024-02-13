export const LoginAuth = (event) => {
  return {
    type: "LOGIN",
    payload: event,
  };
};
export const User_Profile = (event) => {
  return {
    type: "USER_PROFILE",
    payload: event,
  };
};

export const User_Profile_Image = (event) => {
  return {
    type: "USER_PROFILE_IMAGE",
    payload: event,
  };
};

export const goalResult = (event) => {
  return {
    type: "GOAL",
    payload: event,
  };
};
