
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    await(pause(1 * 1000));  // development pause

    return response.data;
});

// Development only!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export { fetchUsers };
