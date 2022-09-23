import { Image, View } from "react-native";

export default function Header(){
    return(
        <View style={{height:"18%",justifyContent:"center",alignItems:"center",backgroundColor:"#8F7866",paddingTop:30 }}>
            <Image source={require("../../../../assets/logo.png")} style={{width:100, height:100}}/>
        </View>
    )
}