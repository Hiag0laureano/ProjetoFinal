import { View, Image } from "react-native";

export default function Panel(){
    return(
        <View style={{height:"30%",}}>
             <Image source={require("../../../../assets/panel.jpg")} style={{width:"100%", height:90}}/>
        </View>
    )
}