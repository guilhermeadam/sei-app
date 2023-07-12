import { useState } from 'react';
import { Link } from 'expo-router';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Text } from '../../components/Text';

import {
  Container,
  Header,
  Welcome,
  Notification,
  NotificationOnOff,
  Modules,
  ModulesColor,
  ProcessContainer,
  Process
} from './styles';

import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { modules } from '../../assets/mocks/modules';
import { process } from '../../assets/mocks/process';

export default function Home() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const delay = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#fafafa'
    }}>
      <Container>

        <Header>

          <Welcome>
            <Text size={14} opacity={0.9}>Bem-vindo(a) ao</Text>
            <Text size={24} weight='700'>SEI
              <Text size={24}>APP</Text>
            </Text>
          </Welcome>

          <Link asChild href='../screens/Notification'>
            <Notification>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <NotificationOnOff />
            </Notification>
          </Link>

        </Header>

        <Text size={24} weight='600'>Módulos</Text>

        <View style={{ marginBottom: 12 }} />

        <View style={{ height: 288 }}>
          <FlatList
            data={modules}
            refreshing={isRefreshing}
            onRefresh={delay}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Modules disabled={item.isDisabled}>
                <Text size={20}>{item.name}</Text>
                <ModulesColor background={item.color}>
                  <Entypo name="chevron-right" size={24} color="#fff" />
                </ModulesColor>
              </Modules>
            )}
          />
        </View>

        <Text size={24} weight='600'>Processos</Text>

        <FlatList
          data={process}
          numColumns={2}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProcessContainer disabled={item.isDisabled}>
              <Process>
                <Text size={18}>{item.name}</Text>
                <AntDesign name={item.icon} size={24} color="#0a2947" />
              </Process>
            </ProcessContainer>
          )}
        />


      </Container>

    </SafeAreaView>
  );
}
