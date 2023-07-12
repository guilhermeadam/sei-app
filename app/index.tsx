
import Home from './screens/Home';
import { useFonts } from 'expo-font';
import Login from './screens/Login';

export default function Page() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./assets/fonts/GeneralSans-Bold.otf'),
  });

  if(!isFontsLoaded) {
    return null;
  }

  return (
    <Login />
  );
}
