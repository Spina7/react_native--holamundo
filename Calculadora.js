import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.titulo}> Calculadora </Text>
        <View style={styles.box}>
          <View style={styles.columna1}>
            <View style={styles.btn1}>
              <Button title="7"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="4"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="1"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="0"></Button>
            </View>
          </View>
          <View style={styles.columna1}>
            <View style={styles.btn1}>
              <Button title="8"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="5"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="2"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="."></Button>
            </View>
          </View>
          <View style={styles.columna1}>
            <View style={styles.btn1}>
              <Button title="9"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="6"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="3"></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="="></Button>
            </View>
          </View>
          <View style={styles.columna2}>
            <View style={styles.btn1}>
              <Button title="CE"></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="/"></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="x"></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="-"></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="+"></Button>
            </View>
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.resultado}>resultado</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    marginTop: 30,
  },
  btn1: {
    height: 50,
    width: 50,
    marginTop: 50,
  },
  btn2: {
    height: 50,
    width: 50,
    marginTop: 25,
  },
  columna1: {
    padding: 10,
  },
  columna2: {
    padding: 10,
    paddingLeft: 50,
  },
  textBox: {
    padding: 24,
  },
  resultado: {
    marginTop: 16,
    paddingVertical: 20,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  box: {
    padding: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
