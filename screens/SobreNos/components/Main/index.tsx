import { Text, View, Image } from "react-native";

export default function Main(){
    return(
        <View style={{flex:2,backgroundColor:"silver",}}>
             <Image source={require("../../../../assets/panelSobre.png")}style={{width:415, height:150}}></Image>
            <View style={{backgroundColor:"white",height:"100%"}}> 
                <Text style={{color:"blue"}}>Ola</Text>
            </View>
        </View>
    )
}