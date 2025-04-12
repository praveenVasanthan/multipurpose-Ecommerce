import React, { useState } from "react";

const ForgotPassword = () => {
  const [reset, setReset] = useState(false);
  const [verified, setVerified] = useState(false);
  const ResetPassword = (e) => {
    e.preventDefault()
    setVerified(true);
  };
  const VerifyPassword = (e) => {
    e.preventDefault()
    setReset(true);
  };
  return (
    <div
      className="modal modalCentered fade modal-log"
      id="forgotPassword"
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
            <h5 className="title fw-semibold text-center">Forgot Password</h5>
            {reset ? (
              <div className="text-center">
                <p>You would have recieved an e-mail with the reset link.</p>
                <p>Please check your inbox</p>
              </div>
            ) : (
              <form className="form-log">
                <div className="form-content">
                  {verified ? (
                    <>
                      <fieldset>
                        <label className="fw-semibold body-md-2">
                          Enter Password
                        </label>
                        <input type="email" placeholder="......" />
                      </fieldset>
                      <fieldset>
                        <label className="fw-semibold body-md-2">
                          Re-enter password
                        </label>
                        <input type="email" placeholder="......." />
                      </fieldset>
                    </>
                  ) : (
                    <fieldset>
                      <label className="fw-semibold body-md-2">
                        Please enter your email to get a link to reset password
                      </label>
                      <input type="email" placeholder="Enter email id" />
                    </fieldset>
                  )}
                </div>
                <button
                  onClick={verified ? (e)=>VerifyPassword(e) :(e)=>ResetPassword(e) }
                  className="tf-btn w-100 text-white"
                >
                  Reset Password
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
