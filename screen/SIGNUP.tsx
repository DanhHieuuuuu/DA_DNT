import { Image, StyleSheet, Text, View, TextInput } from "react-native"
import { Button } from "react-native-elements"

const LOGIN = () =>{
return <View style = {styles.container}>
    <View style ={{alignItems: 'center'}}>
        <Image source={require('../image/logo.png')} style ={{height: 100, width: 100}} />
        <Text style = {styles.title1}> Create Account</Text>
    </View>
    <View style ={styles.pd}>
        <TextInput placeholder="Name" style ={styles.input} />
    </View>
    <View style ={styles.pd}>
        <TextInput placeholder="Email" style ={styles.input} />
    </View>
    <View style ={styles.pd}>
        <TextInput placeholder="Password" style ={styles.input} />
    </View>
    <View style ={styles.pd}>
        <Button title = 'SIGN UP' buttonStyle ={styles.btn}/>
    </View>
    <View style = {{ alignItems: 'center'}}>
        <Text > Already have an account? <Text style ={{color:'#560cce', fontWeight: "900"}}>Sign up</Text></Text>
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
        color: '#560cce',
        padding: 10
    }
    ,input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#f1f1f1',
        borderRadius: 5,
        padding: 10,

    }
    ,btn:{
        backgroundColor: '#560cce',
        borderRadius: 5,
        borderWidth:1,
        borderColor: '#DDDDDD',
    }
    ,pd: {
        padding: 10
    }
})
export default LOGIN