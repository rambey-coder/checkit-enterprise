import axios from "axios";

const authBaseURL =
  "https://site--checkit-procurement--gqr8p4b5dyhw.code.run/api/auth/";

class Services {
  async SignUp(data) {
    return axios.post(authBaseURL + `signup`, data);
  }
}

const ApiService = new Services();

export default ApiService;
