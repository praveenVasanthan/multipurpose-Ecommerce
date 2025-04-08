const EndPoints = {
  /// GoldSchema -------------------------------

  // login ---
  login: "access/login/",
  register: "access/register/",
  refreshTokenURL: "access/token/refresh/",

  /// Basic User Details ---

  basicUserDetails: "access/user-detail/",

  // product ---
  productList: "cms/product/list/",
  productMeta: "cms/product/list/table-meta/",
  addProduct: "cms/product/cud/",
  productImage: "cms/property/files/bulk-upload/",

  // scheme ---
  schemeList: "cms/scheme/list/",
  schemeMeta: "cms/scheme/list/table-meta/",
  addScheme: "cms/scheme/cud/",

  // shop ---
  shopList: "cms/shop/list/",
  shopMeta: "cms/shop/list/table-meta/",
  addShop: "cms/shop/cud/",

  // Scheme Subscription ---
  schemeSubscriptionList: "cms/scheme/subscription/list/",
  schemeSubscriptionMeta: "cms/scheme/subscription/list/table-meta/",
  addSchemeSubscription: "cms/scheme/subscription/cud/",

  // Scheme Subscription ---
  shopSubscriptionList: "cms/shop/subscription/list/",
  shopSubscriptionMeta: "cms/shop/subscription/list/table-meta/",
  addShopSubscription: "cms/shop/subscription/cud/",

  //Customer ---
  addCustomer: "cms/customer/cud/",
  customerList: "cms/customer/list/",
  customerMeta: "cms/customer/list/table-meta/",
  customerSubscription: "cms/customer/subscription/",
  customerPayment: "cms/customer/payment/",

  /// Scheme payment ---
  schemePaymentList: "cms/scheme/payment/list/",
  schemePaymentMeta: "cms/scheme/payment/list/table-meta/",
  addSchemePayment: "cms/scheme/payment/cud/",

  /// Product payment ---
  productPaymentList: "cms/product/payment/list/",
  productPaymentMeta: "cms/product/payment/list/table-meta/",
  addProductPayment: "cms/product/payment/cud/",

  // Invoice ---
  productInvoiceDetails: "cms/product/payment/detail/",
  schemeInvoiceDetails: "cms/scheme/payment/detail/",
  goldRate: "cms/gold/rate/",

  /// Logs ---
  logList: "cms/log/list/",
  logMeta: "cms/log/list/table-meta/",

  /// Dashboard ---
  adminDashboard: "cms/dashboard/",
  shopDashboard: "cms/shop/dashboard/",

  /// Change password
  changePasswordURL: "access/change-password/",

  /// Change Phone
  changePhoneURL: "access/change-phone/",

  // Schema status url
  schemaStatusURL: "web/scheme/update/",

  // Schema document and status details
  getSchemaStatusURL: "web/scheme/details-by-uuid/",
};

export default EndPoints;
