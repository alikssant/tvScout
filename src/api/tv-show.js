import axios from "axios";
import { BASE_URL } from "../config";
export class TVshowApi {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
    );

    return response.data.results;
  }
  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}movie/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
      );

      return response.data.results;
    } catch (error) {
      console.error("Error fetching  recommendations:", error.message);

      throw error;
    }
  }
  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
