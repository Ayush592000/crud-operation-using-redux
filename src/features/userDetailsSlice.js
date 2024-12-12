import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//fetch data
export const readData = createAsyncThunk('readData', async (args, { rejectWithValue }) => {
  const response = await fetch('https://66bc39ba24da2de7ff69abcf.mockapi.io/crud-operation')
  try {
    const result = await response.json();
    return result;

  } catch (error) {
    return rejectWithValue(error)
  }
})
//post data
export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
  const response = await fetch('https://66bc39ba24da2de7ff69abcf.mockapi.io/crud-operation', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  try {
    const result = await response.json();
    return result;

  } catch (error) {
    return rejectWithValue(error)
  }
})
//delete user
export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
  const response = await fetch(`https://66bc39ba24da2de7ff69abcf.mockapi.io/crud-operation/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  })
  try {
    const result = await response.json();
    return result;

  } catch (error) {
    return rejectWithValue(error)
  }
})


//slice
export const userDetails = createSlice({
  name: 'userDetail',
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(readData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(readData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(readData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        const { id } = action.payload;
        if (id) {
          state.user = state.user.filter((ele) => ele.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
  }
})
// export const userDetail =
export default userDetails.reducer;