import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d0c13b615776ea74b0e9e93138ea2a2f5320e0dd8f3079cd72f2049cb4b6e034"
  }
});
