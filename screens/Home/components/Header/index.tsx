import { Image, View } from "react-native";

export default function Header(){
    return(
        <View style={{flex:1.5,justifyContent:"center",alignItems:"center",backgroundColor:"#007A84",paddingTop:30 }}>
            <Image source={require("../../../../assets/logo.png")} style={{width:100, height:100}}/>
        </View>
    )
}