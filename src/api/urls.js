// urls.js
import EndPoints from "./endpoints";
import {
  makeGetRequest,
  makePostRequest,
  makeCustomRequest,
  makePatchRequest,
  makeFromRequest,
  makePutRequest,
} from "./methods/makeRequest";

//// GoldSchema -----------------------------------

/////Pagination API
export const getPagination = (url) => makeGetRequest(url);

//Dashboard API
export const getDashboardCount = (data) =>
  makeGetRequest(EndPoints.adminDashboard, data);

export const getShopDashboardCount = (data) =>
  makeGetRequest(EndPoints.shopDashboard, data);

// Auth ---
export const login = (data) => makePostRequest(EndPoints.login, data);
export const register = (data) => makePostRequest(EndPoints.register, data);

/// Basic User Details ---
export const getBasicUserDetails = () =>
  makeGetRequest(EndPoints.basicUserDetails);

// product ---
export const getProductList = (data) =>
  makeGetRequest(EndPoints.productList, data);
export const getProductMeta = () => makeGetRequest(EndPoints.productMeta);
export const getProductdetails = (uuid) =>
  makeGetRequest(EndPoints.addProduct + uuid + "/meta/");
export const addProduct = (data) => makePostRequest(EndPoints.addProduct, data);
export const updateProductEdit = (id, data) =>
  makePatchRequest(EndPoints.addProduct + id + "/", data);
export const productImageUpload = (data) =>
  makeCustomRequest(EndPoints.productImage, "POST", data, {
    "Content-Type": "multipart/form-data",
  });

// scheme ---
export const getSchemeList = (data) =>
  makeGetRequest(EndPoints.schemeList, data);
export const getSchemeMeta = () => makeGetRequest(EndPoints.schemeMeta);
export const getSchemeDetails = (uuid) =>
  makeGetRequest(EndPoints.addScheme + uuid + "/meta/");
export const addScheme = (data) => makePostRequest(EndPoints.addScheme, data);
export const updateSchemeEdit = (id, data) =>
  makePatchRequest(EndPoints.addScheme + id + "/", data);

// shop ---
export const getShopList = (data) => makeGetRequest(EndPoints.shopList, data);
export const getShopMeta = () => makeGetRequest(EndPoints.shopMeta);
export const addShop = (data) => makePostRequest(EndPoints.addShop, data);
export const ShopDetails = (uuid) =>
  makeGetRequest(EndPoints.addShop + uuid + "/meta/");
export const updateShop = (uuid, data) =>
  makePatchRequest(`${EndPoints.addShop}${uuid}/`, data);

// Scheme Subscription ---
export const getSchemeSubscriptionList = (data) =>
  makeGetRequest(EndPoints.schemeSubscriptionList, data);
export const getSchemeSubscriptionMeta = () =>
  makeGetRequest(EndPoints.schemeSubscriptionMeta);
export const addSchemeSubscription = (data) =>
  makePostRequest(EndPoints.addSchemeSubscription, data);
export const SchemeSubscriptionDetails = (uuid) =>
  makeGetRequest(EndPoints.addSchemeSubscription + uuid + "/meta/");
export const updateSchemeSubscription = (uuid, data) =>
  makePatchRequest(`${EndPoints.addSchemeSubscription}${uuid}/`, data);

// Scheme Subscription ---
export const getShopSubscriptionList = (data) =>
  makeGetRequest(EndPoints.shopSubscriptionList, data);
export const getShopSubscriptionMeta = () =>
  makeGetRequest(EndPoints.shopSubscriptionMeta);
export const addShopSubscription = (data) =>
  makePostRequest(EndPoints.addShopSubscription, data);
export const ShopSubscriptionDetails = (uuid) =>
  makeGetRequest(EndPoints.addShopSubscription + uuid + "/meta/");
export const updateShopSubscription = (uuid, data) =>
  makePatchRequest(`${EndPoints.addShopSubscription}${uuid}/`, data);

//Customer
export const addCustomer = (data) =>
  makePostRequest(EndPoints.addCustomer, data);
export const getCustomerList = (data) =>
  makeGetRequest(EndPoints.customerList, data);
export const getCustomerMeta = () => makeGetRequest(EndPoints.customerMeta);
export const getCustomerDetails = (uuid) =>
  makeGetRequest(EndPoints.addCustomer + uuid + "/meta/");
export const updateCustomer = (uuid, data) =>
  makePatchRequest(`${EndPoints.addCustomer}${uuid}/`, data);
export const getCustomerSubscription = (uuid, data) =>
  makeGetRequest(EndPoints.customerSubscription + uuid + "/", data);
export const getCustomerSubscriptionMeta = (uuid) =>
  makeGetRequest(EndPoints.customerSubscription + uuid + "/table-meta/");
export const getCustomerPayment = (uuid, data) =>
  makeGetRequest(EndPoints.customerPayment + uuid + "/", data);
export const getCustomerPaymentMeta = (uuid) =>
  makeGetRequest(EndPoints.customerPayment + uuid + "/table-meta/");

/// Scheme Payment ---
export const addSchemePayment = (data) =>
  makePostRequest(EndPoints.addSchemePayment, data);
export const getSchemePaymentList = (data) =>
  makeGetRequest(EndPoints.schemePaymentList, data);
export const getSchemePaymentMeta = () =>
  makeGetRequest(EndPoints.schemePaymentMeta);
export const updateSchemePayment = (uuid, data) =>
  makePatchRequest(`${EndPoints.addSchemePayment}${uuid}/`, data);
export const SchemePaymentDetails = (uuid) =>
  makeGetRequest(EndPoints.addSchemePayment + uuid + "/meta/");

///Product Payment
export const addProductPayment = (data) =>
  makePostRequest(EndPoints.addProductPayment, data);
export const getProductPaymentList = (data) =>
  makeGetRequest(EndPoints.productPaymentList, data);
export const getProductPaymentMeta = () =>
  makeGetRequest(EndPoints.productPaymentMeta);
export const updateProductPayment = (uuid, data) =>
  makePatchRequest(`${EndPoints.addProductPayment}${uuid}/`, data);
export const ProductPaymentDetails = (uuid) =>
  makeGetRequest(EndPoints.addProductPayment + uuid + "/meta/");

// Invoice Details
export const getProductInvoiceDetails = (uuid) =>
  makeGetRequest(`${EndPoints.productInvoiceDetails}${uuid}/`);
export const getSchemeInvoiceDetails = (uuid) =>
  makeGetRequest(`${EndPoints.schemeInvoiceDetails}${uuid}/`);
export const getGoldRate = () => makeGetRequest(EndPoints.goldRate);

/// Logs ---
export const getLogList = (data) => makeGetRequest(EndPoints.logList, data);
export const getLogMeta = () => makeGetRequest(EndPoints.logMeta);

/// Change password
export const changePassword = (data) =>
  makePostRequest(EndPoints.changePasswordURL, data);

/// Change Phone number
export const changePhoneNumber = (data) =>
  makePostRequest(EndPoints.changePhoneURL, data);

// Schema status url
export const schemaStatusUpdate = (uuid, data) =>
  makeFromRequest(`${EndPoints.schemaStatusURL}${uuid}`, "POST", data);

// Get Schema status and document
export const getSchemaStatus = (uuid) =>
  makeGetRequest(`${EndPoints.getSchemaStatusURL}${uuid}`);
