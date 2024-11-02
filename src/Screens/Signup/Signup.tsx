import { NavigationProp, useNavigation } from '@react-navigation/native';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import { ScreenType } from '../../naviagtions/Routes';

const Signup = (): React.JSX.Element => {
    const navigation = useNavigation<NavigationProp<ScreenType>>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Pressable onPress={()=>navigation.goBack()}>
        <Text style={{fontSize: 40}}>Signup</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Signup;
