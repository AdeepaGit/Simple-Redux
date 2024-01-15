import { FETCH_BUTTON_CLICK } from "./types";

export const fetchPosts = () => {
  return {
    type: FETCH_BUTTON_CLICK,
    payload: [
      {
        userId: 1,
        id: 1,
        title: "adasdsad adad",
        body: "adq aqqwwd",
      },
      {
        userId: 2,
        id: 2,
        title: "adasdsad adad",
        body: "adq aqqwwd",
      },

      {
        userId: 3,
        id: 3,
        title: "adasdsad adad",
        body: "adq aqqwwd",
      },
    ],
  };
};
