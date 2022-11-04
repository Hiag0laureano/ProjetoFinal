import { View,Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ipserver } from "../../../config/servidor";
import { MaterialIcons } from '@expo/vector-icons';

export default function Main(props:any){

    let dt = props.dados;

    console.log(`dentro da tela de perfil ${dt}`)


    const [cliente, setCliente] = useState({
        idCliente: "",
        nomeCliente:"" ,
        foto:"",
        tipo:"",
        logradouro:"",
        sexo: "",
        dataNascimento: "",
        email: "",
        telefoneCelular:"",
        telefoneResidencial:"",
        nomeUsuario:"" 
    })

    useEffect(()=>{
        fetch(`${ipserver}/cliente/listar/${dt}`)
        .then((response)=>response.json())
        .then((rs)=>setCliente(rs.output[0]))
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },)
    return(
        <View>
            <Image source={require("../../../../assets/Perfil.png")}style={{width:412, height:152}}></Image>
            <View style={{alignItems:"center",justifyContent:"center", marginTop:20}}>
                <Image source={{uri:`${cliente.foto}`}} style={{width:150, height:150,borderRadius:100}}/>
            </View>
            <View style={{alignItems:"center", marginTop:10}}>
                <Text style={{fontSize:30}}>{cliente.nomeCliente}</Text>
            </View>
            <View style={{padding:10}}>

            <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Usuario: {cliente.nomeUsuario}</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Data Nascimento: {cliente.dataNascimento}</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Endereco: {cliente.tipo} {cliente.logradouro}</Text>
                </View>

                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30, justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Email: {cliente.email}</Text>
                </View>

                <View style={{flexDirection:"row", justifyContent:"center"}}>
                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30,width:210 ,justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Telefone:{cliente.telefoneCelular}</Text>
                </View>
                <View style={{margin:10, backgroundColor:"#E9E9E9", height:30,width:150 ,justifyContent:"center", borderRadius:10}}>
                <Text style={{fontSize:17}}>Sexo: {cliente.sexo}</Text>
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

            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <MaterialIcons name="post-add" size={50} color="orange" style={{alignSelf:"center"}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>Faça sua publicão</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Compartilhe sua experiencia</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:58}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
           
            </View>
        </View>
    )
}