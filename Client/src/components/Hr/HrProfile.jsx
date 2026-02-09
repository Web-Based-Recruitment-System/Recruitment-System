import { useEffect, useState } from "react";
import {
  getHrDetails,
  uploadImage,
  upDateImage,
  removeImage,
} from "../../services/hr";
import ImageAlternate from "../../assets/images/ProfilePicAlternate.png";
import { ToastContainer, toast } from "react-toastify";
import "./HrProfile.css";

export const HrProfile = () => {
  const [hrDetails, setHrDetails] = useState({
    id: 0,
    qualification: "",
    status: true,
    imageURL: "",
    user: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phoneNumber: "",
      dob: "",
    },
  });

  const [image, setImage] = useState(null);

  const fetchData = async () => {
    try {
      const response = await getHrDetails();
      setHrDetails(response);
    } catch {
      console.error("Error fetching HR details");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uploadProfileImage = () => {
    uploadImage(image)
      .then(() => toast.success("Image uploaded successfully"))
      .catch(() => toast.error("Something went wrong"));
  };

  const updateProfileImage = () => {
    upDateImage(image)
      .then(() => toast.success("Image updated successfully"))
      .catch(() => toast.error("Something went wrong"));
  };

  const removeProfilePic = () => {
    removeImage()
      .then(() => toast.success("Image removed successfully"))
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <h3>HR Profile</h3>
          <span className={hrDetails.status ? "status active" : "status inactive"}>
            {hrDetails.status ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="profile-content">
          {/* LEFT DETAILS */}
          <div className="profile-details">
            <div className="detail-row">
              <span>Name</span>
              <p>
                {hrDetails.user.firstName} {hrDetails.user.lastName}
              </p>
            </div>

            <div className="detail-row">
              <span>Email</span>
              <p>{hrDetails.user.email}</p>
            </div>

            <div className="detail-row">
              <span>Qualification</span>
              <p>{hrDetails.qualification}</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="profile-image-section">
            <img
              src={
                hrDetails.imageURL === "deleted"
                  ? ImageAlternate
                  : hrDetails.imageURL
              }
              alt="Profile"
              className="profile-image"
            />

            <input
              type="file"
              className="form-control mt-3"
              onChange={(e) => setImage(e.target.files[0])}
            />

            {hrDetails.imageURL === "deleted" && image && (
              <button className="btn primary-btn" onClick={uploadProfileImage}>
                Upload Image
              </button>
            )}

            {hrDetails.imageURL !== "deleted" && (
              <>
                {image && (
                  <button className="btn primary-btn" onClick={updateProfileImage}>
                    Update Image
                  </button>
                )}
                <button className="btn danger-btn" onClick={removeProfilePic}>
                  Remove Image
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
