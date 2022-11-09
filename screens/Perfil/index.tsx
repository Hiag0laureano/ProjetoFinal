import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import EditarPefil from "../EditarPerfil";
import PubliHall from "../PubliHall";
import Header from "./components/Header";
import Main from "./components/Main";


const Stack = createNativeStackNavigator();

let dt = "";

export default function Pefil ({route}){

const {idUsuario} = route.params

console.log(`Tela Perfil ${idUsuario}`)

dt = idUsuario;

    return(
        <NavigationContainer independent={true}>
             <Stack.Navigator>
                <Stack.Screen name="telaPerfil" component={telaPerfil} options={{headerShown:false}}/>
                <Stack.Screen name="PubliHall" component={PubliHall} options={{headerShown:false}}/>

                <Stack.Screen name="editarPefil" component={editarPefil} options={{headerShown:false}}/>
                <Stack.Screen name="Editar" component={EditarPefil} options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

function telaPerfil({navigation}){
    return(
    <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Main tela={navigation}  dados={dt}/>
            </ScrollView>
        </View>
    )
}

function editarPefil({navigation}){
    return(
    <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Main tela={navigation}  dados={dt}/>
            </ScrollView>
        </View>
    )
}