import * as Axios from 'axios';
export default class SPClient {
  private axios: Axios.AxiosInstance = Axios.default.create({
    baseURL: process.env.REACT_APP_SHAREPOINT_BASE_URL,
  });
  /**
   * Provides a base axios instance with relevant options set.
   * Set REACT_APP_SHAREPOINT_BASE_URL in relevant .env file
   */

  /**
   * Returns array of documents from Sharepoint Server
   * Set REACT_APP_SHAREPOINT_BASE_URL and REACT_APP_DOCUMENTS_URL in relevant .env file
   */
  public getDocuments = () => {
    return this.axios
      .get(process.env.REACT_APP_DOCUMENTS_URL || '')
      .then(response => {
        return response.data.d.results;
      })
      .catch(error => console.error(error));
  };
}
