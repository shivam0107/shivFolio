import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { contactusEndpoint } from "../apis";

const {CONTACT_US_API} = contactusEndpoint;

export async function getInTouch(data) {

  console.log("data" , data);
  
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", CONTACT_US_API, {
       data
      });
      console.log("CONTACT_API API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("form submitted Successfully");
    //   navigate("/verify-email");
    } catch (error) {
      console.log("CONTACT API ERROR............", error);
      toast.error("Could Not Send Message");
    }
    toast.dismiss(toastId);

}