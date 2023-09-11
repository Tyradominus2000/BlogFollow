import { useEffect, useState } from "react";
import { UserContext } from "../../context/User.context";
import { GetUserToken } from "../../apis/users/getUser";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function User() {
      const response = await GetUserToken();
      if (response.message !== true) {
        setUser(null);
        console.log(response.message);
      } else {
        setUser(response.user);
      }
    }
    User();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
