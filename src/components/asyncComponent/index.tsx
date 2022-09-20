import { Suspense, ExoticComponent } from 'react';

const AsyncComponent =
  (Component: ExoticComponent, fallback?: string) => (props: Record<string, any>) =>
    (
      <Suspense fallback={fallback || ''}>
        <Component {...props} />
      </Suspense>
    );

export default AsyncComponent;
