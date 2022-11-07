import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { ipserver } from "../../../config/servidor";

export default function Main(){

    const [hallPet, setHallPet] = useState([{
       idHallPet:"",
       foto:"",
       nomePet:"",
       comentario:"",
    }])
    useEffect(()=>{
        fetch(`${ipserver}/hallPet/listar`)
        .then((response)=>response.json())
        .then((rs)=>{
            console.log(rs.output);
            setHallPet(rs.output)})
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },[])

   return( 
        <View>
            <Image source={require("../../../../assets/HallPet2.png")} style={{width:412, height:152}}></Image>
            
            {hallPet.map((item,ix)=>(

            <View key={ix} style={{margin:10, borderWidth:1,borderColor:"silver",borderRadius:10}}>

                <View style={{alignItems:"center"}}>
                <Text style={{marginTop:10, marginLeft:0, fontSize:22}}>{item.nomePet}</Text>
                </View>

                <View>
                <Image source={{uri:`${item.foto}`}} style={{width:390, height:300, marginTop:15, borderRadius:20}}/>
                </View>

                <Text style={{marginTop:10, marginLeft:0, fontSize:22}}>{item.comentario}</Text>
                
            </View>

            ))}
        </View>
   )
}