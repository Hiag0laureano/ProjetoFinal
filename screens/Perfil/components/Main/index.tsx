import { View,Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Main(){
    return(
        <View>
            <Image source={require("../../../../assets/Perfil.png")}style={{width:412, height:152}}></Image>
            <View style={{alignItems:"center",justifyContent:"center", marginTop:20}}>
                <Image source={require("../../../../assets/Pessoa.jpg")} style={{width:150, height:150,borderRadius:100}}/>
            </View>
            <View style={{alignItems:"center", marginTop:10}}>
                <Text style={{fontSize:30}}>Edley Pessoa</Text>
            </View>
            <View style={{padding:10}}>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Idade: 20</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Endereco: Rua da Consolação</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Email: </Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"center"}}>
                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30,width:210 ,justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Telefone: (11)98987-4465</Text>
                </View>
                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30,width:150 ,justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Sexo: Masculino</Text>
                </View>
                </View>

                <View style={{margin:10, flexDirection:"row"}}>
                <AntDesign name="setting" size={25} color="orange"/>
                <Text>Editar Perfil</Text>
                </View>
            </View>
        </View>
    )
}