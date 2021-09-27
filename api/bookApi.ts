import { apiV1, get, post } from "api/generic";
import { BookModel } from "lib/models";

const userApi = {
  getBookList: function () {
    const url = `${apiV1}/book`;
    return get(url, "");
  },
  newBook: function (data: BookModel) {
    const url = `${apiV1}/book`;
    return post(url, data, "");
  },
  getRequestList: function () {
    const url = `${apiV1}/request`;
    return get(url, "");
  },
};
export default userApi;
