import { View, Text, TouchableOpacity, TextInput } from "react-native";
import LottieView from "lottie-react-native";

// Styles
import { styles } from "./styles";

// Animations
import animatedLogo from "../../images/logos/sign-up-logo.json";

// Icons
import IconAnt from "react-native-vector-icons/AntDesign";

// Interface
interface Props {
  navigation: any;
}

const SignUp: React.FC<Props> = ({ navigation }) => {
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
        <Text style={styles.formTitle}>Criar conta!</Text>
        <Text style={styles.formDescription}>
          Insira seus dados e crie uma conta!
        </Text>

        <TextInput style={styles.formInput} placeholder="Email:" />
        <TextInput style={styles.formInput} placeholder="Senha:" />

        <TouchableOpacity style={styles.formSubmitBtn}>
          <Text style={styles.formSubmitBtnText}>Criar</Text>
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
    </View>
  );
};

export default SignUp;
