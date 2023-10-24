import { Navigate, Route, Routes } from 'react-router-dom';

import { PendingsPage } from '../pages/PendingsPage';

export const PendingsRouter = () => {
   return (
      <Routes>

         <Route path="/" element={ <PendingsPage /> } />
         <Route path="/*" element={ <Navigate to="/pendientes-por-condicion" /> } />
         
      </Routes>
   );
};