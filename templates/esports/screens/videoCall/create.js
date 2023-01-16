import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import Requests from "../../../../util/Requests";
import Session from "../../../../util/Session";
import Storage from "../../../../util/Storage";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import InputText from "../../components/inputs/InputText";
import InputTextArea from "../../components/inputs/InputTextArea";
import Divider from "../../components/layout/divider";
import HeaderGoBack from "../../components/layout/header_go_back";
import { Colors } from "../../constants/styles";


const CreateBroadcastScreen = ({ navigation }) => {

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);

    async function create() {
       
        let data = {
            title: title,
            description : description
        };

        Requests.eventsCreate(data).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                <HeaderGoBack title="Create Stream" navigation={navigation} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <InputText title="Title" value={title} onChange={(value) => setTitle(value)} />

                    <Divider />

                    <InputTextArea title="Description" value={description} onChange={(value) => setDescription(value)} />

                    <Divider />

                    <PrimaryButton text="Create" onPress={(e) => { create(); }} />
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )
};

export default CreateBroadcastScreen;

