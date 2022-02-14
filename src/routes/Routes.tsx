import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

// Pages
import Home from "../screens/Home/Home";
import AuthRoutes from "./Auth.routes";

const Routes: React.FC = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <Home /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
