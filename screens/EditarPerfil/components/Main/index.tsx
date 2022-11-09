import { useEffect, useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity} from "react-native";
import { ipserver } from "../../../config/servidor";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Main(props:any){

    let dt = props.dados;


    const [cliente, setCliente] = useState({ 
        
     })
     useEffect(()=>{
        fetch(`${ipserver}/cliente/listar/${dt}`)
        .then((response)=>response.json())
        .then((rs)=>{
            
            setCliente(rs.output[0]) 
           
            
        }
           
            )
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },)

    const [nomeCliente, setNomeCliente] = useState("");
    const [usuario, setUsuario] = useState("");
    const [dataNascimento, setdataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [tipo, setTipo] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    
    return(
        <View>
             <Image source={require("../../../../assets/EditarPerfil.png")}style={{width:"100%", height:152}}></Image>

             <View style={{ margin:10}}>

           
             <Text style={{marginTop:5, padding:"4%"}}>Nome:</Text>
            <TextInput
                placeholder="Nome Completo:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={nomeCliente}
                onChangeText={(value) => setNomeCliente(value)}
            />
           
            

           
             <Text style={{marginTop:5, padding:"4%"}}>Usuario:</Text>
            <TextInput
                placeholder="Nome do usuario:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={usuario}
                onChangeText={(value) => setUsuario(value)}
            />
         

            <View style={{flexDirection:"row"}}>

            <View style={{marginRight:"8%"}}>
             <Text style={{marginTop:"5%", padding:"4%"}}>Data de Nascimento:</Text>
            <TextInput
                placeholder="Data de Nascimento:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={dataNascimento}
                onChangeText={(value) => setdataNascimento(value)}
            />
            </View>

            <View style={{width:"50%"}}>
             <Text style={{marginTop:"5%", padding:"4%"}}>Telefone:</Text>
            <TextInput
                placeholder="Telefone:"
                style={{borderWidth:1,
                    marginTop:"5%",
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={telefone}
                onChangeText={(value) => setTelefone(value)}
            />
            </View>
            
            </View>

            <Text style={{marginTop:5, padding:"4%"}}>Email:</Text>
            <TextInput
                placeholder="Email:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={email}
                onChangeText={(value) => setEmail(value)}
            />

    <   View style={{flexDirection:"row"}}>

            <View style={{marginRight:"8%", width:"40%"}}>
            <Text style={{marginTop:"5%", padding:"4%"}}>Tipo:</Text>
                <TextInput
                placeholder="Tipo do endereço:"
                style={{borderWidth:1,
                borderColor:"silver",
                width:"100%",
                marginBottom:10,
                padding:10,
                backgroundColor:"white",
                borderRadius:10}}
                value={tipo}
                onChangeText={(value) => setTipo(value)}
                />
                </View>

            <View style={{width:"50%"}}>
            <Text style={{marginTop:"4%", padding:"4%"}}>Numero:</Text>
            <TextInput
                placeholder="Numero do local:"
                style={{borderWidth:1,
                // marginTop:"5%",
                borderColor:"silver",
                width:"100%",
                marginBottom:10,
                padding:10,
                backgroundColor:"white",
                borderRadius:10}}
                value={numero}
                onChangeText={(value) => setNumero(value)}
                />
                </View>

            </View>

            <Text style={{marginTop:5, padding:"4%"}}>Endereço:</Text>
            <TextInput
                placeholder="Nome do local:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={endereco}
                onChangeText={(value) => setEndereco(value)}
            />

            
            <Text style={{marginTop:5, padding:"4%"}}>Bairro:</Text>
            <TextInput
                placeholder="Nome do bairro:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={bairro}
                onChangeText={(value) => setBairro(value)}
            />

            <   View style={{flexDirection:"row"}}>

            <View style={{marginRight:"8%", width:"40%"}}>
            <Text style={{marginTop:"5%", padding:"4%"}}>Cidade:</Text>
                <TextInput
                placeholder="cidade:"
                style={{borderWidth:1,
                borderColor:"silver",
                width:"100%",
                marginBottom:10,
                padding:10,
                backgroundColor:"white",
                borderRadius:10}}
                value={cidade}
                onChangeText={(value) => setCidade(value)}
                />
                </View>

            <View style={{width:"50%"}}>
            <Text style={{marginTop:"4%", padding:"4%"}}>Estado:</Text>
            <TextInput
                placeholder="Estado:"
                style={{borderWidth:1,
                // marginTop:"5%",
                borderColor:"silver",
                width:"100%",
                marginBottom:10,
                padding:10,
                backgroundColor:"white",
                borderRadius:10}}
                value={estado}
                onChangeText={(value) => setEstado(value)}
                />
                </View>

               

            </View>

            <TouchableOpacity>
            <View style={{height:100, width:390, backgroundColor:"white",padding:15,borderRadius:20, flexDirection:"row",marginBottom:20, marginTop:10,alignSelf:"center"}}>
                <MaterialCommunityIcons name="check" size={50} color="orange" style={{padding:10}}/>
                <View style={{alignItems:"flex-start", alignSelf: "center"}}>
                    <Text style={{marginLeft:10, fontSize:22}}>Concluir alterações</Text>
                    <Text style={{marginLeft:30,color:"silver", fontSize:14}}>Conclua sua alterações</Text>
                </View>
            </View>
            </TouchableOpacity>
            
            
         
           
           
        
        </View>
        </View>
    )
}
