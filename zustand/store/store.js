import { create } from "zustand";
import { UserAuth } from '@/auth/context/AuthContext';

export const usePostSession = create((set) => {

  return {
    userName: "UNKNOWN_USER",
    setUserName: async () => {
      try {
        const {user } = UserAuth();
        const name = user.displayName || "UNKNOWN_USER";

        set((state) => {
          return { userName: name };
        });
      } catch (error) {
        console.error('Error setting user name:', error);
      }
    }
  };
});
