import { useAuth } from '@hooks/useAuth';
import PrivateRoutes from '@routes/private/PrivateRoutes';

import { PublicRoutes } from '@routes/public';

import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const { userInfo } = useAuth();
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {userInfo ? <PrivateRoutes /> : <PublicRoutes />}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
