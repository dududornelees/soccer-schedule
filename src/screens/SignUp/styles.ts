import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: "#F3F3F7",
  },

  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  animatedLogo: {
    width: 390,
  },

  formContainer: {
    flex: 1,
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
