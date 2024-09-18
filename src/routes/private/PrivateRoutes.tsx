import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomeLayout = lazy(() =>
  import('@components/Templates').then((module) => ({ default: module.HomeLayout })),
);
const Plans = lazy(() => import('@pages/Plans').then((module) => ({ default: module.Plans })));

const PrivateRoutes = () => {
  return (
    <Routes>
      {/* Redireccionar la raíz "/" a "/plans" */}
      <Route path="/" element={<Navigate to="/plans" replace />} />

      {/* Ruta /plans dentro del layout */}
      <Route path="/plans" element={<HomeLayout hideFooter={false} />}>
        <Route index element={<Plans />} />
      </Route>

      {/* Redireccionar cualquier ruta no válida a /plans */}
      <Route path="*" element={<Navigate to="/plans" replace />} />
    </Routes>
  );
};

export default PrivateRoutes;
