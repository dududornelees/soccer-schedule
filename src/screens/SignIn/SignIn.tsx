import { View, Text, TouchableOpacity, TextInput } from "react-native";
import LottieView from "lottie-react-native";

// Styles
import { styles } from "./styles";

// Animations
import animatedLogo from "../../images/logos/sign-in-logo.json";

// Icons
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontiso from "react-native-vector-icons/Fontisto";

const SignIn: React.FC = () => {
  return (
    <View style={styles.signInContainer}>
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

        <TextInput style={styles.formInput} placeholder="Email:" />
        <TextInput style={styles.formInput} placeholder="Senha:" />

        <TouchableOpacity style={styles.formSubmitBtn}>
          <Text style={styles.formSubmitBtnText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.formOptions}>
          <TouchableOpacity style={styles.formOptionsBtn}>
            <IconAnt name="adduser" style={styles.formIcon} />
            <Text style={styles.formOptionsText}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.formOptionsBtn}>
            <IconFontiso name="email" style={styles.formIcon} />
            <Text style={styles.formOptionsText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
