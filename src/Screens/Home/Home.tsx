import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {ScreenType} from '../../naviagtions/Routes';
import { MainStack } from '../../naviagtions/MainStack';

const Home = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<MainStack>>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Pressable
          onPress={() => navigation.navigate("SearchScreen")
          }>
          <Text style={{fontSize: 40}}>First Screen Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Home;
