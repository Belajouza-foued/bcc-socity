import axios from 'axios';

const API_URL = "http://localhost:5030/api/email/send-email";

class MailService {
  sendEmail(data) {
    return axios.post(API_URL, data);
  }
}

export default new MailService();
