import instance from "../instance";

export const getEmployeeByBookingDay = (query, employee) => {
  return instance.get(
    `/booking/get-employee-by-date?date=${query}&${employee}`
  );
};
export const getAllBooking = () => {
  return instance.get(`/booking`);
};
