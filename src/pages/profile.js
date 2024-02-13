import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Personal from "../assets/personal.svg";
import DP from "../assets/dpdetails.svg";
import Bank from "../assets/bankdetails.svg";
import Bell from "../assets/profilebell.svg";
import Avatar from "../assets/profile-image.png";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../API";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { LoginAuth } from "../redex/action";
import axios from "axios";

const Profile = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const [img, SetImg] = useState(Avatar);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const CheckCookie = (value) => {
    if (!value.status) {
      removeCookie("token");
      Dispatch(LoginAuth(""));
      Navigate("/");
    }
  };

  const [editProfile, setEditProfile] = useState(false);
  const [profile, setProfile] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await UserProfile(cookies.token);
      CheckCookie(result);
      setProfile(await result.data[0]);
      Dispatch(LoginAuth({ token: cookies.token }));
      axios.get(`https://urlsdemo.xyz/tradeweb/api/treadUser/${result.data[0].ClientCode}`).then((res) => {
        SetImg(res.data.data.image_url)
      })
    };
    fetchData();
  }, []);
  const [profileImg, setProfileImg] = useState()
  const handleImgChange = (event) => {
    setProfileImg(event.target.files[0])
    const Rander = new FileReader();
    Rander.readAsDataURL(event.target.files[0]);
    Rander.onload = () => {
      SetImg(Rander.result);
      setProfileUpdate({ ...profileUpdate, img: Rander.result });
    };
    Rander.onerror = (error) => { };
  };
  const [profileUpdate, setProfileUpdate] = useState({});
  const saveChange = () => {
    const formData = new FormData()
    formData.append('profile_image', profileImg)
    formData.append('user_id', profile.ClientCode)
    axios.post('https://urlsdemo.xyz/tradeweb/api/tread-userdata', formData).then(reponce => {
      if (reponce.data.status) {
        alert('Profile Image updateed...')
      }
    })
  };
  return (
    <div className="profile-parent">
      <Header />
      {/* Welcome */}
      <div className="container report-top-container">
        <div className="row report-os-row">
          <div className="left col-6">
            <h2>My profile</h2>
          </div>
          <div className="right col-6">
            {editProfile ? (
              <label htmlFor="saveImg">

                <button
                  type="button" onClick={() => {
                    setEditProfile(false);
                    saveChange();
                  }} className="button1" >
                  Save
                </button>
              </label>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setEditProfile(true);
                }}
                className="button1"
              >
                Edit profile
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Welcome End*/}

      <div className="container profile-box-parent">
        <div className="row">
          <div className="col-lg-3 position-relative p-0">
            <div className="profile-items">
              <nav id="profilenav">
                <a className="nav-link" href="#personal-i">
                  <img alt=" " src={Personal} className="img-fluid" />
                  Personal
                </a>
                <a className="nav-link" href="#dp-details-i">
                  <img alt=" " src={DP} className="img-fluid" />
                  DP Details
                </a>
                <a className="nav-link" href="#bank-details-i">
                  <img alt=" " src={Bank} className="img-fluid" />
                  Bank Details
                </a>
                <a className="nav-link" href="#ac-agarwal-i">
                  <img alt=" " src={Bell} className="img-fluid" />
                  Ac Agarwal
                </a>
              </nav>
            </div>
          </div>
          <div
            className="col-lg-8"
            data-bs-spy="scroll"
            data-bs-target="#profilenav"
            data-bs-offset="0"
            tabIndex="0"
          >
            <div id="personal-i">
              <div className="profile-one-row per-h3">
                <h3>Personal Info</h3>
              </div>
              <form enctype='multiple/form-data' className="profile-one-row">
                <label>Avatar</label>
                <label htmlFor="image" id="img-label" style={{ display: "inline-block", cursor: "pointer" }}>
                  <input
                    type="file"
                    onChange={handleImgChange}
                    disabled={!editProfile}
                    name="image"
                    id="image"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  <img alt=" " className="avatar-image" src={img} />
                </label>
              </form>
              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="fullname">full name</label>
                    <input
                      type="text"
                      value={profile ? profile.ClientName : ""}
                      name="fullname"
                      placeholder="Aditya Agarwal"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="mobile">Mobile</label>
                    <input
                      type="number"
                      value={profile ? profile.Mobile : ""}
                      name="mobile"
                      placeholder="9348793487"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      value={profile ? profile.Email : ""}
                      name="email"
                      placeholder="gowsami@yahoo.in"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="address">address</label>
                    <input
                      type="text"
                      value={
                        profile ? `${profile.Address1} ${profile.Address2}` : ""
                      }
                      readOnly
                      name="address"
                      placeholder="S-5 Amba Bari, Jaipur, Rajasthan, India"
                    />
                  </div>
                </div>
              </div>
              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="pan">PAN</label>
                    <input
                      type="text"
                      value={profile ? profile.PanNo : ""}
                      name="pan"
                      placeholder="AUBPA6000F"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="dp-details-i">
              <div className="profile-one-row per-h3">
                <h3>Dp Details</h3>
              </div>
              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="DP-ID">DP ID</label>
                    <input
                      type="text"
                      value={profile ? profile.DPID : ""}
                      name="DP-ID"
                      placeholder="Aditya Agarwal"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="client-id">client ID</label>
                    <input
                      type="text"
                      value={profile ? profile.ClientCode : ""}
                      name="client-id"
                      placeholder="9348793487"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="demat">demat Account Number</label>
                    <input
                      type="number"
                      value={profile ? profile.DematAccountNo : ""}
                      name="demat"
                      placeholder="9348793487"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="dp-name">Dp Name</label>
                    <input
                      type="text"
                      value={"AC Agarwal Share Brokers Pvt. Ltd."}
                      name="dp-name"
                      placeholder="S-5 Amba Bari, Jaipur, Rajasthan, India"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="bank-details-i">
              <div className="profile-one-row per-h3">
                <h3>Bank Account Details</h3>
              </div>
              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="bank-name">Bank Name</label>
                    <input
                      type="text"
                      value={profile ? profile.BankName : ""}
                      name="bank-name"
                      placeholder="HDFC BANK LTD"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="acc-num">Account Number</label>
                    <input
                      type="number"
                      value={profile ? profile.BankAccountNo : ""}
                      name="acc-num"
                      placeholder="50100220715817"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="ifsc">IFSC</label>
                    <input
                      type="text"
                      value={profile ? profile.IFSC : ""}
                      name="ifsc"
                      placeholder="HDFC0004110"
                      readOnly
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="micr">MICR</label>
                    <input
                      type="number"
                      value={profile ? profile.MICR : ""}
                      name="micr"
                      placeholder="110240403"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="ac-agarwal-i">
              <div className="profile-one-row per-h3">
                <h3>AC Agarwal</h3>
              </div>
              <div className="profile-one-row">
                <div className="row">
                  <div className="col-lg-6">
                    <label>Customer Support</label>
                    <h4>
                      <a href="tel:+911414920999">(+91)141- 4920999</a>
                      <br />
                      <a href="tel:+911414049663">(+91)141- 4049663</a>
                    </h4>
                  </div>
                  <div className="col-lg-6">
                    <label>Email ID</label>
                    <h5>
                      <a href="mailto:customercare@acagarwal.com">
                        customercare@acagarwal.com
                      </a>
                      <br />
                      <a href="mailto:support@acagarwal.com">
                        support@acagarwal.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
