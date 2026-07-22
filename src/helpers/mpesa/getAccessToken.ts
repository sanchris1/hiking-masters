import axios from "axios";
import "dotenv/config";

export async function getAccessToken() {
  const url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth = Buffer.from(
    `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`,
  ).toString("base64");

  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const token = result.data.access_token;

    return token;
  } catch (error) {
    console.error(error);
  }
}
