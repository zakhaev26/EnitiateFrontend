// utils/withAuth.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { user } from "../auth/context/AuthContext";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          if (!user) {
            router.push('/'); // Redirect to login if not authenticated
            alert("BKL")
          }
        } catch (error) {
          console.error('Error checking authentication:', error);
        }
      };
     
      checkAuth();
    }, [user]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
