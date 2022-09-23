import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import CasasPage from "./components/Main";


const Stack = createNativeStackNavigator();

export default function Lares (){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Lares" component={LaresPet} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function LaresPet({navigation}){
    return(
        <View style={{flex:1}}>
                <CasasPage tela={navigation}/>
        </View>
    )
}