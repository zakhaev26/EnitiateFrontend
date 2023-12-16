import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth'; // Import the necessary Firebase auth method
import { auth } from '../auth/firebase'; // Adjust the path accordingly

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          // Redirect to the home route if not logged in
          router.replace('/');
        }
      });

      return () => unsubscribe(); // Unsubscribe from the auth state listener when component unmounts
    }, [router]);

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
