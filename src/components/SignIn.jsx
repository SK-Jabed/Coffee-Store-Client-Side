import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiGoogleFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            console.log(result.user);

            // Update Last Login Time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const signInInfo = { email, lastSignInTime };

            fetch(`http://localhost:5000/users`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log("Sign In Info Updated in DB", data);
            })

        })
        .catch(error => {
            console.log("ERROR", error.message);
        })
    }

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none px-[53px] py-[56px]">
          <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
            Login your account
          </h2>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <Link
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 top-12 rounded-full"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Link>
              <label className="label">
                <Link
                  to="/auth/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            {/* {error && (
              <label className="label text-base font-semibold text-red-600">
                {error}
              </label>
            )} */}
            <div className="form-control">
              <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-semibold text-[#706F6F]">
            Dont’t Have An Account?{" "}
            <Link to="/auth/signUp" className="text-red-500 font-bold">
              Register
            </Link>
          </p>
          <div className="divider">OR</div>
          <div>
            <div className="flex flex-col gap-2">
              <button
                // onClick={handleGoogleSignIn}
                className="btn text-[#403F3F] text-lg font-medium bg-white border-2 border-[#403F3F] hover:text-white hover:bg-[#403F3F] hover:border-none hover:shadow-lg"
              >
                <RiGoogleFill />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;