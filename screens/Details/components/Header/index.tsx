import { View,Image } from "react-native";

export default function Header(){
    return(
        <View style={{flex:0.3,justifyContent:"center",alignItems:"center",backgroundColor:"#62c2b7",paddingTop:30 }}>
         <Image source={require("../../../../assets/NovoLogo2.png")} style={{width:200, height:100}}/>
        </View>
    )
}