import { createSlice } from '@reduxjs/toolkit';

export const pendingsSlice = createSlice({
   name: 'pendings',
   
   initialState: {
      pendings: [
         {
            "area": "Servicios Auxiliares A",
            "systems": [
            {
               "name": "Acondicionamiento de Aceite Térmico",
               "pendings": [
                  {
                     "id": 1,
                     'tag': 'LIT-25850',
                     'detail': 'Display en mal estado',
                     'intervention_method': 'En Operacion'
                  },
                  {
                     "id": 2,
                     'tag': 'LIT-25850',
                     'detail': 'Display en mal estado',
                     'intervention_method': 'En Operacion'
                  },
               ],
            },
            {
               "name": "Compresion y Distribución de Aire",
               "pendings": [
                  {
                     "id": 3,
                     'tag': 'C-1500',
                     'detail': 'Puerta en mal estado',
                     'intervention_method': 'Paro de equipo'
                  },
                  {
                     "id": 4,
                     'tag': 'LIT-25850',
                     'detail': 'Display en mal estado',
                     'intervention_method': 'En Operacion'
                  },
               ],
            },
         ]
         },
      ],
      surpassedPendings: [],
      canceledPendings: []
   },
   
   reducers: {
      login: (state) => {
         state.isLogged = true;
      },
      logout: (state) => {
         state.isLogged = false;
      },
   },
});

export const { login, logout } = pendingsSlice.actions;