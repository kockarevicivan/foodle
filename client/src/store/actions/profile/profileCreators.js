import { UPDATE_USER } from "./profileTypes";

export const updateUserCreator = credentials => ({
  type: UPDATE_USER,
  credentials
});
