import { Text, ScrollView, View } from "react-native";
import { router } from "expo-router";
import { Button, Card, C, styles } from "../src/components/ui";

export default function Home() {
  return (
    <ScrollView
      style={{ backgroundColor: C.bg }}
      contentContainerStyle={{
        padding: 20,
        gap: 14,
      }}
    >
      <View>
        <Text style={styles.eyebrow}>MONDAY • PUSH</Text>
        <Text style={styles.h1}>Ready to train?</Text>
      </View>

      <Card>
        <Text style={styles.label}>TODAY'S WORKOUT</Text>

        <Text
          style={[
            styles.h2,
            {
              marginTop: 8,
            },
          ]}
        >
          Push A — Strength
        </Text>

        <Text
          style={[
            styles.body,
            {
              marginVertical: 8,
            },
          ]}
        >
          5 exercises • 17 working sets • ~58 min
        </Text>

        <Button
          title="START WORKOUT"
          onPress={() => router.push("/workout")}
        />
      </Card>

      <View style={styles.row}>
        <Card style={{ flex: 1 }}>
          <Text style={styles.label}>THIS WEEK</Text>
          <Text style={styles.value}>3 / 4</Text>
          <Text style={styles.body}>workouts</Text>
        </Card>

        <Card style={{ flex: 1 }}>
          <Text style={styles.label}>STREAK</Text>
          <Text style={styles.value}>6</Text>
          <Text style={styles.body}>weeks</Text>
        </Card>
      </View>

      <Card>
        <Text style={styles.label}>IRON IQ COACH</Text>

        <Text
          style={[
            styles.h2,
            {
              marginTop: 8,
            },
          ]}
        >
          Bench is trending up.
        </Text>

        <Text
          style={[
            styles.body,
            {
              marginTop: 6,
            },
          ]}
        >
          You hit the top of your rep range last session.
          Today's target moves to 190 lb.
        </Text>
      </Card>

      <Card>
        <Text style={styles.label}>RECENT PR</Text>

        <Text
          style={[
            styles.value,
            {
              color: C.gold,
              marginTop: 8,
            },
          ]}
        >
          Deadlift • 405 lb
        </Text>

        <Text style={styles.body}>
          Estimated 1RM +12 lb this training block
        </Text>
      </Card>

      <Button
        title="VIEW PROGRESS"
        secondary
        onPress={() => router.push("/progress")}
      />
    </ScrollView>
  );
}