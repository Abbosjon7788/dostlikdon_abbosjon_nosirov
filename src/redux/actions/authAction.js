import axios from 'axios';
import {API_PATH} from "../../tools/constants";

export function loginUser(data) {
	axios.post(API_PATH + "auth/login", data)
};	