import {
    createContext,
    useContext,
    useState
} from "react";

import {
    getCurrentUser
} from "../utils/localStorage";

const AuthContext =
    createContext();

export function AuthProvider({
    children
}) {

    const [user, setUser] =
        useState(
            getCurrentUser()
        );

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(
        AuthContext
    );
}