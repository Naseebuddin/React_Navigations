import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import { ScreenType } from '../../naviagtions/Routes';

const Login = (): React.JSX.Element => {
    const navigation = useNavigation<NavigationProp<ScreenType>>();
    const route : any= useRoute();
    console.log(route?.params,'route');
    

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Pressable onPress={()=>navigation.goBack()}>
            <Text style={{fontSize: 40}}>
                GO BAck
            </Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Signup')}>
        <Text style={{fontSize: 40}}>Login</Text>
        </Pressable>
        <Text>{route?.params?.data}</Text>
        <Text>{route?.params?.age}</Text>
        <Text>{route?.params?.country}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Login;
