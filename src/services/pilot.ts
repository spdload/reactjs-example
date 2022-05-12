import apiService from "services/api";

const pilotApi = {
  getPilotInfo: async (id: number) => await apiService.get(`pilots/${id}`),
};

export default pilotApi;
