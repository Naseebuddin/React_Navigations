import {SafeAreaView, Text, View} from 'react-native';
import Routes from './src/naviagtions/Routes';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
     <Routes/>
    </SafeAreaView>
  );
};
export default App;
