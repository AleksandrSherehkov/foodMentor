import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className=" flex flex-auto">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
