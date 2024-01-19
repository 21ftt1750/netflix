import {makeObservable, observable, action, runInAction} from "mobx";
import Cookies from "js-cookie";
import { Cookie } from "next/font/google";

class authStore{
    isAuthenticated: boolean = false;
    authEmail?: string = "";
    authPassword?: string = "";
    constructor(){
        makeObservable(this, {
            isAuthenticated: observable,
            authEmail: observable,
            authPassword: observable,
            setAuthEmailPassword: action,
            handleSignIn: action,
        });

        this.isAuthenticated = Cookies.get("isAuthenticated") == "true";
        this.authEmail = Cookies.get("authEmail") || "";

    }
    
    setAuthEmailPassword = async (email: string, password: string) => {
        this.authEmail = email;
        this.authPassword = password;
       
    }

    handleSignIn = async () => {
        runInAction(() => {
            try {
                console.log(this.authEmail, this.authPassword)
              if (this.authEmail === 'muin@gmail.com' && this.authPassword === 'muin') {
                this.isAuthenticated = true;
                Cookies.set("isAuthenticated", "true");
                Cookies.set("authEmail", this.authEmail);

                console.log(this.isAuthenticated);
              } else {
                // Handle authentication failure (e.g., show an error message)
                console.log('Authentication failed');
              }
            } catch (error) {
              console.error(error);
            }
          });
        };
}

export default new authStore();