import { View, Image } from "react-native";

export default function Panel(){
    return(
        <View style={{flex:2}}>
             <Image source={require("../../../../assets/panelHome.png")} style={{width:"100%", height:137}}/>
        </View>
    )
}