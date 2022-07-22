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
}

export const userInfor = new UserService();
