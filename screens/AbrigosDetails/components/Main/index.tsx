import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function Main(props:any){
    return(
        <View>
             <Image source={require("../../../../assets/encontrarLar.png")}style={{width:415, height:150}}></Image>
                <View>
                    <TouchableOpacity onPress={()=>props.tela.navigate("Details")}>
                 <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",alignSelf:"center", marginTop:10}}>
                    <Image source={require("../../../../assets/casa_adocao_1.png" )}style={{width:70, height:40, marginTop:15}}/>
                    <View style={{alignItems:"flex-start"}}>
                        <Text style={{marginTop:10, marginLeft:25, fontSize:22}}>Abrigo Balaio de Gato</Text>
                        <Text style={{marginLeft:25,color:"silver", fontSize:16}}>Guaianases, São Paulo, SP</Text>
                    </View>
                        <AntDesign style={{alignSelf:"center",marginLeft:40}}>
                        <AntDesign name="right" size={25} color="blue"/>
                        </AntDesign>
                     </View>
                     </TouchableOpacity>

                <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",alignSelf:"center", marginTop:10}}>
                <Image source={require("../../../../assets/casa_adocao_1.png" )}style={{width:70, height:70}}/>
                <View style={{alignItems:"flex-start"}}>
                    <Text style={{marginTop:10, marginLeft:25, fontSize:22}}>Abrigo Balaio de Gato</Text>
                    <Text style={{marginLeft:25,color:"silver", fontSize:16}}>Guaianases, São Paulo, SP</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:40}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
         </View>
        </View>
    )
}