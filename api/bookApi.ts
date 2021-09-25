import { apiV1, get, post } from "api/generic";

const userApi = {
  getBookList: function () {
    const url = `${apiV1}/book`;
    return get(url, "");
  },
  newBook: function (data: any) {
    const url = `${apiV1}/book`;
    return post(url, data, "");
  },
};
export default userApi;
