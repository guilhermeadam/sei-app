import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/Text';
import {
  Container,
  Header
} from './styles';

import { useNavigation } from 'expo-router';

import { AntDesign } from '@expo/vector-icons';

export default function Notification() {

  const router = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <Container>
        <Header>
          <TouchableOpacity onPress={router.goBack}>
            <AntDesign  name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text size={24} weight='600'>Notificações</Text>
          <View style={{ width: 24 }} />
        </Header>
      </Container>
    </SafeAreaView>
  );
}
