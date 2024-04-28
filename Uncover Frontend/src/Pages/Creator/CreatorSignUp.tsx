import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import creatorAuthImg from "../../assets/creatorAuthImg.jpeg";
import logo from "../../assets/LOGO.png";
import { Signup } from "../../../model/signup";
import { accountService } from "../../../service/accountService";
import React from "react";

function CreatorSignUp() {
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
      role: "creator",
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
          navigate("/edit-profile");
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
      <section className="flex items-center justify-center h-screen">
        <img
          src={creatorAuthImg}
          alt="creatorAuthImg"
          className="object-cover h-screen w-full xl:flex hidden "
        />
        <div className="absolute flex justify-center items-center w-full">
          <div className="bg-white rounded-lg opacity-90">
            <form className="p-10 xl:p-5 opacity-90" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center flex-col text-center mb-5 space-y-3 ">
                <img src={logo} alt="Uncover-Logo" className="h-[1.2rem] hidden md:flex" />
              <span className="font-h1-weight text-[#104b53] text-[20px]">
                  Login to your Uncover Creator account
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center xl:text-center ">
                <div className="flex flex-col xl:mr-4">
                  <label
                    className="text-[#104b53] font-h1-weight "
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <div>
                    {/* Display validation errors */}
                    {isSubmitted && errors.first_name && (
                      <span className="text-[#dd0000]">
                        {errors.first_name}
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] font-medium focus:border-[#104b53]"
                  />
                </div>
                <div className="flex flex-col xl:ml-4">
                  <label
                    className="text-[#104b53] font-h1-weight"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  {isSubmitted && errors.last_name && (
                    <span className="text-[#dd0000]">{errors.last_name}</span>
                  )}
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] font-medium focus:border-[#104b53]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
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
                  className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] focus:border-[#104b53]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#104b53] font-h1-weight"
                  htmlFor="email"
                >
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
                  className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] font-medium focus:border-[#104b53]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#104b53] font-h1-weight"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] font-medium focus:border-[#104b53]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#104b53] font-h1-weight"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                {isSubmitted && errors.confirmPassword && (
                  <span className="text-[#dd0000]">
                    {errors.confirmPassword}
                  </span>
                )}
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 mb-5 rounded mt-3 border border-[#104b53] bg-white text-[#000] font-medium focus:border-[#104b53]"
                />
              </div>
              <input type="hidden" name="role" value="creator" />
              <div className="justify-center flex flex-col items-center gap-y-3">
                <button
                  type="submit"
                  className="bg-[#104b53] secondaryColor uppercase xl:w-[28rem] w-[20rem] p-2 rounded mt-10 text-sm"
                >
                  Create my Uncover Account
                </button>
                <p className="text-sm text-black">
                  Already have an account?
                  <a href="/creator-login">
                    <span className="text-[#104b53] font-bold ramblerSemibold ml-1">
                      Login here
                    </span>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreatorSignUp;
