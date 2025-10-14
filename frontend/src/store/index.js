import {configureStore} from '@reduxjs/toolkit'
import searchReducer from '../features/jobs/slices/searchSlice';
import authReducer from '../features/auth/slice/authSlice';

const store = configureStore({
    reducer : {
        search : searchReducer,
        auth : authReducer
    }
});
export default store;