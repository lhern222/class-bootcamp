const axios = require("axios");
const MovieSearch = require("../movieSearch");

jest.mock("axios");//mock used

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);//linking API
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";//example if we are searching for ROCKY maybe the first will be the original and the other could be Rocky 2 or Rocky 3
      //limits unconsistent results 

      axios.get.mockReturnValue(
        new Promise(function(resolve) {//axious promise base, when searching for something an a third party API the data might not be the same
          resolve({ data: {} });
        })
      );
//you are trying to control the uncontrollable the unpredictable 
      expect(movie.search(name)).resolves.toEqual({ data: {} });
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });
});
