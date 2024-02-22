import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d71de027d9a3bc1d7a3963.mockapi.io'





export const fetchCars = createAsyncThunk(
  'adverts/fetchAll',
  async ({page = 1}, thunkAPI) => {
    try {
      const response = await axios.get('/adverts', {
        params: {
          limit: '12',
          page,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const filterCars = createAsyncThunk(
    'adverts/fetchAll',
    async(_, thunkAPI) => {
        try{
            const response = await axios.get('/adverts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }


)