import { View, Image } from "react-native";

export default function Panel(){
    return(
        <View style={{flex:1}}>
             <Image source={require("../../../../assets/panel2.png")} style={{width:"100%", height:110}}/>
        </View>
    )
}