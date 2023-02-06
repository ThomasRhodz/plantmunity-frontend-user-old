import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  shop_name: null,
  shop_logo: null,
  time_open: null,
  time_close: null,
  bio_note: null,
  address: null,
  contact: null,
  email: null,
  telephone: null,
  tags: null,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  
  reducers: {
    setShopDetails: (
        state, 
        { payload: 
            {
                id,
                shop_name,
                shop_logo,
                time_open,
                time_close,
                bio_note,
                address,
                contact,
                email,
                telephone,
                tags,
            } }) => {
                state.id= id;
                state.shop_name= shop_name;
                state.shop_logo= shop_logo;
                state.time_open= time_open;
                state.time_close= time_close;
                state.bio_note= bio_note;
                state.address= address;
                state.contact= contact;
                state.email= email;
                state.telephone= telephone;
                state.tags= tags;
    },
    resetShopDetails: (state) => {
        state.id= null;
        state.shop_name= null;
        state.shop_logo= null;
        state.time_open= null;
        state.time_close= null;
        state.bio_note= null;
        state.address= null;
        state.contact= null;
        state.email= null;
        state.telephone= null;
        state.tags= null;
    },
  },
});

export const { setShopDetails, resetShopDetails } = shopSlice.actions;

export default shopSlice.reducer;