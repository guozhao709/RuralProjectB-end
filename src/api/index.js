import request from "@/utils/request";

// 登录
export const login = (data) => {
  return request.post("/admin/auth/login", data);
};

export const register = (data) => {
  return request.post("/admin/auth/register", data);
};
