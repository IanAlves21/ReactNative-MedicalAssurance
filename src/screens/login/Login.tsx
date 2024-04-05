import {
    Box,
    Image,
    Link,
    Text,
    VStack
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import Logo from '../../assets/Logo.png';
import { BasicButton } from "../../components/BasicButton/BasicButton";
import { BasicInput } from "../../components/BasicInput/BasicInput";
import { Title } from "../../components/Title/Title";

function Login() {
    return (
        <VStack flex={1} alignItems="center" p={5} justifyContent="center">
            <Image source={Logo} alt="App logo" />
            <Title>Faça login em sua conta</Title>
            <Box>
                <BasicInput placeholder={"Insira seu E-Mail"} label={"Email"} />
                <BasicInput placeholder={"Insira sua Senha"} label={"Senha"} />
            </Box>
            <BasicButton>Entrar</BasicButton>
            <Link href="https://www.google.com/" mt={2}>
                Esqueceu sua senha?
            </Link>
            <Box flexDirection="row" justifyContent="center" w="100%" mt={8}>
                <Text color="gray.600">Ainda nao tem conta?</Text>
                <TouchableOpacity>
                    <Text bold color="blue.500"> Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>
        </VStack >
    );
}

export default Login;
