import { normalInstance, accessInstance, handleError } from "./base_url";

export const makeGetRequest = async (endpoint, params = {}, auth = true) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const formattedParams = {};
    Object.keys(params).forEach((key) => {
      const value = params[key];

      if (
        value !== null &&
        value !== "" &&
        (!Array.isArray(value) || value.length > 0)
      ) {
        formattedParams[key] = Array.isArray(value) ? value.join(",") : value;
      }
    });

    const { data } = await instance.get(endpoint, { params: formattedParams });

    return data.data;
  } catch (error) {
    handleError(error);
  }
};

export const makePostRequest = async (endpoint, body, auth = true) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const { data } = await instance.post(endpoint, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

export const makePutRequest = async (endpoint, body, auth = true) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const { data } = await instance.put(endpoint, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

export const makePatchRequest = async (endpoint, body, auth = true) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const { data } = await instance.patch(endpoint, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

export const makeDeleteRequest = async (endpoint, body, auth = true) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const { data } = await instance.delete(endpoint, body);
    return data.data;
  } catch (error) {
    handleError(error);
  }
};

export const makeCustomRequest = async (
  endpoint,
  method = "GET",
  body = {},
  headers = {},
  responseType = "json",
  auth = true
) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const config = {
      method: method,
      url: endpoint,
      headers: {
        ...headers,
      },
      responseType: responseType,
      ...(method !== "GET" && { data: body }),
    };

    const { data } = await instance(config);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const makeFromRequest = async (
  endpoint,
  method = "GET",
  formData = null,
  auth = true
) => {
  const instance = auth ? normalInstance : accessInstance;
  try {
    const config = {
      method: method,
      url: endpoint,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      responseType: "json",
    };

    const response = await instance(config);

    return response.data;
  } catch (error) {
    handleError(error);
  }
};
