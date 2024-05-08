import React from "react";
import GenderCheck from "./GenderCheck";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>

          {/* FullName Input*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Full Name</span>
            </label>
            <input type="text" placeholder="Enter Full Name" className="input input-bordered input-primary w-full " style={{ backgroundColor: '#bbbbbb' }} />
          </div>

          {/* Username Input */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="input input-bordered input-primary w-full " style={{ backgroundColor: '#bbbbbb' }} />
          </div>

          {/* Password Input */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className="input input-bordered input-primary w-full " style={{ backgroundColor: '#bbbbbb' }} />
          </div>

          {/* Confirm Password Input */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">Confirm Password </span>
            </label>
            <input type="text" placeholder="Enter Confirm Password " className="input input-bordered input-primary w-full  mb-1" style={{ backgroundColor: '#bbbbbb' }} />
          </div>

          {/* Gender CheckBox */}
          <GenderCheck/>

          {/* Already Have an account input */}
          <a href="#" className="text-sm  text-gray-200 hover:text-purple-300 mt-1 inline-block">Already have an account?</a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default SignUp;
