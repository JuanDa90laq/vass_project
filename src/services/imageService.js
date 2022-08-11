import Api from "./api";

class ImageService {
  static GetImage() {
    return Api().get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
  }
}
export default ImageService;
