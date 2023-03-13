import axios from "axios";

class Api {

    static async postAPI( name, email, password) {
        const requestUrl = `${process.env.REACT_APP_BASE_URL}/user`;
        const requestBody = { name, email, password};

        try {
            const response = await axios.post(requestUrl, requestBody);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return error.response.data;
        }
    }
}

export default Api;