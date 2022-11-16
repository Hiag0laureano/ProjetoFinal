import { AntDesign } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Text, Alert, ImageBackground } from "react-native";
import { styles } from "./Styles"
import { ipserver } from "../config/servidor";
import { useState } from "react";

export default function Cadastro() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
   


    return (
        <ImageBackground style={{width:"100%", height:"100%"}} source={require("../../assets/backlogin4.png")}>
        <View style={styles.cadastro}>

            <TextInput
                placeholder="Usuário"
                style={styles.caixa}
                value={usuario}
                onChangeText={(value) => setUsuario(value)}
            />


            <TextInput
                placeholder="Senha"
                style={styles.caixa}
                secureTextEntry
                value={senha}
                onChangeText={(value) => setSenha(value)}
            />

            <TouchableOpacity onPress={() =>{
                efetuarCadastro(usuario,senha)
            }} style={styles.btncadastro}>
                <AntDesign name="save" size={20} color="white" />
                <Text style={{color:"white"}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}


function efetuarCadastro(usuario:any,senha:any){
    
    if(usuario=="" ||
    senha==""  
    ) {
        return Alert.alert("Você deve preencher todos os campos");
    }
    fetch(`${ipserver}/usuario/cadastro`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeUsuario:usuario.toLowerCase().trim(),
            senha:senha
        })
    })
    .then((response)=>response.json())
    .then((rs)=>Alert.alert("Usuario cadastrado com sucesso"))
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
  
}