import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"


export default function Index(){

    const styles = StyleSheet.create({
        container : {
          flex: 1,
          alignItems: "center",   
          backgroundColor: "#FDFDFD",
          padding: 12,
          
        },        

        illustration2 :{
            width:"100%",
            height:200,
            alignContent : "center",
            resizeMode: "contain",
            marginTop : 64,

        }, 

        title:{
            fontSize:24,
            fontWeight: 900,

        },
        subtitle:{
            fontSize:15,

        },

        form:{


        },
    })

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
                source={require('@/assets/logo2.png')}
                style={ styles.illustration2}
            />

            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>acesse a sua conta dfgdfgdfgdfgdgdfcom e-mail e senha.</Text>
            <View style={styles.form}>
                <Input placeholder="E-mail" keyboardType="email-address"/>
                <Input placeholder="Senha"  secureTextEntry />

                
            </View>
         <Button label="Entrar"/>
        </View>
        </ScrollView>
        
    )





}