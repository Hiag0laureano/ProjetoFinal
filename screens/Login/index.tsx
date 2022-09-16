import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Styles";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({navigation}){
    
    const [usuario,setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <ImageBackground style={{width:"100%", height:"100%"}} source={require("../../assets/backlogin2.png")}>
        <View style={styles.login}>
            
            <Image source={require("../../assets/logo.png")} style={{width:150,height:150, marginBottom:50}}/>
            
            <TextInput placeholder="Usuario" style={styles.caixa}value={usuario}onChangeText={(value)=>setUsuario(value)}/>
            <TextInput placeholder="Senha" style={styles.caixa} secureTextEntry value={senha}onChangeText={(value)=>setSenha(value)}/>
            {/* Botão logar */}
            <TouchableOpacity onPress={()=>{
                // efetuarLogin(usuario,senha);
                navigation.navigate("Home");
                setUsuario("");
                setSenha("");
            }} style={styles.btnlogin}>
                <AntDesign name="login" size={20} color="white"/>
                <Text style={{color:"white"}}>ACESSAR</Text>
            </TouchableOpacity>
            {/* Cadastrar */}

            <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")} style={styles.btncadastro}>
                <AntDesign name="save" size={20} color="white"/>
                <Text style={{color:"white"}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}