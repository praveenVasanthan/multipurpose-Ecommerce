import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="modal modalCentered fade modal-log"
        id="authModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span
              className="icon icon-close btn-hide-popup"
              data-bs-dismiss="modal"
            />
            <div className="modal-log-wrap list-file-delete">
              <h5 className="title fw-semibold">
                {login ? "Log In" : "Sign Up"}
              </h5>
              <form action="#" className="form-log">
                <div className="form-content">
                  <fieldset>
                    <label className="fw-semibold body-md-2">
                      Phone number <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" placeholder="Your phone number" />
                  </fieldset>
                  <fieldset>
                    <label className="fw-semibold body-md-2">
                      Password <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="password" placeholder="Enter your password" />
                  </fieldset>
                  {!login && (
                    <>
                      <fieldset>
                        <label className="fw-semibold body-md-2">
                          Confirm Password{" "}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="password"
                          placeholder="Confirm Your password"
                        />
                      </fieldset>
                    </>
                  )}
                  {login && (
                    <a
                      href="#forgotPassword"
                      className="link text-end body-text-3"
                      data-bs-toggle="modal"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <button type="submit" className="tf-btn w-100 text-white">
                  {login ? "Login" : "Sign Up"}
                </button>
                <p className="body-text-3 text-center">
                  {login
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <a
                    href="#"
                    className="text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setLogin(!login);
                    }}
                  >
                    {login ? "Register" : "Sign in"}
                  </a>
                </p>
              </form>
              <div className="orther-log text-center">
                <span className="br-line bg-gray-5" />
                <p className="caption text-main-2 ">Or login with</p>
              </div>
              <ul className="list-log">
                <li>
                  <a href="#" className="tf-btn btn-line w-100">
                    <i className="icon icon-facebook-2" />
                    <span className="body-md-2 fw-semibold">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="tf-btn btn-line w-100">
                    <i className="icon icon-google" />
                    <span className="body-md-2 fw-semibold">Google</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* logout modal */}
      <div
        className="modal modalCentered fade modal-log"
        id="logout"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <span
              className="icon icon-close btn-hide-popup"
              data-bs-dismiss="modal"
            />
            <div className="modal-log-wrap list-file-delete">
              <h5 className="title fw-semibold text-center">Confirm Logout</h5>
              <button
                onClick={() => navigate("/")}
                className="tf-btn w-100 text-white"
                data-bs-dismiss="modal"
              >
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
