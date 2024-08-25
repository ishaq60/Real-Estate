import React from "react";
import UseAuth from "../../Component/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { updateCreateUser } = UseAuth();

  const handleUpdateUserData = (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = e.target.username.value;
    const photoUrl = e.target.photoUrl.value;

    console.log(name, photoUrl);

    updateCreateUser(name, photoUrl)
      .then(() => {
        toast.success("Successfully updated profile info");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to update profile info");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#A8D26D] to-[#007F5F]">
      <title>Update Profile</title>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-4/5 lg:w-1/3 rounded-lg mx-auto p-10 h-5/6">
          <h3 className="text-center font-bold text-2xl md:text-4xl mb-10 text-[#007F5F]">
            Update Profile Info
          </h3>
          <form onSubmit={handleUpdateUserData}>
            <label htmlFor="username" className="block mt-6">
              Name
            </label>
            <input
              className="block px-5 py-2 border-b-2 w-full mt-2"
              name="username"
              type="text"
              placeholder="Type name"
              required
            />

            <label htmlFor="photoUrl" className="block mt-6">
              Photo URL
            </label>
            <input
              className="block px-5 py-2 border-b-2 w-full mt-2"
              name="photoUrl"
              type="text"
              placeholder="Type photo URL link"
              required
            />

            <div className="flex mt-4 justify-center">
              <input
                type="submit"
                value="SAVE CHANGES"
                className="bg-gradient-to-r from-[#A8D26D] to-[#007F5F] w-3/4 py-2 rounded-xl font-bold text-white hover:bg-gradient-to-l"
              />
            </div>
          </form>
          <ToastContainer />
          <div className="flex flex-col items-center justify-center mt-6">
            <p className="mt-2">
              Don't want to update info?{" "}
              <span className="text-[#007F5F] hover:font-semibold cursor-pointer">
                {/* <Link to="/profile">Back to Profile</Link> */}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
