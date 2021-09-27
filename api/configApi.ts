import { apiV1, get, put, post, delele } from "api/generic";
import { PlaceModel, FacultyModel } from "lib/models";

const userApi = {
  getPlaceList: function (token: string) {
    const url = `${apiV1}/place`;
    return get(url, token);
  },
  newPlace: function (data: PlaceModel, token: string) {
    const url = `${apiV1}/place`;
    return post(url, data, token);
  },
  editPlace: function (id: string, data: PlaceModel, token: string) {
    const url = `${apiV1}/place/${id}`;
    return put(url, data, token);
  },
  delPlace: function (id: string, token: string) {
    const url = `${apiV1}/place/${id}`;
    return delele(url, token);
  },
  getFacultyList: function (token: string) {
    const url = `${apiV1}/faculty`;
    return get(url, token);
  },
  newFaculty: function (data: FacultyModel, token: string) {
    const url = `${apiV1}/faculty`;
    return post(url, data, token);
  },
  editFaculty: function (id: string, data: FacultyModel, token: string) {
    const url = `${apiV1}/faculty/${id}`;
    return put(url, data, token);
  },
  delFaculty: function (id: string, token: string) {
    const url = `${apiV1}/faculty/${id}`;
    return delele(url, token);
  },
};
export default userApi;
