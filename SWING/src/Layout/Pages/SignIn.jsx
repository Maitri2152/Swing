import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../Firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.name ||
      !values.email ||
      !values.pass & (values.pass.length < 8)
    ) {
      setErrorMsg("Fill all fields correctly");
      setErrorMsg("Password must be of 8 character");
      return;
    }

    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/Login");
      })
      .then(async () => {
        setDoc(doc(db, "users", values.email), {
          savedShows: [],
        });
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden fixed sm:block w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 w-full h-screen">
          <div className=" w-full px-4 py-24 z-50 ">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320px] mx-auto py-16 flex flex-col">
                <h1 className="text-3xl font-bold text-center mb-3">Sign Up</h1>

                <input
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="string"
                  placeholder="UserName"
                  autoComplete="string"
                />
                <input
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                  }
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button
                  className=" bg-blue-600 py-3 my-6 rounded font-bold "
                  disabled={submitButtonDisabled}
                  onClick={handleSubmission}
                >
                  Sign Up
                </button>
                <h1 className="text-white text-sm">{errorMsg}</h1>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input
                      className="mr-2 mt-2 text-gray-200 hover:text-white"
                      type="checkbox"
                    />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "/Swing/SWING/src/Context/Authcontext";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { user, signUp } = UserAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signUp(email, password);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div className="w-full h-screen">
//         <img
//           className="hidden sm:block absolute w-full h-full object-cover"
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
//           alt="/"
//         />
//         <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
//         <div className="fixed w-full px-4 py-24 z-50">
//           <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
//             <div className="max-w-[320px] mx-auto py-16">
//               <h1 className="text-3xl font-bold">Sign Up</h1>
//               <form
//                 onSubmit={handleSubmit}
//                 className="w-full flex flex-col py-4"
//               >
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="p-3 my-2 bg-gray-700 rouded"
//                   type="email"
//                   placeholder="Email"
//                   autoComplete="email"
//                 />
//                 <input
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="p-3 my-2 bg-gray-700 rouded"
//                   type="password"
//                   placeholder="Password"
//                   autoComplete="current-password"
//                 />
//                 <button className="bg-red-600 py-3 my-6 rounded font-bold">
//                   Sign Up
//                 </button>
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                   <p>
//                     <input className="mr-2" type="checkbox" />
//                     Remember me
//                   </p>
//                   <p>Need Help?</p>
//                 </div>
//                 <p className="py-8">
//                   <span className="text-gray-600">
//                     Already subscribed to Netflix?
//                   </span>{" "}
//                   <Link to="/login">Sign In</Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
