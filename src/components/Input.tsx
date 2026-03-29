import { StyleSheet, TextInput, TextInputProps } from "react-native"


export function Input({...rest}: TextInputProps) {


    const styles = StyleSheet.create({
        input: {
            marginTop: 10,
            backgroundColor:"rgb(197, 189, 189)",
            width: 300,
            height : 58,
            borderWidth:1,
            borderColor:"#3d2f2f",
            borderRadius: 8,
            fontSize:13,
            paddingLeft:12,

        },

    })

    return (
        <TextInput style={styles.input} {...rest}></TextInput>

    )
}