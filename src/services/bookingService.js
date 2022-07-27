import { BaseService } from './baseService';
class Booking extends BaseService {
  constructor() {
    super();
  }
  bookingWork = (id) => {
    return this.patch(`api/jobs/booking`, id);
  };
  getBookingList = () => this.get('api/jobs/by-user');
}

export const bookingApi = new Booking();
