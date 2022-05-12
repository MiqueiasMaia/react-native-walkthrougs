import React from "react";
import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import PersonalText from "../components/Text";

export default function MainView() {
    //or use fragment <> </>
    return (
        <View>
            <View style={style.headerView}>
                <Image source={topo} style={styles.topo} ></Image>
                <PersonalText style={styles.title}>Walkthrougs Details</PersonalText>
            </View>
            <View style={styles.container}>
                <PersonalText style={styles.name}>React Native</PersonalText>
                <View style={styles.reactNativeSection}>
                    <Image source={logo} style={styles.imageIcon}></Image>
                    <PersonalText style={styles.details}>Walkthrougs Details</PersonalText>
                </View>
                <PersonalText style={styles.description}>Lorem ipsum dolor sit amet conseqtur adicipli elit. Scientiaru novae etatis.</PersonalText>
                <PersonalText style={styles.price}>U$ 39,99</PersonalText>
            </View>
        </View>
    );

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
    reactNativeSection: {
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
        fontWeight: 'bold',
    },
    imageIcon: {
        width: 32,
        height: 32,
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646',
        marginLeft: 12,
        paddingTop: 5,
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontSize: 25,
        lineHeight: 26,
        marginTop: 8,
        fontWeight: 'bold',
    }, headerView: {
        flex: 1,
    }
});
