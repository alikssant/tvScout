import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";
export class TVshowApi {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}movie/popular${API_KEY_PARAM}`
    );

    return response.data.results;
  }
  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}movie/${tvShowId}/recommendations${API_KEY_PARAM}`
      );
      console.log(response.data.results.length);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching  recommendations:", error.message);

      throw error;
    }
  }
  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
