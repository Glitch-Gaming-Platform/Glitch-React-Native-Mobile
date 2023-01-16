import { Text, TextInput, View } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles"

const InputTextArea = ({title, value, onChange}) => {
    
    return (
        <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.0, }}>
            <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor16Regular }}>
                {title}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={{ ...Fonts.blackColor18Regular }}
                cursorColor={Colors.primaryColor}
                multiline
            />
        </View>
    )
}

export default InputTextArea;