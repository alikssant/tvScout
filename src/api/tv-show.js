import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";

export class TVshowApi {
  static async fetchPopulars() {
    //     const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    //     console.log("Today");
    //     console.log(response.data.results);
    //     return response.data.results;

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmRiYjc1YjAzNzhjMzNmOWFkMmE3NTUxMTY4ODdhNSIsIm5iZiI6MTczMTI0MTg1Mi4xODcsInN1YiI6IjY3MzBhNzdjYWM5NzBhYWQyYThkOTUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l0-bFsXpuxKcs99ieOHVVcQSyT37lH5dJjlXFS4uS8I",
      },
    };
    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data.results);
    //   return response.data.results;
    // } catch (error) {
    //   console.error("Error fetching popular TV shows:", error.message);
    //   throw error;
    // }
    return FAKE_POPULARS;
  }
}
