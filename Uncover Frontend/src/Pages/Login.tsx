import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { MdOutlineWest } from "react-icons/md"
import authImg from "../assets/authImg.png"
import { LoginModel } from "../../model/login";
import { accountService } from "../../service/accountService";
import { login } from "../../actions/accountActions";
import React from "react";

function Login({setIsLoggedIn}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginModel>({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<Partial<LoginModel>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission here
    // Validation logic
    const validationErrors: Partial<LoginModel> = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (
      // Validate email format using a regular expression
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      validationErrors.email = "Invalid email format";
    }
    // Check other fields for emptiness
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "Password must be longer than or equal to 6 characters";
    }

    // Check for validation errors and set them in validationErrors object
    setErrors(validationErrors);

    const formDataWithRole: LoginModel= {
      ...formData,
      role: "user",
    };

    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, proceed with form submission
      try {
        const { response, userData } = await accountService.login(formDataWithRole);

        if (response.ok && userData) {
          // Handle successful response
          dispatch(login(userData));
          localStorage.setItem('unCoverUser', JSON.stringify(userData));
          toast.success("Login successful");
          setFormData({
            email: "",
            password: ""
          });
          setIsLoggedIn(true)
          localStorage.setItem('isLoggedIn', 'true');
          navigate("/music-home");
        } 
        
        
        // Handle response errors
        const responseData = await response.json();
        if (responseData.message) {
          toast.error(responseData.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
    <div className="flex h-screen">
        <div className="w-1/2 hidden xl:flex">
          {/* Left Div with Image */}
          <img
            alt="Login Image"
            src={authImg}
            className="h-full object-cover w-full "
          />
        </div>

        <div className="xl:w-1/2 w-screen p-4 bg-white">
          <a href="/">
            <div className="flex flex-row w-20 justify-evenly items-center text-[#104b53] mb-5">
              <MdOutlineWest className="text-[#104b53]" />
              <p className="font-h1-weight">Back</p>
            </div>
          </a>

          {/* Right Div with Form */}
          <form className=" xl:pl-20 xl:pr-20 pl-10 pr-10" onSubmit={handleSubmit}>
            <div className="flex flex-col text-center">
              <p className="font-h1-weight text-[40px] text-[#104b53]">Welcome </p>
              <span className="font-h1-weight text-[#104b53] text-[20px] mb-10">
               Login to your Uncover account
              </span>
            </div>
            <div className="flex flex-col">
              
              <label className="text-[#104b53] font-h1-weight" htmlFor="Email">
                Email
              </label>
              {isSubmitted && errors.email && (
                <span className="text-[#dd0000]">{errors.email}</span>
              )}
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53]"
              />

              <label className="text-[#104b53] font-h1-weight " htmlFor="password">
                Password
              </label>
              {isSubmitted && errors.password && (
                <span className="text-[#dd0000]">{errors.password}</span>
              )}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mb-5 border rounded mt-3 border-[#104b53]"
              />
            </div>

            <div className="justify-center flex flex-col items-center gap-y-3">
              <button
                className="bg-[#104b53] secondaryColor uppercase xl:w-[28rem] w-[20rem] p-2 rounded mt-10 text-sm"
              >
                Login
              </button>
    
              <p className="text-sm text-black">
                New to Uncover?
                <a href="/SignUp">
                  <span className="text-[#104b53] ramblerSemibold ml-1">
                  Sign Up here
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login