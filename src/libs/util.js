const USER_NAME = 'user_name';
import cookie from './cookie'
export default{
    freshLogin(username){
        let option = {
            path: '/',
            expires:4
        }
        cookie.set(USER_NAME, username, option);
    },
    isLogin(){
        return cookie.get(USER_NAME) ? true : false;
    },
    getUserName(){
        return cookie.get(USER_NAME)
    },
    removeLogin(){
        cookie.remove(USER_NAME)
    }
    
}