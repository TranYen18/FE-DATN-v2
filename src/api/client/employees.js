import instance from "../instance";
export const getAllEmployees = () => {
  return instance.get(`/employees`);
};
