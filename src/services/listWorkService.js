import { BaseService } from './baseService';
class ListWork extends BaseService {
  constructor() {
    super();
  }
  getListWork = () => {
    return this.get(`api/jobs`);
  };
  getWorkDetail = (id) => {
    return this.getById('api/jobs/', id);
  };
  getComment = (id) => {
    return this.getById('api/comments/by-job', id);
  };
  getWorkRecommand = (id) => {
    return this.get(
      `api/jobs/by-sub-type?subType=${id}&skip=0&llimit=5`
    );
  };
}

export const listWorkApi = new ListWork();
