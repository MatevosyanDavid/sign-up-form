import { Suspense, ExoticComponent } from 'react';

const asyncComponent =
  (Component: ExoticComponent, fallback?: string) => (props: Record<string, any>) =>
    (
      <Suspense fallback={fallback || ''}>
        <Component {...props} />
      </Suspense>
    );

export default asyncComponent;
