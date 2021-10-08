import { apiV1, get, post, put, delele } from "api/generic";
import { BookModel, HistoryModel } from "lib/models";

const userApi = {
  getBookList: function () {
    const url = `${apiV1}/book`;
    return get(url, "");
  },
  getBookListWithSID: function (id: string) {
    const url = `${apiV1}/book/${id}`;
    return get(url, "");
  },
  newBook: function (data: BookModel) {
    const url = `${apiV1}/book`;
    return post(url, data, "");
  },
  editBook: function (data: BookModel, id: string, token: string) {
    const url = `${apiV1}/book/${id}`;
    return put(url, data, token);
  },
  delBook: function (id: string, token: string) {
    const url = `${apiV1}/book/${id}`;
    return delele(url, token);
  },
  editHistory: function (data: HistoryModel, id: string, token: string) {
    const url = `${apiV1}/history/${id}`;
    return put(url, data, token);
  },
};
export default userApi;
