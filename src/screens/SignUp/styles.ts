import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signUpContainer: {
    padding: 25,
    backgroundColor: "#F3F3F7",
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  animatedLogo: {
    width: 270,
  },

  formContainer: {
    justifyContent: "center",
    width: "100%",
  },

  formTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },

  formDescription: {
    fontSize: 16,
    marginBottom: 20,
  },

  formInput: {
    width: "100%",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },

  formSubmitBtn: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#349C7C",
    marginBottom: 15,
  },

  formSubmitBtnText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  formOptions: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  formOptionsBtn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
  },

  formIcon: {
    fontSize: 20,
    color: "#349C7C",
    marginRight: 5,
  },

  formOptionsText: {
    alignItems: "center",
    justifyContent: "center",
  },
});
