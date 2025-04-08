import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [webName, setWebName] = useState("Mobile Shop");
  // const [transfer, setTransfer] = useState(null);
  // const [videoResponseData, setVideoResponseData] = useState();
  // const [sendId, setSendId] = useState("");
  // const [page, setPage] = useState();
  // const [userDetails, setUserDetails] = useState();
  // const [superAdmin, setSuperAdmin] = useState(
  //   localStorage.getItem("superadmin") || false
  // );
  // const [shopName, setShopName] = useState("");
  // const [isAdmin, setIsAdmin] = useState("");

  // useEffect(() => {
  //   const BasicUserDetails = async () => {
  //     const response = await getBasicUserDetails();
  //     setUserDetails(response.related_entity?.id);
  //     setShopName(response.related_entity?.identity);
  //     setIsAdmin(response.is_staff);
  //   };
  //   BasicUserDetails();
  // }, [userDetails, shopName]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = localStorage.getItem("superadmin");
  //     setSuperAdmin(result);
  //   };

  //   const handleTokenChange = () => fetchData();
  //   window.addEventListener("userChange", handleTokenChange);

  //   return () => window.removeEventListener("userChange", handleTokenChange);
  // }, []);

  return (
    <MyContext.Provider
      value={{
        webName,
        setWebName,
        // transfer,
        // setTransfer,
        // videoResponseData,
        // setVideoResponseData,
        // setSendId,
        // sendId,
        // setPage,
        // page,
        // superAdmin,
        // setSuperAdmin,
        // userDetails,
        // setUserDetails,
        // isAdmin,
        // shopName,
        // setShopName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
