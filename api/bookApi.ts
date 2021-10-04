import { apiV1, post } from "api/generic";

const bookApi = {
  postBook: function (data: any, token: string) {
    const url = `${apiV1}/book`;
    return post(url, data, token);
  },
};
export default bookApi;
