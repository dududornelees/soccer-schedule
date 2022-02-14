import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";

// Styles
import { styles } from "./styles";

const Home: React.FC = () => {
  const handleSignOut = () => {
    auth().signOut();
  };

  return (
    <View>
      <Text>Home!</Text>
      <Button
        title="Sair"
        onPress={() => {
          handleSignOut();
        }}
      ></Button>
    </View>
  );
};

export default Home;
