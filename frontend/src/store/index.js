import {configureStore} from '@reduxjs/toolkit'
import searchReducer from '../features/jobs/slices/searchSlice';

const store = configureStore({
    reducer : {
        search : searchReducer
    }
});
export default store;