import { Image, ImageBackground, Linking, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import * as Clipboard from 'expo-clipboard';
import React, { useState } from "react";


export default function Main(){

    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = async () => {
      await Clipboard.setStringAsync('11970644162');
    };
    
    return(
        
       
            <View>
                <Image source={require("../../../../assets/panelcontato2.png")}style={{width:415, height:150}}></Image>
                <View style={{padding:10}}>
                    <View style={{flex:1,padding:10,alignItems:"center"}}>
                
                <Text style={{fontSize:25, color:"#460c00"}}>Precisa de ajuda? Fale conosco</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/pet_especial/')}>
                <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <AntDesign name="instagram" size={40} color="#d15b28" style={{marginTop:20}}/>
                    <Text style={{marginTop:30, marginLeft:20, fontSize:20, color:"#460c00"}}>INSTAGRAM</Text>
                 </View>
                 </TouchableOpacity>

                 <TouchableOpacity  onPress={() => Linking.openURL('mailto:dogespecialapp@gmail.com?subject=SendMail&body=Description')}>
                 <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <MaterialIcons name="email" size={40} color="#d15b28" style={{marginTop:20}} />
                    <Text style={{marginTop:30, marginLeft:20, fontSize:20, color:"#460c00"}}>EMAIL</Text>
                 </View>
                 </TouchableOpacity>
                 
                
                 <TouchableOpacity  onPress={copyToClipboard}>
                 <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <FontAwesome name="whatsapp" size={40} color="#d15b28" style={{marginTop:22}} />
                    <Text style={{marginTop:30, marginLeft:23, fontSize:20, color:"#460c00"}}>(11) 97064-4162</Text>
                 </View>
                 </TouchableOpacity>
                 
                 <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Senac+Tatuap%C3%A9+-+Cel.+Lu%C3%ADs+Americano/@-23.5335085,-46.6241713,11z/data=!4m19!1m13!4m12!1m4!2m2!1d-46.3912692!2d-23.5303526!4e1!1m6!1m2!1s0x94ce5ec26cfdcfed:0x49e7eb66fd4f1f2!2ssenac+tatuape!2m2!1d-46.5749683!2d-23.5409203!3m4!1s0x94ce5ec26cfdcfed:0x49e7eb66fd4f1f2!8m2!3d-23.5409203!4d-46.5749683')}>
                 <View style={{backgroundColor:"white", height:100, width:400,borderRadius:20, padding:10,flexDirection:"row", marginTop:20}}>
                    <EvilIcons name="location" size={40} color="#d15b28" style={{marginTop:22}} />
                    <Text style={{marginTop:25, marginLeft:15, fontSize:20, color:"#460c00"}}>Senac Tatuapé - Cel.Luís Americano</Text>
                 </View>
                 </TouchableOpacity>

                    </View>
                </View>
            </View>
     
    )
}