import { NativeBaseProvider, StatusBar } from "native-base";
import Login from "./src/screens/login/Login";
import { THEMES } from "./src/styles/style";

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Login />
    </NativeBaseProvider>
  );
}

export default App;
