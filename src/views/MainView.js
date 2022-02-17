import React from "react";
import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MainView() {
    return <>
        <Image source={topo} style={styles.topo} ></Image>
        <Text style={styles.title}>Walkthrougs Details</Text>
        <View style={styles.container}>
            <Text style={styles.name}>React Native</Text>
            <View style={styles.reactNativeSection}>
                <Image source={logo} style={styles.imageIcon}></Image>
                <Text style={styles.details}>Walkthrougs Details</Text>
            </View>
            <Text style={styles.description}>Lorem ipsum dolor sit amet conseqtur adicipli elit. Scientiaru novae etatis.</Text>
            <Text style={styles.price}>U$ 39,99</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: width,
        height: 578 / 768 * width,
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    reactNativeSection:{
        flexDirection: 'row',
        paddingVertical: 12,
    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        fontSize: 30,
        lineHeight: 40,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: height / 2 - 350,
        fontFamily: 'MontserratRegular',
    },
    imageIcon:{
        width: 32,
        height: 32,
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontserratBold',
    },
    details: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646',
        marginLeft: 12,
        paddingTop: 5,
        fontFamily: 'MontserratRegular',
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontserratRegular',
    },
    price: {
        color: '#2A9F85',
        fontSize: 25,
        lineHeight: 26,
        marginTop: 8,
        fontFamily: 'MontserratBold',
    }
});
