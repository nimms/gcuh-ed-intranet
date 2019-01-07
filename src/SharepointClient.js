import Axios from 'axios';
class SharepointClient {
  constructor(server_address) {
    this.server_address = server_address;
  }

  getDocuments = url => {
    const request_url = `${this.server_address}${url}`;
    console.log(`GET request to ${request_url}`);
    const data = '';
    Axios.get(request_url)
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    return data;
  };
}

export default SharepointClient;
