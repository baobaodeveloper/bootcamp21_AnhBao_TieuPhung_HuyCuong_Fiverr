import { BaseService } from './baseService';

class HeaderTypeJobs extends BaseService {
  constructor() {
    super();
  }
  getHeaderAllTypeJob = () => {
    return this.get('api/type-jobs');
  };
}
export const headerApi = new HeaderTypeJobs();
