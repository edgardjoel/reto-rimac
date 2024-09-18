import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomeLayout = lazy(() =>
  import('@components/Templates').then((module) => ({ default: module.HomeLayout })),
);
const Home = lazy(() => import('@pages/Home').then((module) => ({ default: module.Home })));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
