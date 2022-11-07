import { Image, Text, View,TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Main(props:any){

    let dt = props.dados;

    console.log(`dados do usuario ${dt}`)

    return(
        <View style={{flex:5, padding:10, backgroundColor:"#E2E0E0"}}>
            <TouchableOpacity onPress={()=>props.tela.navigate("Details")}>               
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <Image source={require("../../../../assets/iconHouse.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>UM LAR PARA PETS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Veja os locais mais proximos {'\n'} para levar pet abandonado</Text>
                </View>
                <AntDesign style={{alignSelf:"center", marginLeft:50}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <Image source={require("../../../../assets/iconDogCat.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>PETS PARA ADOÇÃO</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Veja os animais disponiveis{'\n'}para adoção</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:36}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>

            <TouchableOpacity onPress={()=>props.tela.navigate("HallPet")}> 
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <Image source={require("../../../../assets/hallPet.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>HALL PETS ADOTADOS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Veja os pets que ja foram adotados</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:10}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.tela.navigate("Perfil",{idUsuario:dt})}>   
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <Image source={require("../../../../assets/sobreNos.png" )}style={{marginTop:10,width:70, height:60}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>PERFIL</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Atualize as suas informações</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:58}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>props.tela.navigate("Contato")}>   
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <Image source={require("../../../../assets/userDog.png" )}style={{width:70, height:80}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>CONTATO</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Nossas redes sociais e localização</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:14}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={()=>props.tela.navigate("SobreNos")}>   
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <Image source={require("../../../../assets/sobreNos.png" )}style={{marginTop:10,width:70, height:60}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>SOBRE NÓS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Saiba mais sobre a nossa história</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:25}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>
        </View>
    )
}