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

const translate = async (fromText) => {
  const inputLanguage = "en-US";
  const outputLanguage = "es-ES";
  const url = `https://api.mymemory.translated.net/get?q=${fromText}!&langpair=${inputLanguage}|${outputLanguage}`;
  return await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.responseData.translatedText;
    })
    .catch((error) => {
      console.log(error);
    });
};

// Al hacer un registro se inicia sesión en este caso ya que tembién se extrae y se pasa el _id desde el token
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      // El token es una referencia (un identificador) que regresa a los datos sensibles a través de un sistema de tokenización
      const resToken = await axios.post("http://localhost:3000/users", {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", resToken.data.token);

      return resToken.data.token;
    } catch (err) {
      let translatedMessage = await translate(err.response.data).then(
        (data) => {
          return data;
        }
      );
      return rejectWithValue(translatedMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      // El token es una referencia (un identificador) que regresa a los datos sensibles a través de un sistema de tokenización
      const resToken = await axios.post("http://localhost:3000/auth/login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", resToken.data.token);

      return resToken.data.token;
    } catch (err) {
      let translatedMessage = await translate(err.response.data).then(
        (data) => {
          return data;
        }
      );
      return rejectWithValue(translatedMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Es necesario llamar a esta acción en algún lugar en su código para que se ejecute y actualice el estado de la aplicación.
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          username: user.username,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        username: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // cuándo el reducer está fulfilled en el payload viene el token
      console.log(action);
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
    // Login
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          email: user.email,
          _id: user._id,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log(action);
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
