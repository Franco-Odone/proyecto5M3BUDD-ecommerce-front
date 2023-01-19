// A slice is logic containing reducers and actions
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  username: "",
  email: "",
  _id: "",
  // Creación de usuario-registro
  registerStatus: "",
  registerError: "",
  // Login
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

// Action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const resToken = await axios.post("http://localhost:3000/users", {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", resToken.data.token);

      return resToken.data.token;
    } catch (err) {
      console.log(err);
    //   err.response.data = "Por favor completar todos los campos...";
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log(action);
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
  },
});

export default authSlice.reducer;
