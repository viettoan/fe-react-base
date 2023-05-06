import {Cookies} from "react-cookie";

export const getHeaderWithAuthorizationBearerToken = () => {
    const cookies = new Cookies();
    const userToken = cookies.get('user_token') ?? '';

    return {
        Authorization: `Bearer ${userToken}`,
    }
}