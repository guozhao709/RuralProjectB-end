import request from "@/utils/request";

// 登录
export const login = (data) => {
  return request.post("/admin/auth/login", data);
};
