import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Text } from '../../components/Text';
import * as S from './styles';

import { resources } from '../../assets/mocks/resources';

import { Link, useNavigation } from 'expo-router';

export default function Faturamento() {
  const router = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>

      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={router.goBack}>
            <AntDesign  name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text size={24} weight='600'>Faturamento</Text>
          <View style={{ width: 24 }} />
        </S.Header>

        <S.Resources>
          <FlatList
            data={resources}
            renderItem={({ item: resource }) => (
              <Link href={resource.href} asChild>
                <S.Resource>
                  <AntDesign name={resource.icon} size={24} />
                  <Text size={18}>
                    {resource.name}
                  </Text>
                </S.Resource>
              </Link>
            )}
          />
        </S.Resources>


      </S.Container>



    </SafeAreaView>
  );
}
