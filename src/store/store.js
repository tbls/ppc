import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { uiSlice } from './ui/uiSlice';
import { pendingsSlice } from './pendings/pendingsSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
      ui: uiSlice.reducer,
      pendings: pendingsSlice.reducer,
	},
});