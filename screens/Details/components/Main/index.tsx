import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ipserver } from "../../../config/servidor";


export default function Main(props:any){


    const [larPet, setLarPet] = useState([{
        idLarPet:"",
        nomeLocal:"",
        idEndereco:"",
        idContato:"",
        descricao:"",
        foto:"",
        bairro:"",
        cidade:"",
        estado:""
    }])
    useEffect(()=>{
        fetch(`${ipserver}/larPet/listar`)
        .then((response)=>response.json())
        .then((rs)=>{
            console.log(rs.output);
            setLarPet(rs.output)})
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },[])

    return(
        <View>
             <Image source={require("../../../../assets/encontrarLar.png")}style={{width:415, height:150}}></Image>
                
                {larPet.map((item,ix)=>(

                
                
                 <View key={ix}>
                 <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",alignSelf:"center", marginTop:10, justifyContent:"space-between"}}>
                    <Image source={{uri:`${item.foto}`}} style={{width:70, height:40, marginTop:15}}/>
                    <View style={{alignItems:"flex-start"}}>
                        <Text style={{marginTop:10, marginLeft:25, fontSize:22}}>{item.nomeLocal}</Text>
                        <Text style={{marginLeft:25,color:"silver", fontSize:16}}>{item.bairro} - {item.cidade} - {item.estado}</Text>
                    </View>
                        <AntDesign style={{alignSelf:"center",marginLeft:40}}>
                        <AntDesign name="right" size={25} color="blue"/>
                        </AntDesign>
                     </View>
         </View>
         ))}
        </View>
    )
}