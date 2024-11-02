import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {ScreenType} from '../../naviagtions/Routes';

const chats = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<ScreenType>>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Chat</Text>
      </View>
    </SafeAreaView>
  );
};
export default chats;
