import axios from "axios";      

//const API_URL = "/api/contractor/";

//create a new contractor
const createContractor = async (contractor, thunkAPI) => {
    const config = {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
    },
    }

    const response = await axios.post(`https://seaside-bb.herokuapp.com/api/contractor/regcontractor`, contractor, config);
    return response.data;
}

//get the contractor
const getContractor = async (thunkAPI) => {
    const response = await axios.get(`https://seaside-bb.herokuapp.com/api/contractor`);
    return response.data;
}

//delete the contractor
const deleteContractor = async (contractorId, thunkAPI) => {
    const config = {
        headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
    }

    const response = await axios.delete(`https://seaside-bb.herokuapp.com/api/contractor/remove/${contractorId}`, config);
    return response.data;
}

const contractorService = {
    createContractor,
    getContractor,
    deleteContractor,
};

export default contractorService;
