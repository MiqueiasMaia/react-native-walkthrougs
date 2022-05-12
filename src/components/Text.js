import react from "react";
import { Text, StyleSheet } from "react-native";


export default function PersonalText({ children, style }) {
    let localStyle = styles.text;
    if (style?.fontWeight === 'bold') localStyle = styles.textBold;
    return (
        <Text style={[localStyle, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textBold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'bold'
    }
});