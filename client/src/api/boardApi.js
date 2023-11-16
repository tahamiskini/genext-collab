import api from "../config/axiosConfig";

const boardApi = {
  get: (id) => api.get(`/b/${id}`),

  getAll: (userId) => api.get(`/${userId}/boards`),

  create: (data) => api.post("/b/", data),

  update: (boardId, title) => api.patch(`/b/${boardId}`, { boardTitle: title }),

  delete: (id) => api.delete(`/b/${id}`),

  inviteCollaborator: (boardId, data) => api.post(`/b/${boardId}/`, data),
};

export default boardApi;
