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
import animatedLogo from "../../assets/logos/sign-in-logo.json";

// Icons
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontiso from "react-native-vector-icons/Fontisto";

// Interface
interface Props {
  navigation: any;
}

const SignIn: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err));
  };

  const handleForgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "Redefinir senha",
          "Enviamos um email para redefinição de senha"
        );
      })
      .catch((err) => Alert.alert(err));
  };

  return (
    <ScrollView contentContainerStyle={styles.signInContainer}>
      <View style={styles.logoContainer}>
        <LottieView
          style={styles.animatedLogo}
          source={animatedLogo}
          autoPlay
          loop
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Entrar!</Text>
        <Text style={styles.formDescription}>
          Por favor, faça login para continuar!
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

        <TouchableOpacity
          style={styles.formSubmitBtn}
          onPress={() => {
            handleSignIn();
          }}
        >
          <Text style={styles.formSubmitBtnText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.formOptions}>
          <TouchableOpacity
            style={styles.formOptionsBtn}
            onPress={() => {
              navigation.navigate("signUp");
            }}
          >
            <IconAnt name="adduser" style={styles.formIcon} />
            <Text style={styles.formOptionsText}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formOptionsBtn}
            onPress={() => {
              handleForgotPassword();
            }}
          >
            <IconFontiso name="email" style={styles.formIcon} />
            <Text style={styles.formOptionsText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
