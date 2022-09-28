import { Text, View, Image } from "react-native";

export default function Main(){
    return(
        <View style={{flex:1,backgroundColor:"silver",padding:10,}}>
            <View style={{backgroundColor:"white",height:"100%"}}> 
                <Text>
                <Text style={{color:"blue", fontSize: 27, textAlign: "center"}}>Somos a Dog Especial. O app </Text>
                <Text style={{color:"red", fontSize:32}}>mais</Text>
                <Text style={{color:"blue", fontSize: 27, textAlign: "center"}}> amado pelos pets !</Text>
                </Text>
            </View>
            <View style={{flex:1,backgroundColor:"silver",padding:10,}}>
            <Image source={require("../../../../assets/dog-rain.jpg" )}style={{width:340, height:100, alignContent:"center"}}/>
            </View >
        </View>
    )
} 
