import { AntDesign } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Text, Alert, ImageBackground } from "react-native";
import { styles } from "./Styles"
import { ipserver } from "../config/servidor";
import { useState } from "react";

export default function Cadastro() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");



    return (
        <ImageBackground style={{width:"100%", height:"100%"}} source={require("../../assets/backlogin2.png")}>
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
            <TextInput
                placeholder="Nome Completo"
                style={styles.caixa}
                value={nomeCompleto}
                onChangeText={(value) => setNomeCompleto(value)}
            />
            <TextInput
                placeholder="CPF"
                style={styles.caixa}
                keyboardType="number-pad"
                value={cpf}
                onChangeText={(value) => setCPF(value)}
            />
            <TextInput
                placeholder="Email"
                style={styles.caixa}
                keyboardType="email-address"
                value={email}
                onChangeText={(value) => setEmail(value)} />
            

            <TextInput
                placeholder="Endereço"
                style={styles.caixa}
                value={endereco}
                onChangeText={(value) => setEndereco(value)} />
            

            <TouchableOpacity onPress={() =>{
                efetuarCadastro(usuario,senha,nomeCompleto,cpf,email,endereco)
            }} style={styles.btncadastro}>
                <AntDesign name="save" size={20} color="white" />
                <Text style={{color:"white"}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}


function efetuarCadastro(usuario:any,senha:any,nome:any, cpf:any, email:any,endereco:any){
    
    if(usuario=="" ||
    senha=="" || 
    nome == "" || 
    cpf =="" ||
    email == "" ||
    endereco=="") {
        return Alert.alert("Você deve preencher todos os campos");
    }
    fetch(`${ipserver}/usuarios/cadastro`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:usuario,
            senha:senha,
            nomecompleto:nome,
            cpf:cpf,
            email:email,
            endereco:endereco
        })
    })
    .then((response)=>response.json())
    .then((rs)=>console.log(rs))
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
  
}