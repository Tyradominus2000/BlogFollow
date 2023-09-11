import { useContext, useEffect, useState } from "react";
import { SubscriptionContext } from "../../context/Subscription.context";
import { UserContext } from "../../context/User.context";
import { getFollow } from "../../apis/subscription/getFollow";

export default function SubscriptionProvider({ children }) {
  const [follow, setFollow] = useState(null);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user !== null) {
      async function follow() {
        setFollow(await getFollow(user.Id));
      }
      follow();
    } else {
      setFollow(null);
    }
  }, [user]);

  return (
    <SubscriptionContext.Provider value={{ follow, setFollow }}>
      {children}
    </SubscriptionContext.Provider>
  );
}
