import BaseURL from "../utils/http";
import { toastMessage } from "../utils/toastMessage";

const getProfile = async () => {
    try {
        const res = await BaseURL.get('users/profile');
        return res.data
    } catch (error: any) {
        toastMessage(String(error?.response?.data.message || error?.message), 'error')
    }
}



export { getProfile }