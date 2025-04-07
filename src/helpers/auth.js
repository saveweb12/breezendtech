import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'

export const getToken = () => Cookies.get('auth_token');

export const decodedToken = () => {
    const token = getToken();
    if (!token) {
        return null;
    }
    try {
        return jwtDecode(token)
    } catch (error) {
        console.error("Invalid Token:", error);
        return null;
    }
}

// get loggedin userName

export const getUsername = () => {
    const user = decodedToken();
    return user ? user.name : "Quest"
}