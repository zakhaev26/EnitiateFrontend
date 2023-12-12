"use client"
import withAuth from "../../utils/withAuth"

const Login = () => {
  return (
    <div>
        <h1>Protected Page</h1>
    </div>

    )
}

export default withAuth(Login)