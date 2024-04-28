import { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineWest } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authImg from "../assets/authImg.png";
import { Signup } from "../../model/signup";
import { accountService } from "../../service/accountService";
import React from "react";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Signup>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    username: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<Signup>>({});
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
    const validationErrors: Partial<Signup> = {};
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
    if (!formData.first_name) {
      validationErrors.first_name = "First name is required";
    }
    if (!formData.last_name) {
      validationErrors.last_name = "Last name is required";
    }
    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // Check for validation errors and set them in validationErrors object
    setErrors(validationErrors);

    const formDataWithRole: Signup = {
      ...formData,
      role: "user",
    };

    delete formDataWithRole.confirmPassword;
    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, proceed with form submission
      try {
        const response = await accountService.signup(formDataWithRole);
        if (response.ok) {
          // Handle successful response
          toast.success("Signup successful");
          setFormData({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            username: "",
            confirmPassword: "",
          });
          navigate("/fav-artiste");
          const { username } = formDataWithRole;
          localStorage.setItem('username', username);
        } // Handle response errors
        const responseData = await response.json();
        if (responseData.message) {
          toast.error(responseData.message);
        }
      } catch (error) {
        // Handle fetch error
        toast.error("An error occurred during signup");
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <div className="flex">
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
          <form
            className=" xl:pl-20 xl:pr-20 pl-10 pr-10 pt-10 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-center">
              <p className="font-h1-weight text-[40px] text-[#104b53]">
                Welcome{" "}
              </p>
              <span className="font-h1-weight text-[#104b53] text-[20px] mb-10">
                Create an Uncover account
              </span>
            </div>
            <div className="flex flex-col">
              <div>
                <label
                  className="text-[#104b53] font-h1-weight "
                  htmlFor="first_name"
                >
                  First name
                </label>
                <div>
                  {/* Display validation errors */}
                  {isSubmitted && errors.first_name && (
                    <span className="text-[#dd0000]">{errors.first_name}</span>
                  )}
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000]"
                  />
                </div>
              </div>

              <div>
                <label
                  className="text-[#104b53] font-h1-weight"
                  htmlFor="last_name"
                >
                  Last name
                </label>
                <div>
                  {isSubmitted && errors.last_name && (
                    <span className="text-[#dd0000]">{errors.last_name}</span>
                  )}
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000]"
                  />
                </div>
              </div>

              <label
                className="text-[#104b53] font-h1-weight"
                htmlFor="username"
              >
                Username
              </label>
              {isSubmitted && errors.username && (
                <span className="text-[#dd0000]">{errors.username}</span>
              )}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000]"
              />

              <label className="text-[#104b53] font-h1-weight" htmlFor="email">
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
                className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000]"
              />

              <label
                className="text-[#104b53] font-h1-weight "
                htmlFor="password"
              >
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
                className="w-full p-2 mb-5 border rounded mt-3 border-[#104b53] bg-white text-[#000]"
              />

              <label
                className="text-[#104b53] font-h1-weight "
                htmlFor="confirmPassword"
              >
                Confirm password
              </label>
              {isSubmitted && errors.confirmPassword && (
                <span className="text-[#dd0000]">{errors.confirmPassword}</span>
              )}
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded mt-3 border-[#104b53] bg-white text-[#000]"
              />
            </div>
            <input type="hidden" name="role" value="user" />

            <div className="justify-center flex flex-col items-center gap-y-3">
              <button
                type="submit"
                className="bg-[#104b53] secondaryColor uppercase xl:w-[28rem] w-[20rem] p-2 rounded mt-10 text-sm"
              >
                Create my Uncover Account
              </button>

              <p className="text-sm text-black">
                Already have an account ?
                <a href="/Login">
                  <span className="text-[#104b53] ramblerSemibold ml-1">
                    Login here
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
