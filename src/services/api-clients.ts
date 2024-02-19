import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
       key: 'acf90857f6c246fb81fbf40f43ef6bdf'
    }

})
