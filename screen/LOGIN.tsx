import { Image, StyleSheet, Text, View, TextInput } from "react-native"
import { Button } from "react-native-elements"

const LOGIN = () =>{
return <View style = {styles.container}>
    <View style ={{alignItems: 'center'}}>
        <Image source={require('../image/logo.png')} style ={{height: 100, width: 100, padding: 10}}/>
        <Text style = {[styles.title1, styles.pd]}> Wellcome back.</Text>
    </View>
    <View style = {styles.pd}>
        <TextInput placeholder="Email" style ={styles.input} />
    </View>
    <View style = {styles.pd}>
        <TextInput placeholder="Password" style ={styles.input} />
        <Text style ={styles.title2}>Forgot your password?</Text>
    </View>
    <View style ={styles.pd}>
        <Button title = 'LOGIN' buttonStyle ={styles.btn} />
    </View>
    <View style = {{ alignItems: 'center'}}>
        <Text > Don't have an account? <Text style ={{color:'#560cce', fontWeight: "900"}}>Sign up</Text></Text>
    </View>
</View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 30
    }
    ,title1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#560cce'
    }
    ,input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#f1f1f1',
        borderRadius: 5,
        padding: 10,

    }
    ,title2: {
        fontSize: 10,
        textAlign: 'right',
        paddingTop: 10, 
        color: '#808080'
    }
    ,btn:{
        backgroundColor: '#0000CC',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#DDDDDD',
    }
    ,pd: {
        padding: 10
    }
})
export default LOGIN