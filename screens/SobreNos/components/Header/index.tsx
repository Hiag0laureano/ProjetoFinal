import { Image, View } from "react-native";

export default function Header(){
    return(
        <View style={{flex:0.2,justifyContent:"center",alignItems:"center",backgroundColor:"#00BFFF",paddingTop:30 }}>
            <Image source={require("../../../../assets/logo2.png")} style={{width:200, height:100}}/>
         </View>
    )
}