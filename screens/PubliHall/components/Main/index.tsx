import { useEffect, useState } from "react";
import { View,Image, Text, TextInput, ImagePickerIOS, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { ipserver } from "../../../config/servidor";

export default function Main(){

    const [nomePet, setNomePet] = useState("");
    const [comentario, setComentario] = useState("");
    const [image, setImage] = useState("");


    useEffect(()=>{
        (async ()=>{
            if(Constants.platform?.ios){
                const {
                    status,
                } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== "granted"){
                    alert("Desculpe, mas você não tem acesso a camera")
                }
            }
        })();
    },[]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result. cancelled) {
            setImage(result.uri);
        }
    };
    

    return(
        <View>
            <Image source={require("../../../../assets/Publihall.png")} style={{width:412, height:152}}></Image>
            <View style={{alignItems:"center", margin:10}}>
            <TextInput
                placeholder="Nome do pet:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:300,
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={nomePet}
                onChangeText={(value) => setNomePet(value)}
            />

            <TextInput
                placeholder="Faça um comentario:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:300,
                    height:90,
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={comentario}
                onChangeText={(value) => setComentario(value)}
            />

    {image && (
    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
    )}

            <TouchableOpacity onPress={pickImage}>
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center",justifyContent:"space-between"}}>
                <MaterialCommunityIcons name="postage-stamp" size={50} color="orange" style={{padding:10}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:30, fontSize:22}}>Adicionar foto</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Adicione uma foto do seu pet</Text>
                </View>
                <AntDesign style={{alignSelf:"center",marginLeft:58}}>
                <AntDesign name="right" size={25} color="blue"/>
                </AntDesign>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={() =>{
                efetuarCadastro(nomePet,image,comentario)
            }} style={{flexDirection:"row",
            width:200,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#c90202",
            padding:10,
            borderRadius:10}}>
                <AntDesign name="save" size={20} color="white" />
                <Text style={{color:"white"}}>Publicar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

function efetuarCadastro(nomePet:any,image:any,comentario:any){
    if(nomePet=="" ||
    comentario == "" ||
    image=="" ) {
        return Alert.alert("Você deve preencher todos os campos");
    }
    else{
        Alert.alert("Publicado")
    }
    fetch(`${ipserver}/publihall/cadastro`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomePet:nomePet,
            foto:image,
            comentario:comentario
        })
    })
    .then((response)=>response.json())
    .then((rs)=>console.log(rs))
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
  
}