import * as SibApiV3Sdk from "@sendinblue/client";

const apiInstance = new SibApiV3Sdk.ContactsApi();

// Configure API key authorization

export async function registerUser(email: string) {
  apiInstance.setApiKey(
    SibApiV3Sdk.ContactsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
  );
  const createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = email;
  createContact.listIds = [8];

  try {
    const data = await apiInstance.createContact(createContact);
    return {
      success: true,
      message: "Successfully subscribed to newsletter",
      data,
    };
  } catch (error: any) {
    if (error.response?.text) {
      const parseError = JSON.parse(error.response.text);
      if (parseError.code === "duplicate_parameter") {
        return {
          success: false,
          message: "Email already subscribed",
        };
      }
    }
    throw error;
  }
}
