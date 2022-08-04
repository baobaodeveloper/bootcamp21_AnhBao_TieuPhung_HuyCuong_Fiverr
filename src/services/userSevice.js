import { BaseService } from './baseService';
class UserService extends BaseService {
  constructor() {
    super();
  }
  getInforUser = (id) => {
    return this.getById(`api/users`, id);
  };
  updateAvatarUser = (data) => {
    return this.postAvatar('api/users/upload-avatar/', data);
  };
  updateUser = (id, data) => {
    return this.put(`api/users/${id}`, data);
  };
  createJob = (data) => {
    return this.post('api/jobs', data);
  };
  deleteJob = (id) => {
    return this.delete('api/jobs', id);
  };
  updateJob = (data, id) => {
    return this.put(`api/jobs/${id}`, data);
  };
  updateImageJob = (id, data) => {
    return this.postImageJob(`api/jobs/upload-image/${id}`, data);
  };
}

export const userInfor = new UserService();
