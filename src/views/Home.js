//impostmos o useEffect para que a função getUser seja executada apenas uma vez
//importamos o useState para modificar o estado do dado
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
//Importamos o AsyncStorage para recuperar os dados do usuário
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {
    //Criamos um estado para armazenar o email e senha
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Inicializa a função que recupera os dados do usuário do AsyncStorage
    useEffect(() => {
        getUser();
    }, []);

    //Função para recuperar os dados do usuário do AsyncStorage
    const getUser = async () => {
        try {
            //Recuperamos os dados do usuário do AsyncStorage
            const user = await AsyncStorage.getItem('user');
            //Convertemos o JSON para um objeto
            const parsedUser = JSON.parse(user);
            //Atualizamos o estado com os dados do usuário
            setEmail(parsedUser.email);
            setPassword(parsedUser.password);
        } catch (error) {
            //Caso não, exibimos uma mensagem de erro
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Email: {email}</Text>
            <Text>Senha: {password}</Text>
            <Text>Home Screen</Text>
            <Button title='Ir para About' onPress={() => navigation.navigate('About')} />
        </View>
    );
}

export default HomeScreen;