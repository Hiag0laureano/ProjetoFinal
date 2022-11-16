import { useEffect, useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity, Alert} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { ipserver } from "../../../config/servidor";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

let nc = "";
let us = "";
let CPF = "";
let dn = "";
let sx = "";
let tl = "";
let em = "";
let tp = "";
let nm = "";
let en = "";
let CEP = "";
let cmp = "";
let br = "";
let cd = "";
let es = "";
let tlR = "";
let idD = "";
let idC = "";
let idU = "";
let idE = "";
let idCT = "";

let dt = 0

export default function Main(props:any){

    dt = props.dados;

    const [cd, setCD] = useState("atualizar");


    const [cliente, setCliente] = useState({ 
        
     })
     

    const [nomeCliente, setNomeCliente] = useState(nc);
    const [usuario, setUsuario] = useState(us);
    const [cpf, setCPF] = useState(CPF);
    const [dataNascimento, setdataNascimento] = useState(dn);
    const [sexo, setSexo] = useState(sx);
    const [telefone, setTelefone] = useState(tl);
    const [email, setEmail] = useState(em);
    const [tipo, setTipo] = useState(tp);
    const [numero, setNumero] = useState(nm);
    const [cep, setCep] = useState(CEP);
    const [complemento, setComplemento] = useState(cmp);
    const [endereco, setEndereco] = useState(en);
    const [bairro, setBairro] = useState(br);
    const [cidade, setCidade] = useState(cd);
    const [estado, setEstado] = useState(es);

    useEffect(()=>{
        fetch(`${ipserver}/editar/listar/${dt}`)
        .then((response)=>response.json())
        .then((rs)=>{
            
            setCliente(rs.output[0]) 
            idC=rs.output[0].idCliente;
            nc=rs.output[0].nomeCliente;
            idE=rs.output[0].idEndereco;
            tp=rs.output[0].tipo;
            nm=rs.output[0].numero;
            en=rs.output[0].logradouro;
            CEP=rs.output[0].cep;
            cmp=rs.output[0].complemento;
            br=rs.output[0].bairro;
            cd=rs.output[0].cidade;
            es=rs.output[0].estado;
            idD=rs.output[0].idDadosPessoais;
            CPF=rs.output[0].cpf;
            dn=rs.output[0].dataNascimento;
            sx=rs.output[0].sexo;
            idCT=rs.output[0].idContato;
            tl=rs.output[0].telefoneCelular;
            tlR=rs.output[0].telefoneResidencial;
            em=rs.output[0].email;
            idU=rs.output[0].idUsuario;
            us=rs.output[0].nomeUsuario;   
        }
           
            )
        .catch((erro)=>console.error(`Erro ao tentar conectar na api -> ${erro}`))
    },[])
    
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

            <Text style={{marginTop:5, padding:"4%"}}>CPF:</Text>
            <TextInput
                placeholder="CPF:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={cpf}
                onChangeText={(value) => setCPF(value)}
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
            <Text style={{marginTop:"5%", padding:"4%"}}>Sexo:</Text>
              <Picker  mode="dropdown"
              selectedValue={sexo}
              onValueChange={setSexo}
              style={{}}>
                <Picker.Item label="Sexo" value="Sexo" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Femino" value="Feminino" />
                </Picker>
            </View>
            
            </View>
            
          
             <Text style={{ padding:"4%"}}>Telefone:</Text>
            <TextInput
                placeholder="Telefone:"
                style={{borderWidth:1,
                    borderColor:"silver",
                    width:"100%",
                    marginBottom:10,
                    padding:10,
                    backgroundColor:"white",
                    borderRadius:10}}
                value={telefone}
                onChangeText={(value) => setTelefone(value)}
            />
          

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
              <Picker  mode="dropdown"
              selectedValue={tipo}
              onValueChange={setTipo}
              style={{}}>
                <Picker.Item label="Tipo" value="Tipo" />
                <Picker.Item label="Avenida" value="Avenida" />
                <Picker.Item label="Rua" value="Rua" />
                <Picker.Item label="Estrada" value="Estrada" />
                <Picker.Item label="Praça" value="Praça" />
                <Picker.Item label="Alameda" value="Alameda" />
                </Picker>
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
            
             <   View style={{flexDirection:"row"}}>

            <View style={{marginRight:"8%", width:"40%"}}>
                <View>
           <Text style={{marginTop:"4%", padding:"4%"}}>CEP:</Text>
            <TextInput
                placeholder="CEP:"
                style={{borderWidth:1,
                // marginTop:"5%",
                borderColor:"silver",
                width:"100%",
                marginBottom:10,
                padding:10,
                backgroundColor:"white",
                borderRadius:10}}
                value={cep}
                onChangeText={(value) => setCep(value)}
                />
                </View>
            </View>

            <View style={{width:"50%"}}>
            <Text style={{marginTop:"4%", padding:"4%"}}>Complemento:</Text>
            <TextInput
                placeholder="Complemento:"
                style={{borderWidth:1,
                // marginTop:"5%",
                borderColor:"silver",
                width:"100%",
                marginBottom:10,
                padding:10,
                backgroundColor:"white",
                borderRadius:10}}
                value={complemento}
                onChangeText={(value) => setComplemento(value)}
                />
                </View>

            </View>

            
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
                
             <View style={{marginRight:"8%", width:"40%"}}>
            <Text style={{marginTop:"5%", padding:"4%"}}>Estado:</Text>
              <Picker  mode="dropdown"
              selectedValue={estado}
              onValueChange={setEstado}
              style={{}}>
                <Picker.Item label="Estado" value="Tipo" />
                <Picker.Item label="AC" value="AC" />
                <Picker.Item label="AL" value="AL" />
                <Picker.Item label="AP" value="AP" />
                <Picker.Item label="AM" value="AM" />
                <Picker.Item label="BA" value="BA" />
                <Picker.Item label="CE" value="CE" />
                <Picker.Item label="DF" value="DF" />
                <Picker.Item label="ES" value="ES" />
                <Picker.Item label="GO" value="GO" />
                <Picker.Item label="MA" value="MA" />
                <Picker.Item label="MT" value="MT" />
                <Picker.Item label="MS" value="MS" />
                <Picker.Item label="MG" value="MG" />
                <Picker.Item label="PA" value="PA" />
                <Picker.Item label="PB" value="PB" />
                <Picker.Item label="PE" value="PE" />
                <Picker.Item label="PI" value="PI" />
                <Picker.Item label="PR" value="PR" />
                <Picker.Item label="RJ" value="RJ" />
                <Picker.Item label="RN" value="RN" />
                <Picker.Item label="RO" value="RO" />
                <Picker.Item label="RR" value="RR" />
                <Picker.Item label="RS" value="RS" />
                <Picker.Item label="SC" value="SC" />
                <Picker.Item label="SE" value="SE" />
                <Picker.Item label="SP" value="SP" />
                <Picker.Item label="TO" value="TO" />
                </Picker>
            </View>

               

            </View>

            <TouchableOpacity  onPress={() =>{if(cd == "atualizar"){
                efetuarAtualizacao(nomeCliente,usuario,cpf,dataNascimento,sexo,telefone,email,tipo,numero,cep,complemento,endereco,bairro,cidade, estado)
            }
            else{
                efetuarCadastro(nomeCliente,usuario,cpf,dataNascimento,sexo,telefone,email,tipo,numero,cep,complemento,endereco,bairro,cidade, estado)
            }
            }} >
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

function efetuarAtualizacao(nomeCliente:any,usuario:any,cpf:any,dataNascimento:any,sexo:any,telefone:any, email:any,tipo:any,
    numero:any,cep:any,complemento:any,endereco:any,bairro:any,cidade:any, estado:any){
    
    if(nomeCliente=="" || 
    usuario=="" ||
    cpf==""||
    dataNascimento==""||
    sexo==""||
    telefone==""||
    email == "" ||
    tipo==""||
    numero==""||
    cep==""||
    complemento==""||
    endereco==""||
    bairro==""||
    cidade=="" ||
    estado=="" ) {
        return Alert.alert("Você deve preencher todos os campos");
    }
    console.log(`Id do usuario -> ${dt}`)

   


    fetch(`${ipserver}/perfil/atualizar/${dt}`,{
        method:"PUT",
        headers:{
            "accept":"application/json",
            "content-type":"application/json",
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXN1YXJpbyI6Imd1aWxoZXJtZSIsImlhdCI6MTY2ODU5NzE3MywiZXhwIjoxNjY4NzY5OTczfQ.67a2Dlj_Mb48ecvj8Mv3eI_ofL2TGqBlLwucJ0E7YME"
        },
        body:JSON.stringify({
            idCliente:idC,
            nomeCliente:nomeCliente,
            idEndereco:idE,
            tipo:tipo,
            logradouro:endereco,
            numero:numero,
            complemento:complemento,
            cep:cep,
            bairro:bairro,
            cidade:cidade,
            estado:estado,
            idDadosPessoais:idD,
            cpf:cpf,
            sexo:sexo,
            dataNascimento:dataNascimento,
            idContato:idCT,
            email:email,
            telefoneCelular:telefone,
            telefoneResidencial:tlR,
            idUsuario:idU,
            nomeUsuario:usuario,
        })
    })
    .then((response)=>response.json())
    .then((rs)=>Alert.alert("Dados Atualizados"))
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
  
}

function efetuarCadastro(nomeCliente:any,usuario:any,cpf:any,dataNascimento:any,sexo:any,telefone:any, email:any,tipo:any,
    numero:any,cep:any,complemento:any,endereco:any,bairro:any,cidade:any, estado:any){
    
    if(nomeCliente=="" || 
    usuario=="" ||
    cpf==""||
    dataNascimento==""||
    sexo==""||
    telefone==""||
    email == "" ||
    tipo==""||
    numero==""||
    cep==""||
    complemento==""||
    endereco==""||
    bairro==""||
    cidade=="" ||
    estado=="" ) {
        return Alert.alert("Você deve preencher todos os campos");
    }
    console.log(`Id do usuario -> ${dt}`)

   


    fetch(`${ipserver}/perfil/cadastro/${dt}`,{
        method:"PUT",
        headers:{
            "accept":"application/json",
            "content-type":"application/json",
            "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXN1YXJpbyI6Imd1aWxoZXJtZSIsImlhdCI6MTY2ODU5NzE3MywiZXhwIjoxNjY4NzY5OTczfQ.67a2Dlj_Mb48ecvj8Mv3eI_ofL2TGqBlLwucJ0E7YME"
        },
        body:JSON.stringify({
            idCliente:idC,
            nomeCliente:nomeCliente,
            idEndereco:idE,
            tipo:tipo,
            logradouro:endereco,
            numero:numero,
            complemento:complemento,
            cep:cep,
            bairro:bairro,
            cidade:cidade,
            estado:estado,
            idDadosPessoais:idD,
            cpf:cpf,
            sexo:sexo,
            dataNascimento:dataNascimento,
            idContato:idCT,
            email:email,
            telefoneCelular:telefone,
            telefoneResidencial:tlR,
            idUsuario:idU,
            nomeUsuario:usuario,
        })
    })
    .then((response)=>response.json())
    .then((rs)=>Alert.alert("Dados Atualizados"))
    .catch((erro)=>console.error(`Erro ao tentar acessar a api -> ${erro}`))
  
}
