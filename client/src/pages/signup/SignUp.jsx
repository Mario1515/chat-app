import React from "react";
import { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChecboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-md shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* FullName Input*/}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered input-primary w-full "
              style={{ backgroundColor: "#bbbbbb" }}
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          {/* Username Input */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered input-primary w-full "
              style={{ backgroundColor: "#bbbbbb" }}
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          {/* Password Input */}

          <div>
            <label className="label ">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full "
              style={{ backgroundColor: "#bbbbbb" }}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          {/* Confirm Password Input */}

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-200">
                Confirm Password{" "}
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password "
              className="input input-bordered input-primary w-full  mb-1"
              style={{ backgroundColor: "#bbbbbb" }}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender CheckBox */}
          <GenderCheck
            onCheckboxChange={handleChecboxChange}
            selectedGender={inputs.gender}
          />

          {/* Already Have an account input */}
          <Link
            to={"/login"}
            className="text-sm  text-gray-200 hover:text-purple-300 mt-1 inline-block"
          >
            Already have an account?
          </Link>

          <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
