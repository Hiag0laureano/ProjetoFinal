import { Text, View, Image } from "react-native";

export default function Main(){
    return(
        <View style={{flex:1,}}>
             <Image source={require("../../../../assets/panelSobre.png")}style={{width:415, height:150}}></Image>
            <View style={{height:"30%", padding:10, alignItems:"center"}}> 
                <Text>
                <Text style={{color:"black", fontSize: 27, textAlign: "center"}}>Somos a Dog Especial. O app </Text>
                <Text style={{color:"red", fontSize:32}}>mais</Text>
                <Text style={{color:"black", fontSize: 27, textAlign: "center"}}> amado pelos pets !</Text>
                </Text>
                <View style={{flex:1,padding:20,}}>
                    <Text>
                    <Text style={{color:"black", fontSize: 20}}>Nós da Dog especial, temos a missão de 
                    garantir que todo animal tenha um lar. Mas </Text>
                    <Text style={{color:"red", fontSize:20}}>como ?</Text>
                    </Text >
                    <Text style={{color:"black", fontSize: 20}}>É cada vez mais comum encontrar animais abandonados em ruas e avenidas 
                    do país, animais que acabam ficando expostos a acidentes, doenças e mals-tratos.
                    </Text>
                    <Text style={{color:"black", fontSize: 20}}>
                        Vamos mudar isso ! Temos uma interface interativa e de fácil manuseio. Assim, podendo 
                        fazer com que mais pessoas tenham acesso à essa plataforma que ajuda tanto os animais necessitados.
                    </Text>
                    <Text style={{color:"black", fontSize: 20}}>
                        Contamos com abrigos e ONG's parceiras em todo o Brasil que acolhem animais em situações de mals-tratos e abandono.
                    </Text>
                    <Text style={{color:"black", fontSize: 20}}>
                        Assim como você, queremos o bem de todo tipo de animal, nosso projeto é expandir nossa plataforma atrás de
                        novas parcerias, para que tenhamos mais mais lares para esses animais tão especiais
                    </Text>

                </View>
            </View>
            {/*
            <View style={{flex:2,padding:10,}}>
            <Image source={require("../../../../assets/dog-rain.jpg" )}style={{width:"100%", height:200, alignContent:"center"}}/>
            </View >
            */}
        </View>
    )
} 
