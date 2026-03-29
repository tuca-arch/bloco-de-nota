import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native"


type ButtonProps = TouchableOpacityProps & {
    label: string
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height:48,
        backgroundColor:"#302b2b",
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        marginTop:10,
    },
    label:{
        color: "#FDFDFD",
        fontSize:16,
        fontWeight:600,

    },
})



export function Button( { label, ...rest}: ButtonProps){
    return(
      
            <TouchableOpacity style={styles.container} {...rest}>
                <Text style={styles.label}>
                    {label}
                </Text>

            </TouchableOpacity>
      
    )

}