import { Pressable, Text, StyleSheet } from 'react-native';

// Bemærk at vi indsætter en onPress prop og en title prop i vores ButtonComponent, så vi kan genbruge den i vores skærme.
export default function ButtonComponent({ title, onPress }){
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'green',
        margin: 20,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});

