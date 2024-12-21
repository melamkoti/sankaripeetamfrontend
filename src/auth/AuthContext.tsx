// import React, { createContext, useState, useEffect, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";

// interface User {
//   email: string;
//   name: string;
//   role: string; // Include role in the user type
// }
// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: User  | null;
//   login: (token: string, email: string, password: string) => void;
//   logout: () => void;
// }
// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<{ email: string; name: string;  } | null>(
//     null
//   );
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const email = localStorage.getItem('email');
//     const name = localStorage.getItem('name')
// const role = localStorage.getItem("role")

//     if (token && name && email && role) {
//       setIsAuthenticated(true);
//       setUser({ email, name, role });

//     }
//   }, []);

//   const login = (token: string, email: string, name: string, role: string ) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("email", email);
//     localStorage.setItem("name", name);
//      localStorage.setItem("role", role); // Save user role

//     setUser({ email, name, role});

//     setIsAuthenticated(true);
//     navigate("/donationpayment");
//   };
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     localStorage.removeItem("email")
//     setIsAuthenticated(false);
//     setUser(null)
//     navigate("/login");
//   };
//   return (
//     <AuthContext.Provider value={{ isAuthenticated,user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  name: string;
  role: string; // Include role in the user type
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, email: string, name: string, role: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Update type to include role
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");

    if (token && email && name && role) {
      setIsAuthenticated(true);
      setUser({ email, name, role }); // Set role in the user object
    }
  }, []);

  const login = (token: string, email: string, name: string, role: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("role", role); // Save user role in localStorage

    setUser({ email, name, role }); // Include role when setting user
    setIsAuthenticated(true);
    navigate("/donationpayment");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("role"); // Remove role from localStorage
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
