import api from "../../api";

export default class greenApi {
  static async getContacts() {
    return await api.get(
      `/waInstance${import.meta.env.VITE_REACT_APP_ID_INSTANCE}/getContacts/${
        import.meta.env.VITE_REACT_APP_API_TOKEN_INSTANCE
      }`
    );
  }
  static async getChats() {
    return await api.get(
      `/waInstance${import.meta.env.VITE_REACT_APP_ID_INSTANCE}/getChats/${
        import.meta.env.VITE_REACT_APP_API_TOKEN_INSTANCE
      }`
    );
  }
  static async getIncomingMessages() {
    return await api.get(
      `/waInstance${
        import.meta.env.VITE_REACT_APP_ID_INSTANCE
      }/lastIncomingMessages/${
        import.meta.env.VITE_REACT_APP_API_TOKEN_INSTANCE
      }`
    );
  }

  // SEND TEXT
  static async sendText(body) {
    return await api.post(
      `/waInstance${
        import.meta.env.VITE_REACT_APP_ID_INSTANCE
      }/lastIncomingMessages/${
        import.meta.env.VITE_REACT_APP_API_TOKEN_INSTANCE
      }`,
      body
    );
  }
}
