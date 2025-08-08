// import signinimg from "../../assets/images/signinimg.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserModuleAPI } from "../../services/AppEndPoints";
const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
});

type FormFields = z.infer<typeof schema>;

function SignUpMain() {
  const navigate = useNavigate();
  const UserSignUpService = UserModuleAPI.RegisterEmailPost; // API endpoint for email signup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    try {
      const response = await axios.post(
        UserSignUpService,
        data
      );
      if (response.status === 201) {
        toast.success("Email saved successfully");
        navigate("/signup", { state: { email: data.email } }); // Navigate to the signup creation page
      } else if (response.status === 401) {
        toast.warn("Email already exits");
      } else if (response.status === 400) {
        toast.warn("Email is required");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
      <div
           className=" lg:mt-[110px] h-screen flex justify-center items-center bg-gradient-to-br from-[#f3d1c1] via-[#e9a17c] to-[#d6785d]"

        // style={{
        //   backgroundImage: `url(${signinimg})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        <div className="flex flex-col  lg:w-2/6 w-4/6 md:w-3/6 justify-center items-center bg-white opacity-90 gap-6 p-8 z-10 md:mr-32 m-6 rounded-xl ">
          <p className="text-3xl  font-semibold">Sign Up</p>

          <div>
            <form
              className=" flex flex-col md:gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="email"
                  className="text-lg font-normal text-[#666]"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter your Email"
                  id="email"
                  className="w-full border-2 outline-none border-slate-400 focus:border-[#FFA12B]  rounded-lg p-3 bg-transparent"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm absolute -bottom-5 left-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm md:text-xl">
                By Signing Up, you agree to the{" "}
                <a
                  href="#"
                  className="text-[#FFA12B] underline underline-offset-2"
                >
                  Terms of use
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#FFA12B] underline underline-offset-2"
                >
                  Privacy Policy
                </a>
              </p>
              <motion.button
                className="bg-[#8E512C] w-full rounded-3xl p-2 font-semibold text-white mt-2 "
                type="submit"
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Continue
              </motion.button>
            </form>
          </div>

          <p className="md:mt-4  text-sm md:text-xl">
            Already have an account?{" "}
            <NavLink
              to={"/login"}
              className="text-[#FFA12B] underline underline-offset-2 "
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
  );
}

export default SignUpMain;
