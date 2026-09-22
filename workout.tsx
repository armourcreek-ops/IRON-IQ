import { useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { Button, Card, C, styles } from "../src/components/ui";

const initial=[
 {set:1,weight:190,reps:8,done:false},
 {set:2,weight:190,reps:8,done:false},
 {set:3,weight:190,reps:8,done:false}
];
export default function Workout(){
 const [sets,setSets]=useState(initial);
 const toggle=(i:number)=>setSets(sets.map((x,n)=>n===i?{...x,done:!x.done}:x));
 return <ScrollView style={{backgroundColor:C.bg}} contentContainerStyle={{padding:20,gap:14}}>
  <Text style={styles.eyebrow}>EXERCISE 1 OF 5</Text>
  <Text style={styles.h1}>Barbell Bench Press</Text>
  <Card><Text style={styles.label}>LAST TIME</Text><Text style={[styles.value,{marginTop:6}]}>185 × 10, 10, 8</Text><Text style={styles.body}>Today's target: 190 lb × 8–10</Text></Card>
  <View style={local.head}><Text style={local.th}>SET</Text><Text style={local.th}>LB</Text><Text style={local.th}>REPS</Text><Text style={local.th}>DONE</Text></View>
  {sets.map((x,i)=><View key={i} style={local.setrow}>
    <Text style={local.num}>{x.set}</Text><Text style={local.num}>{x.weight}</Text><Text style={local.num}>{x.reps}</Text>
    <Pressable onPress={()=>toggle(i)} style={[local.check,x.done&&{backgroundColor:C.green}]}><Text style={{fontWeight:"900",color:x.done?"#071006":C.muted}}>✓</Text></Pressable>
  </View>)}
  <Card><Text style={styles.label}>REST TIMER</Text><Text style={[styles.value,{color:C.green,fontSize:36}]}>01:42</Text></Card>
  <Button title="NEXT EXERCISE" onPress={()=>{}} />
 </ScrollView>
}
const local=StyleSheet.create({
 head:{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12},
 th:{color:C.muted,fontSize:11,fontWeight:"800",width:60,textAlign:"center"},
 setrow:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:C.card,padding:14,borderRadius:14},
 num:{color:C.text,fontSize:18,fontWeight:"800",width:60,textAlign:"center"},
 check:{width:42,height:42,borderRadius:12,borderWidth:1,borderColor:"#3A433D",alignItems:"center",justifyContent:"center"}
});