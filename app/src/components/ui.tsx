import React from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";

export const C = {
  bg: "#090B0A",
  card: "#141816",
  card2: "#1B201D",
  text: "#F5F7F6",
  muted: "#929A95",
  green: "#7CFF4F",
  gold: "#F2C14E",
};

export function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View style={[local.card, style]}>
      {children}
    </View>
  );
}

export function Button({
  title,
  onPress,
  secondary = false,
}: {
  title: string;
  onPress: () => void;
  secondary?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        local.button,
        secondary && local.secondaryButton,
      ]}
    >
      <Text
        style={[
          local.buttonText,
          secondary && {
            color: C.text,
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.bg,
    padding: 20,
  },

  eyebrow: {
    color: C.green,
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,
  },

  h1: {
    color: C.text,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: -1,
  },

  h2: {
    color: C.text,
    fontSize: 21,
    fontWeight: "800",
  },

  body: {
    color: C.muted,
    fontSize: 15,
    lineHeight: 22,
  },

  label: {
    color: C.muted,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  value: {
    color: C.text,
    fontSize: 22,
    fontWeight: "900",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },
});

const local = StyleSheet.create({
  card: {
    backgroundColor: C.card,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#222824",
  },

  button: {
    backgroundColor: C.green,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  secondaryButton: {
    backgroundColor: C.card2,
    borderWidth: 1,
    borderColor: "#303732",
  },

  buttonText: {
    color: "#071006",
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 0.3,
  },
});