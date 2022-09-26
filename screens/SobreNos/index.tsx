import { ScrollView, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function SobreNos (){

    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Main/>
            </ScrollView>
        </View>
    )
}