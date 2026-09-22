import { View, Text } from "react-native";
import { router } from "expo-router";
import { Button, C, styles } from "../src/components/ui";

export default function Index(){
 return <View style={[styles.screen,{justifyContent:"center"}]}>
   <Text style={styles.eyebrow}>INTELLIGENT TRAINING</Text>
   <Text style={[styles.h1,{fontSize:54,marginTop:8}]}>IRON <Text style={{color:C.green}}>IQ</Text></Text>
   <Text style={[styles.body,{fontSize:18,marginTop:8,marginBottom:34}]}>Train smarter. Get stronger.</Text>
   <Button title="BUILD MY PROGRAM" onPress={()=>router.push("/onboarding")} />
   <Text style={[styles.body,{textAlign:"center",marginTop:18,fontSize:12}]}>V1 PROTOTYPE • MUSCLE • STRENGTH • FITNESS</Text>
 </View>
}