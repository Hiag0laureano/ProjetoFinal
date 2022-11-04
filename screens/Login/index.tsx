import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Styles";
import { Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ipserver } from "../config/servidor";

export default function Login({navigation}){
    
    const [Usuario,setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <ImageBackground style={{width:"100%", height:"100%"}} source={require("../../assets/backlogin4.png")}>
        <View style={styles.login}>
            
            <Image source={require("../../assets/NovoLogo.png")} style={{width:200,height:200, marginBottom:50}}/>
            
            <TextInput placeholder="Usuario" style={styles.caixa}value={Usuario}onChangeText={(value)=>setUsuario(value)}/>
            <TextInput placeholder="Senha" style={styles.caixa} secureTextEntry value={senha}onChangeText={(value)=>setSenha(value)}/>
            {/* Botão logar */}
            <TouchableOpacity onPress={()=>{
                if(Usuario=="" || senha == ""){
                    return Alert.alert("Erro","Você deve preencher todos os campos");
                    }
                    efetuarLogin(Usuario,senha).then((rs)=>{
                        if (rs.output=="Logado"){
                            Alert.alert("Logado")
                            console.log(`Tela Login ->${rs}`)
                            navigation.navigate("Home",{idUsuario:rs.payload});
                            setUsuario("");
                            setSenha("");
                        }
                        else{
                            Alert.alert(rs);
                            return;
                        }
                    })
                    .catch((error)=> console.error(`Erro ao executar -> ${error}`))
            }} style={styles.btnlogin}>
                <AntDesign name="login" size={20} color="white"/>
                <Text style={{color:"white"}}> Acessar</Text>
           </TouchableOpacity> 
            {/* Cadastrar */}

            <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")} style={styles.btncadastro}>
                <AntDesign name="save" size={20} color="white"/>
                <Text style={{color:"white"}}> Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

async function efetuarLogin(usuario:any, senha:any){
    let result ;
 
    await  fetch(`${ipserver}/usuario/login`,{
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
     .then((rs)=>{
         console.log(rs);
         // Alert.alert("Acesso","Você está logado")
         result = rs[0];
     })
     .catch((erro)=>console.error(`Erro na api -> ${erro}`));
     return result;
 }