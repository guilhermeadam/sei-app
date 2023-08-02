import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/Text';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

import * as S from './styles';

export default function DashboardFaturamento() {
  const router = useNavigation();

  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 5, earnings: 19000 },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <S.Container>

        <S.Header>
          <TouchableOpacity onPress={router.goBack}>
            <AntDesign  name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text size={20} weight='600'>Faturamento/Dashboard</Text>
          <View style={{ width: 20 }} />
        </S.Header>

        <S.Dashboards>

          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </S.Dashboards>

      </S.Container>

    </SafeAreaView>
  );
}
