import { Navigate, Route, Routes } from 'react-router-dom';

import { DashboardPage } from '../pages/DashboardPage';
import { EquipmentsRouter } from '../../equipments/router/EquipmentsRouter';
// import { AppNavbar } from '../components/AppNavbar';
import { SCERouter } from '../../sce/router/SCERouter';
import { PendingsRouter } from '../../pendings/router/PendingsRouter';
import { NavBar } from '../components/NavBar';

export const DashboardRouter = () => {
   return (
      <>
         {/* <AppNavbar /> */}
         <NavBar />
         <div className='container-lg'>
            <Routes >
               <Route path="/" element={<DashboardPage />} />
               <Route path="/equipos-principales/*" element={<EquipmentsRouter /> } />
               <Route path="/sce/*" element={<SCERouter /> } />
               <Route path="/pendientes-por-condicion/*" element={<PendingsRouter /> } />
               <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
         </div>
      </>
   );
};