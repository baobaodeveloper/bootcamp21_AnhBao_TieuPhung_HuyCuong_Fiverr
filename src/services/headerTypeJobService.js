import { BaseService } from './baseService';

class HeaderTypeJobs extends BaseService {
  constructor() {
    super();
  }
  getHeaderAllTypeJob = () => {
    return this.get('api/type-jobs');
  };
  getAllJobFromSubType = (id) => {
    return this.get(`api/jobs/by-sub-type?subType=${id}`);
  };
  searchJob = (name) => {
    return this.get(`api/jobs/by-name?name=${name}`);
  };
}
export const headerApi = new HeaderTypeJobs();
