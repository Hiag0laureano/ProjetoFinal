import { Image, Text, View,TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Main(props:any){
    return(
        <View style={{flex:5, padding:10, backgroundColor:"#E2E0E0"}}>
            <TouchableOpacity onPress={()=>props.tela.navigate("Details")}>               
            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10}}>
                <Image source={require("../../../../assets/iconHouse.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{marginTop:20, marginLeft:30, fontSize:18}}>UM LAR PARA PETS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:10}}>Veja os locais mais proximos {'\n'} para levar pet abandonado</Text>
                </View>
                <AntDesign style={{alignItems:"center",marginTop:30,marginLeft:80}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>

            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:20}}>
                <Image source={require("../../../../assets/iconDogCat.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{marginTop:20, marginLeft:30, fontSize:18}}>PETS PARA ADOÇÃO</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:10}}>Veja os caes disponiveis para adoção</Text>
                </View>
                <AntDesign style={{alignItems:"center",marginTop:30,marginLeft:70}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>

            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:20}}>
                <Image source={require("../../../../assets/hallPet.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{marginTop:20, marginLeft:30, fontSize:18}}>HALL PETS ADOTADOS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:10}}>Veja os pets que ja foram adotados</Text>
                </View>
                <AntDesign style={{alignItems:"center",marginTop:30,marginLeft:50}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>

            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:20}}>
                <Image source={require("../../../../assets/userDog.png" )}style={{width:70, height:80}}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{marginTop:20, marginLeft:30, fontSize:18}}>CONTATO</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:10}}>Veja os pets que ja foram adotados</Text>
                </View>
                <AntDesign style={{alignItems:"center",marginTop:30,marginLeft:80}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>

            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:10}}>
                <Image source={require("../../../../assets/sobreNos.png" )}style={{marginTop:10,width:70, height:60}}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{marginTop:20, marginLeft:30, fontSize:18}}>SOBRE NÓS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:10}}>Saiba mais sobre a nossa historia</Text>
                </View>
                <AntDesign style={{alignItems:"center",marginTop:30,marginLeft:80}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
        </View>
    )
}