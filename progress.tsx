import { View, Text, ScrollView } from "react-native";
import { Card, C, styles } from "../src/components/ui";

export default function Progress(){
 return <ScrollView style={{backgroundColor:C.bg}} contentContainerStyle={{padding:20,gap:14}}>
  <Text style={styles.eyebrow}>LAST 8 WEEKS</Text><Text style={styles.h1}>Progress</Text>
  <View style={styles.row}>
   <Card style={{flex:1}}><Text style={styles.label}>WORKOUTS</Text><Text style={styles.value}>27</Text><Text style={styles.body}>90% adherence</Text></Card>
   <Card style={{flex:1}}><Text style={styles.label}>PRS</Text><Text style={[styles.value,{color:C.gold}]}>8</Text><Text style={styles.body}>new records</Text></Card>
  </View>
  <Card><Text style={styles.label}>EST. BENCH 1RM</Text><Text style={[styles.value,{fontSize:36,marginTop:6}]}>247 lb</Text><Text style={{color:C.green,fontWeight:"800"}}>↑ 11 lb this block</Text></Card>
  <Card><Text style={styles.label}>TRAINING VOLUME</Text><Text style={[styles.value,{fontSize:36,marginTop:6}]}>42,860 lb</Text><Text style={styles.body}>Last 7 days • +6.4% vs previous week</Text></Card>
  <Card><Text style={styles.label}>COACH INSIGHT</Text><Text style={[styles.h2,{marginTop:8}]}>Recovery looks sustainable.</Text><Text style={[styles.body,{marginTop:6}]}>Performance is improving without a drop in completed sets. Continue the current progression.</Text></Card>
 </ScrollView>
}