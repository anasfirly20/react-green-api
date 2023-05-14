import api from "../../api";

// Local storage
import { getIdInstance, getApiTokenInstance } from "../../../utils";

const idInstance = getIdInstance();
const apiTokenInstance = getApiTokenInstance();

export default class greenApi {
  static async getContacts() {
    return await api.get(
      `/waInstance${idInstance}/getContacts/${apiTokenInstance}`
    );
  }
  static async getChats() {
    return await api.get(
      `/waInstance${idInstance}/getChats/${apiTokenInstance}`
    );
  }

  // GET MESSAGES
  static async getIncomingMessages() {
    return await api.get(
      `/waInstance${idInstance}/lastIncomingMessages/${apiTokenInstance}`
    );
  }
  static async getOutgoingMessages() {
    return await api.get(
      `/waInstance${idInstance}/lastOutgoingMessages/${apiTokenInstance}`
    );
  }

  // SEND TEXT
  static async sendText(body) {
    console.log("SENT BODY >>>", body);
    return await api.post(
      `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      body
    );
  }
}
