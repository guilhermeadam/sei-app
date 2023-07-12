import {
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Text } from '../../components/Text';
import { Feather } from '@expo/vector-icons';
import  {
  Container,
  Form,
  Input,
  Button,
  InputContainer
} from './styles';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Login() {

  const [auth, setAuth] = useState(false);
  const [securyTextEntrySatus, setSecuryTextEntrySatus] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [handleLogin, setHandleLogin] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if(auth) {
      router.replace('../screens/Home');
    }
  }, []);

  const userLogin = () => {
    setHandleLogin(true);
    setTimeout(() => {
      router.replace('../screens/Home');
      setHandleLogin(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Text opacity={0.9}>Bem-vindo(a) ao</Text>
        <Text size={24} weight='700'>SEI
          <Text size={24}>APP</Text>
        </Text>

        <Form>
          <Text>E-mail</Text>
          <Input
            value={email}
            onChangeText={(prevEmail: string) => setEmail(prevEmail)}
            placeholder='Seu e-mail de acesso'
            keyboardType='email-address'
            autoFocus={false}
            autoCorrect={false}
            autoComplete='email' />
          <Text>Senha</Text>
          <InputContainer>
            <Input
              maxLength={8}
              value={password}
              onChangeText={(prevPassword: string) => setPassword(prevPassword)}
              secureTextEntry={securyTextEntrySatus}
              placeholder='Informe sua senha'
              keyboardType='number-pad'
            />
            <TouchableOpacity
              onPress={() => setSecuryTextEntrySatus(!securyTextEntrySatus)}
              style={{
                position: 'absolute',
                right: 0,
                padding: 16
              }}>
              <Feather
                name={securyTextEntrySatus ? 'eye-off' : 'eye'} size={24} color="#999" />
            </TouchableOpacity>
          </InputContainer>
          <Button
            onPress={userLogin}
            disabled={email.length === 0 || password.length === 0 ? true : false }
          >
            {handleLogin && <ActivityIndicator color='#fff' />}
            {!handleLogin && <Text weight='600' color='#fff'>Fazer Login</Text>}
          </Button>
        </Form>
      </Container>
    </SafeAreaView>
  );
}
