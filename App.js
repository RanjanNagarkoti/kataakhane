import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme/";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";

import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCoM3q-kcHljv5S4Ijl5zd9MiuP828SB4E",
  authDomain: "katakhane-586d9.firebaseapp.com",
  projectId: "katakhane-586d9",
  storageBucket: "katakhane-586d9.appspot.com",
  messagingSenderId: "13272192672",
  appId: "1:13272192672:web:e5a26ce6caf8a22aac9bc5",
};

initializeApp(firebaseConfig);

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  // Prevent rendering until the font has loaded
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
