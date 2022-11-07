import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function PubliHall(){
    return(
        <View style={{flex:1}}>
            <Header/>
            <ScrollView horizontal={false}>
                <Main/>
            </ScrollView>   
        </View>
    )
}