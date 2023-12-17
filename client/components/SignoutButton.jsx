"use client"
import { UserAuth } from '@/auth/context/AuthContext'
import { useRouter } from 'next/navigation';

const SignoutButton = () => {
    const { logOut } = UserAuth();
    const Router = useRouter();
    const handleSignOut = async () => {
        try {
            await logOut();
            Router.push("/");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div style={{ marginLeft: "45%" }}>
            <button onClick={handleSignOut} type="button" className="login-with-google-btn sign-out" >
                Sign Out
            </button>
        </div>
    )
}

export default SignoutButton