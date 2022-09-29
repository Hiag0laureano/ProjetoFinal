import { View, Image } from "react-native";

export default function Panel(){
    return(
        <View style={{flex:1}}>
             <Image source={require("../../../../assets/Panel.png")} style={{width:"100%", height:160}}/>
        </View>
    )
}