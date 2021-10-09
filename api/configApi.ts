import { apiV1, get, put, post, delele, patch } from "api/generic";
import { PlaceModel, FacultyModel, RequestModel, ClassModel } from "lib/models";

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
  getClassList: function (token: string) {
    const url = `${apiV1}/class`;
    return get(url, token);
  },
  newClass: function (data: ClassModel, token: string) {
    const url = `${apiV1}/class`;
    return post(url, data, token);
  },
  editClass: function (id: string, data: ClassModel, token: string) {
    const url = `${apiV1}/class/${id}`;
    return put(url, data, token);
  },
  delClass: function (id: string, token: string) {
    const url = `${apiV1}/class/${id}`;
    return delele(url, token);
  },
  getRequestList: function () {
    const url = `${apiV1}/request`;
    return get(url, "");
  },
  editRequest: function (id: string, data: RequestModel, token: string) {
    const url = `${apiV1}/request/${id}`;
    return put(url, data, token);
  },
  delRequest: function (id: string, token: string) {
    const url = `${apiV1}/request/${id}`;
    return delele(url, token);
  },
};
export default userApi;
