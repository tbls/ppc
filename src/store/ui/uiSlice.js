import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
   name: 'ui',
   
   initialState: {
      isModalVisible: false,
   },
   
   reducers: {
      showModal: (state) => {
         state.isModalVisible = true;
      },
      hideModal: (state) => {
         state.isModalVisible = false;
      },
   },
});

export const { showModal, hideModal } = uiSlice.actions;