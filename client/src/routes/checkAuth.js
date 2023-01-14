import axios from 'axios';

const checkAuth = async () => {
    try {
        const res = await axios.get('/client/checkAuth');
        if (res.status === 201 && res.data.message === "authorized") {
            return res;
        }
    } catch (error) {
        console.log('error: ', error.response.data);
        return error;
    }
}

export default checkAuth;