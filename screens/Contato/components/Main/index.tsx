import { Image, ImageBackground, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

export default function Main(){
    return(
        
       
            <View>
                <Image source={require("../../../../assets/panelcontato2.png")}style={{width:415, height:150}}></Image>
                <View style={{padding:10}}>
                    <View style={{flex:1,padding:10,alignItems:"center"}}>
                
                <Text style={{fontSize:25, color:"#460c00"}}>Precisa de ajuda? Fale conosco</Text>
                <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <AntDesign name="instagram" size={40} color="#d15b28" style={{marginTop:20}}/>
                    <Text style={{marginTop:30, marginLeft:20, fontSize:20, color:"#460c00"}}>INSTAGRAM</Text>
                 </View>

                 <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <MaterialIcons name="email" size={40} color="#d15b28" style={{marginTop:20}} />
                    <Text style={{marginTop:30, marginLeft:20, fontSize:20, color:"#460c00"}}>EMAIL</Text>
                 </View>

                 <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <FontAwesome name="whatsapp" size={40} color="#d15b28" style={{marginTop:22}} />
                    <Text style={{marginTop:30, marginLeft:23, fontSize:20, color:"#460c00"}}>(11) 97064-4162</Text>
                 </View>
                 
                 <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <EvilIcons name="location" size={40} color="#d15b28" style={{marginTop:22}} />
                    <Text style={{marginTop:25, marginLeft:15, fontSize:20, color:"#460c00"}}>Senac Tatuapé - Cel.Luís Americano</Text>
                 </View>

                    </View>
                </View>
            </View>
     
    )
}