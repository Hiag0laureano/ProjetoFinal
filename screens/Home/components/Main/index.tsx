import { Image, Text, View,TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Main(props:any){
    return(
        <View style={{flex:2, padding:10, backgroundColor:"#E2E0E0"}}>
            <TouchableOpacity onPress={()=>props.tela.navigate("Details")}>               
            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:10}}>
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

            <View style={{height:100, width:390, backgroundColor:"white",padding:10,borderRadius:20, flexDirection:"row",marginBottom:10}}>
                <Image source={require("../../../../assets/iconHouse.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{marginTop:20, marginLeft:30, fontSize:18}}>UM LAR PARA PETS</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:10}}>Veja os locais mais proximos {'\n'} para levar pet abandonado</Text>
                </View>
                <AntDesign style={{alignItems:"center",marginTop:30,marginLeft:80}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
        </View>
    )
}