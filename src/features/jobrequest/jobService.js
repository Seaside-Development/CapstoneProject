import axios from "axios";  

//create a new job request
const createJobRequest = async (jobRequest, thunkAPI) => {
    const config = {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
    },
    }
    const response = await axios.post(`https://seaside-bb.herokuapp.com/api/jobrequests/createjob`, jobRequest, config);
    return response.data;
}

//Get the user's job requests
const getJobRequests = async () => {
    const response = await axios.get(`https://seaside-bb.herokuapp.com/api/jobrequests/getJobrequests/`);
    return response.data;
}

const getUserJobRequests = async (userId, thunkAPI) => {
    const config = {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
    },
    }
    const response = await axios.get(`https://seaside-bb.herokuapp.com/api/jobrequests/myjobs/${userId}`, config);
    return response.data;
}

const deleteJobRequest = async (jobRequestId, thunkAPI) => {
    const config = {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
    }
    const response = await axios.delete(`https://seaside-bb.herokuapp.com/api/jobrequests/removejob/${jobRequestId}`, config);
    return response.data;
}

const jobService = {
    createJobRequest,
    getJobRequests,
    deleteJobRequest,
    getUserJobRequests,
};

export default jobService;