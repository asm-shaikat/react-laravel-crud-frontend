import axios from 'axios';
export default axios.create({
    baseUrl: 'http://localhost:8000/api',
    headers: {
        "content-type": "application/json"
    }
})