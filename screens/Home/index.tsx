import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import Details from "../Details";
import SobreNos from "../SobreNos";
import Header from "./components/Header";
import Main from "./components/Main";
import Panel from "./components/Panel";

const Stack = createNativeStackNavigator();

export default function Home (){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}}/>
                <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>

                <Stack.Screen name="Sobre" component={Sobre} options={{headerShown:false}}/>
                <Stack.Screen name="SobreNos" component={SobreNos} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>

        
    )
}

function Inicio({navigation}){
    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Panel/>
                <Main tela={navigation}/>
            </ScrollView>
        </View>
    )
}


function Sobre({navigation}){
    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Panel/>
                <Main tela={navigation}/>
            </ScrollView>
        </View>
    )
}