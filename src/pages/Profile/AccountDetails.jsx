import React from "react";

const AccountDetails = () => {
  return (
    <div className="my-account-content account-details">
      <div className="wrap">
        <h4 className="fw-semibold mb-20">Information</h4>
        <form action="#" className="form-account-details">
          <div className="form-content">
              <fieldset>
                <input
                  type="text"
                  placeholder="Full Name"
                />
              </fieldset>
            <div className="cols">
              <fieldset>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue="onsus@support.com"
                />
              </fieldset>
              <fieldset>
                <input
                  type="number"
                  placeholder="Phone"
                  defaultValue={"08801234567"}
                />
              </fieldset>
            </div>
            <fieldset>
              <input
                type="text"
                placeholder="Address"
                defaultValue="Australia"
              />
            </fieldset>
          </div>
        </form>
      </div>
      <div className="wrap">
        <h4 className="fw-semibold mb-20">Change Password</h4>
        <form action="#" className="def form-reset-password">
          <fieldset>
            <input type="password" placeholder="Password*" required="" />
          </fieldset>
          <fieldset>
            <input type="password" placeholder="New Password*" required="" />
          </fieldset>
          <fieldset>
            <input
              type="password"
              placeholder="Confirm Password*"
              required=""
            />
          </fieldset>
          <div className="box-btn">
            <button type="submit" className="tf-btn btn-large">
              <span className="text-white">Update Account</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
