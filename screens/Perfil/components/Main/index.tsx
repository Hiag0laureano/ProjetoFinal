import { View,Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ipserver } from "../../../config/servidor";

export default function Main(){

    const [cliente, setCliente] = useState({
        idCliente:"",
        nomeCliente:"",
        idDadosPessoais:"",
        idEndereco:"",
        idContato:"",
        idUsuario:"",
        foto:""
    })

    useEffect(()=>{
        fetch(`${ipserver}/cliente/listar`)
        .then((response)=>response.json())
        .then((rs)=>setCliente(rs))
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },)
    return(
        <View>
            <Image source={require("../../../../assets/Perfil.png")}style={{width:412, height:152}}></Image>
            <View style={{alignItems:"center",justifyContent:"center", marginTop:20}}>
                <Image source={require("../../../../assets/Pessoa.jpg")} style={{width:150, height:150,borderRadius:100}}/>
            </View>
            <View style={{alignItems:"center", marginTop:10}}>
                <Text style={{fontSize:30}}>Edley Pessoa</Text>
            </View>
            <View style={{padding:10}}>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Idade: 20</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Endereco: Rua da Consolação</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Email: </Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"center"}}>
                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30,width:210 ,justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Telefone: (11)98987-4465</Text>
                </View>
                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30,width:150 ,justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Sexo: Masculino</Text>
                </View>
                </View>

                 
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <AntDesign name="setting" size={50} color="orange" style={{alignSelf:"center"}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>Editar Perfil</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Atualize as suas informações</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:58}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
           
            </View>
        </View>
    )
}