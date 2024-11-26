
import { createContext, useState, useContext, useEffect } from "react";

// Create a Context for Authentication
const AuthContext = createContext();

// AuthProvider Component to provide authentication context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if the user is already authenticated (for example, by checking localStorage or session)
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/check-auth", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                }
            } catch (err) {
                console.error("Failed to check authentication", err);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    // Login function
    const login = async (credentials) => {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            return data;
        } else {
            throw new Error("Login failed");
        }
    };

    // Register function
    const register = async (userData) => {
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (response.ok) {
            const data = await response.json();
            setUser(data.user);
            return data;
        } else {
            throw new Error("Registration failed");
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);
