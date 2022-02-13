import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthRoutes;
