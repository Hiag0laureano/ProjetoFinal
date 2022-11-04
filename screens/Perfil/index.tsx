import { ScrollView, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";


let dt = "";

export default function Pefil ({route}){

const {idUsuario} = route.params

console.log(`Tela Perfil ${idUsuario}`)

dt = idUsuario;

    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Main dados={dt}/>
            </ScrollView>
        </View>
    )
}