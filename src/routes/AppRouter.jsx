
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthRouter } from '../auth/router/AuthRouter'
import { DashboardRouter } from '../dashboard/router/DashboardRouter'

export const AppRouter = () => {
   const { isLogged } = useSelector((state) => state.auth);

   return (
      <Routes>
         {
            isLogged
            ? <Route path='/*' element={<DashboardRouter />} />
            : <Route path='auth/*' element={<AuthRouter />} />
         }

         <Route path='/*' element={<Navigate to='/auth/login' />} />

      </Routes>
   )
}
