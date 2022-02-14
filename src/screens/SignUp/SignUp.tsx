import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import auth from "@react-native-firebase/auth";

// Styles
import { styles } from "./styles";

// Animations
import animatedLogo from "../../assets/logos/sign-up-logo.json";

// Icons
import IconAnt from "react-native-vector-icons/AntDesign";

// Interface
interface Props {
  navigation: any;
}

const SignUp: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNewAccount = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView style={styles.signUpContainer}>
      <View style={styles.logoContainer}>
        <LottieView
          style={styles.animatedLogo}
          source={animatedLogo}
          autoPlay
          loop
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Criar conta!</Text>
        <Text style={styles.formDescription}>
          Insira seus dados e crie uma conta!
        </Text>

        <TextInput
          style={styles.formInput}
          placeholder="Email:"
          defaultValue={email}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.formInput}
          placeholder="Senha:"
          defaultValue={password}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />

        <TouchableOpacity style={styles.formSubmitBtn}>
          <Text
            style={styles.formSubmitBtnText}
            onPress={() => {
              handleNewAccount();
            }}
          >
            Criar
          </Text>
        </TouchableOpacity>

        <View style={styles.formOptions}>
          <TouchableOpacity
            style={styles.formOptionsBtn}
            onPress={() => {
              navigation.navigate("signIn");
            }}
          >
            <IconAnt name="login" style={styles.formIcon} />
            <Text style={styles.formOptionsText}>Eu já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
