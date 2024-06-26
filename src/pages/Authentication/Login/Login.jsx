import { useFormik } from "formik";
import Section_container from "../../../components/Section_container/Section_container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";
import { UserContext } from "../../../Context/UserContext";
import { Helmet } from "react-helmet";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoWarning } from "react-icons/io5";

export default function Login() {
  let { setIsUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  // get Login
  async function getLogin(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signin`,
        values
      );
      // check if data success
      if (data.message === "success") {
        setIsUser(data.token);
        // save token in local storage to save it when reload page
        localStorage.setItem("userToken", data.token);
        navigate("/");
        setLoading(false);
        setMsg("");
      }
    } catch (error) {
      setMsg(error.response.data.message);
      setLoading(false);
    }
  }

  // validation form
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(5, "too short min is 5")
      .max(10, "too long max is 10")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password not valid it must start with capital character and only 10"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: getLogin,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <Section_container>
        <div className="h-fit">
          <div className="w-full md:w-1/2 mx-auto py-10  bg-white">
            <h1 className="text-teal-700 font-bold text-2xl mb-3 ml-1">
              Login Now
            </h1>
            <form className="bg-white" onSubmit={formik.handleSubmit}>
              {msg ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-2xl text-red-700">
                  <IoWarning />
                  <p> {msg} </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <MdOutlineAlternateEmail className="text-xl" />
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <IoWarning />
                  <p> {formik.errors.email} </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <RiLockPasswordFill className="text-xl" />
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="password"
                  placeholder="Password"
                  maxLength={10}
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <IoWarning />
                  <p> {formik.errors.password} </p>
                </div>
              ) : (
                ""
              )}

              <button
                type="submit"
                className={`block w-full bg-teal-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer`}
                disabled={!(formik.isValid && formik.dirty)}
              >
                {loading ? (
                  <Oval
                    visible={true}
                    height="25"
                    color="#8ae689"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="text-center mx-auto w-[50px]"
                  />
                ) : (
                  "Login"
                )}
              </button>
              <span
                onClick={() => navigate("/forgetPassword")}
                className="text-sm ml-2 hover:text-teal-400 cursor-pointer"
              >
                Forgot Password ?
              </span>
            </form>
          </div>
        </div>
      </Section_container>
    </>
  );
}
