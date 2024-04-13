import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass || values.pass.length < 8) {
      setErrorMsg("Email or password does not match. Please try again.");
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((userCredential) => {
        const user = userCredential.user;

        return setDoc(doc(db, "users", user.uid), {
          likedShows: [],
        });
      })
      .then(() => {
        setSubmitButtonDisabled(false);
        navigate("/Main");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="sm:block w-full h-full object-cover fixed"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 flex flex-col">
              <h1 className="text-3xl font-bold text-center">Sign In</h1>
              <input
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="Enter email address"
                type="email"
                className="p-3 my-2 bg-gray-700 rouded"
              />
              <input
                className="p-3 my-2 bg-gray-700 rouded"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
                placeholder="Enter Password"
                type="password"
              />
              <b className={errorMsg} />
              <button
                className=" bg-blue-600 py-3 my-6 rounded font-bold"
                disabled={submitButtonDisabled}
                onClick={handleSubmission}
              >
                Login
              </button>

              <h1 className="text-white text-sm">{errorMsg}</h1>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>{" "}
                <Link to="/SignIn">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "/Swing/SWING/src/Context/Authcontext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { user, logIn } = UserAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await logIn(email, password);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="w-full h-screen">
//       <img
//         className="hidden sm:block absolute w-full h-full object-cover"
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
//         alt="/"
//       />
//       <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
//       <div className="fixed w-full px-4 py-24 z-50">
//         <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
//           <div className="max-w-[320px] mx-auto py-16">
//             <h1 className="text-3xl font-bold">Sign In</h1>
//             {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
//             <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="p-3 my-2 bg-gray-700 rouded"
//                 type="email"
//                 placeholder="Email"
//                 autoComplete="email"
//               />
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="p-3 my-2 bg-gray-700 rouded"
//                 type="password"
//                 placeholder="Password"
//                 autoComplete="current-password"
//               />
//               <button className="bg-red-600 py-3 my-6 rounded font-bold">
//                 Sign In
//               </button>
//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <p>
//                   <input className="mr-2" type="checkbox" />
//                   Remember me
//                 </p>
//                 <p>Need Help?</p>
//               </div>
//               <p className="py-8">
//                 <span className="text-gray-600">New to Netflix?</span>{" "}
//                 <Link to="/signup">Sign Up</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
