import { Navigate, Route, Routes } from 'react-router-dom';


import { SCEPage } from '../pages/SCEPage';

export const SCERouter = () => {
   return (
      <Routes>

         <Route path="/" element={ <SCEPage /> } />
         <Route path="/*" element={ <Navigate to="/sce" /> } />
         
      </Routes>
   );
};