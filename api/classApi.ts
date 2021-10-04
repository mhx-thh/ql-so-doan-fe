import { apiV1, get, post } from "api/generic";

const classApi = {
  getAll: function () {
    const url = `${apiV1}/class`;
    return get(url, "");
  },
};
export default classApi;
