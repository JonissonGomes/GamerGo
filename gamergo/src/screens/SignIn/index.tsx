import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { stylesheet } from './styles';

import imageInit from '../../images/image.png';
import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <SafeAreaView style={stylesheet.layout}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Image source={imageInit} style={stylesheet.image} />
            <Text style={stylesheet.title}>
                Conecte-se{`\n`}
                com as milhares de jogadores{`\n`}
                nos seus games favoritos{`\n`}
            </Text>

            <Text style={stylesheet.subTitle}>
                Organize sua jogatina, convide a galera, siga para o GG.
            </Text>
            
            <Button title="Entrar com o discord" />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
