import { NavigationContainer } from "@react-navigation/native";

// Pages
import Home from "../screens/Home/Home";
import AuthRoutes from "./Auth.routes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
