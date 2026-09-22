import { useState } from "react";
import {
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { Button, Card, C, styles } from "../src/components/ui";

const initialSets = [
  { set: 1, weight: 190, reps: 8, done: false },
  { set: 2, weight: 190, reps: 8, done: false },
  { set: 3, weight: 190, reps: 8, done: false },
];

export default function Workout() {
  const [sets, setSets] = useState(initialSets);

  const toggleSet = (index: number) => {
    setSets(
      sets.map((set, i) =>
        i === index
          ? { ...set, done: !set.done }
          : set
      )
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: C.bg }}
      contentContainerStyle={{
        padding: 20,
        gap: 14,
      }}
    >
      <Text style={styles.eyebrow}>
        EXERCISE 1 OF 5
      </Text>

      <Text style={styles.h1}>
        Barbell Bench Press
      </Text>

      <Card>
        <Text style={styles.label}>
          LAST WORKOUT
        </Text>

        <Text
          style={[
            styles.value,
            { marginTop: 6 },
          ]}
        >
          185 × 10, 10, 8
        </Text>

        <Text style={styles.body}>
          Today's target: 190 lb × 8–10
        </Text>
      </Card>

      <View style={local.header}>
        <Text style={local.headerText}>SET</Text>
        <Text style={local.headerText}>LB</Text>
        <Text style={local.headerText}>REPS</Text>
        <Text style={local.headerText}>DONE</Text>
      </View>

      {sets.map((set, index) => (
        <View key={index} style={local.setRow}>

          <Text style={local.number}>
            {set.set}
          </Text>

          <Text style={local.number}>
            {set.weight}
          </Text>

          <Text style={local.number}>
            {set.reps}
          </Text>

          <Pressable
            onPress={() => toggleSet(index)}
            style={[
              local.checkButton,
              set.done && {
                backgroundColor: C.green,
              },
            ]}
          >
            <Text
              style={{
                fontWeight: "900",
                color: set.done
                  ? "#071006"
                  : C.muted,
              }}
            >
              ✓
            </Text>
          </Pressable>

        </View>
      ))}

      <Card>
        <Text style={styles.label}>
          REST TIMER
        </Text>

        <Text
          style={[
            styles.value,
            {
              color: C.green,
              fontSize: 36,
            },
          ]}
        >
          01:42
        </Text>
      </Card>

      <Card>
        <Text style={styles.label}>
          IRON IQ TARGET
        </Text>

        <Text
          style={[
            styles.h2,
            { marginTop: 8 },
          ]}
        >
          Complete 3 × 8–10
        </Text>

        <Text
          style={[
            styles.body,
            { marginTop: 5 },
          ]}
        >
          Hit 10 reps on all three sets and
          IRON IQ will recommend increasing
          the load next workout.
        </Text>
      </Card>

      <Button
        title="NEXT EXERCISE"
        onPress={() => {}}
      />

    </ScrollView>
  );
}

const local = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  headerText: {
    color: C.muted,
    fontSize: 11,
    fontWeight: "800",
    width: 60,
    textAlign: "center",
  },

  setRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: C.card,
    padding: 14,
    borderRadius: 14,
  },

  number: {
    color: C.text,
    fontSize: 18,
    fontWeight: "800",
    width: 60,
    textAlign: "center",
  },

  checkButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3A433D",
    alignItems: "center",
    justifyContent: "center",
  },
});