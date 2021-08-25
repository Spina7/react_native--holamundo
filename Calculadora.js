import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      temp: '',
      operacion: '',
    };
  }

  render() {
    const cero = () => {
      this.setState({resultado: this.state.resultado.toString() + 0});
    };
    const uno = () => {
      this.setState({resultado: this.state.resultado.toString() + 1});
    };
    const dos = () => {
      this.setState({resultado: this.state.resultado.toString() + 2});
    };
    const tres = () => {
      this.setState({resultado: this.state.resultado.toString() + 3});
    };
    const cuatro = () => {
      this.setState({resultado: this.state.resultado.toString() + 4});
    };
    const cinco = () => {
      this.setState({resultado: this.state.resultado.toString() + 5});
    };
    const seis = () => {
      this.setState({resultado: this.state.resultado.toString() + 6});
    };
    const siete = () => {
      this.setState({resultado: this.state.resultado.toString() + 7});
    };
    const ocho = () => {
      this.setState({resultado: this.state.resultado.toString() + 8});
    };
    const nueve = () => {
      this.setState({resultado: this.state.resultado.toString() + 9});
    };
    const punto = () => {
      this.setState({resultado: this.state.resultado.toString() + '.'});
    };
    const suma = () => {
      this.setState({temp: this.state.resultado});
      this.setState({resultado: ''});
      this.setState({operacion: 'suma'});
    };
    const resta = () => {
      this.setState({temp: this.state.resultado});
      this.setState({resultado: ''});
      this.setState({operacion: 'resta'});
    };
    const multiplicacion = () => {
      this.setState({temp: this.state.resultado});
      this.setState({resultado: ''});
      this.setState({operacion: 'multiplicacion'});
    };
    const division = () => {
      this.setState({temp: this.state.resultado});
      this.setState({resultado: ''});
      this.setState({operacion: 'division'});
    };
    const limpiar = () => {
      this.setState({temp: ''});
      this.setState({resultado: ''});
      this.setState({operacion: ''});
    };
    const btnResultado = () => {
      if (this.state.operacion === 'suma') {
        var res =
          parseFloat(this.state.temp) + parseFloat(this.state.resultado);
        this.setState({resultado: res});
      } else if (this.state.operacion === 'resta') {
        var res =
          parseFloat(this.state.temp) - parseFloat(this.state.resultado);
        this.setState({resultado: res});
      } else if (this.state.operacion === 'multiplicacion') {
        var res =
          parseFloat(this.state.temp) * parseFloat(this.state.resultado);
        this.setState({resultado: res});
      } else if (this.state.operacion === 'division') {
        var res =
          parseFloat(this.state.temp) / parseFloat(this.state.resultado);
        this.setState({resultado: res});
      }
    };
    return (
      <View>
        <Text style={styles.titulo}> Calculadora </Text>
        <View style={styles.textBox}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.columna1}>
            <View style={styles.btn1}>
              <Button title="7" onPress={siete}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="4" onPress={cuatro}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="1" onPress={uno}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="0" onPress={cero}></Button>
            </View>
          </View>
          <View style={styles.columna1}>
            <View style={styles.btn1}>
              <Button title="8" onPress={ocho}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="5" onPress={cinco}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="2" onPress={dos}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="." onPress={punto}></Button>
            </View>
          </View>
          <View style={styles.columna1}>
            <View style={styles.btn1}>
              <Button title="9" onPress={nueve}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="6" onPress={seis}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="3" onPress={tres}></Button>
            </View>
            <View style={styles.btn1}>
              <Button title="=" onPress={btnResultado}></Button>
            </View>
          </View>
          <View style={styles.columna2}>
            <View style={styles.btn1}>
              <Button title="CE" onPress={limpiar}></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="/" onPress={division}></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="x" onPress={multiplicacion}></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="-" onPress={resta}></Button>
            </View>
            <View style={styles.btn2}>
              <Button title="+" onPress={suma}></Button>
            </View>
          </View>
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
    paddingTop: 0,
  },
  columna2: {
    padding: 10,
    paddingTop: 0,
    paddingLeft: 50,
  },
  textBox: {
    padding: 24,
    paddingBottom: 0,
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
    paddingTop: 0,
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
