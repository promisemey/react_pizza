import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// IP定位 需要魔法
const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      // timeout: 5000,
      maximumAge: 0,
    });
  });
};

const GD_KEY = "bdcb713505916c92f9cb7ac751b8579d";

//
// const fetchAddress = async () => {
//   const { coords } = await getPosition();

//   const location = { latitude: coords.latitude, longitude: coords.longitude };

//   const result = await fetch(
//     `https://restapi.amap.com/v3/geocode/regeo?key=${GD_KEY}&location=${coords.longitude},${coords.latitude}`,
//   );
//   const resultJson = await result.json();

//   const { regeocode } = resultJson;
//   console.log(regeocode);
//   return { location, address: regeocode.formatted_address };
// };

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const { coords } = await getPosition();

  const location = { latitude: coords.latitude, longitude: coords.longitude };

  const result = await fetch(
    `https://restapi.amap.com/v3/geocode/regeo?key=${GD_KEY}&location=${coords.longitude},${coords.latitude}`,
  );
  const resultJson = await result.json();

  const { regeocode } = resultJson;
  console.log(regeocode);
  return { location, address: regeocode.formatted_address };
});

const initialState = {
  username: "Promise",
  status: "idle",
  location: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: {
      prepare: (username) => {
        // return payload;
        return {
          payload: username,
        };
      },
      reducer: (state, action) => {
        console.log("reducer => ", action);
        const { username } = action.payload;
        state.username = username;
        // state.username =
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.location = action.payload.location;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        console.log("error", action.error);
        state.error = action.error.message;
      });
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
