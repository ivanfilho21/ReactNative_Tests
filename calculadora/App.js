import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const MainLayout = styled.View`
  flex: 1;
  align-items: center;
  padding: 48px;
  background-color: #f5f5f5;
`;

export default function App() {
  const [conta, setConta] = useState('')
  const [porcentagem, setPorcentagem] = useState(5)
  const [gorjeta, setGorjeta] = useState(0)

  const calc = () => {
    let nConta = parseFloat(conta)
    
    setGorjeta(nConta * porcentagem/100)
  }

  useEffect(() => {
    calc()
  }, [porcentagem])

  return (
    <MainLayout style={styles.container}>

      <StatusBar style="auto" />
      
      <Text style={styles.title}>Calculadora de Gorjeta</Text>
      
      <TextInput
        style={styles.display}
        placeholder="Valor da Conta"
        keyboardType="numeric"
        value={conta}
        onChangeText={n=>setConta(n)}
      />

      <View style={styles.row}>
        <Button title="5%" onPress={()=>setPorcentagem(5)}/>
        <Button title="10%" onPress={()=>setPorcentagem(10)}/>
        <Button title="15%" onPress={()=>setPorcentagem(15)}/>
        <Button title="20%" onPress={()=>{setPorcentagem(20)}}/>
      </View>

      <Button
        style={styles.button}
        title={`Calcular ${porcentagem}%`}
        onPress={
          () => {
            if (!conta) {
              alert("O valor da conta deve ser maior que zero.")
            }
            calc
          }
        }
      />

      {gorjeta >= 0 &&
        <View
          style={styles.result}>
            <Text style={styles.resultItem}>
              Valor da Conta:
            </Text>

            <Text>R$ {parseFloat(conta).toFixed(2)}</Text>

            <Text style={styles.resultItem}>
              Gorjeta:
            </Text>

            <Text>R$ {gorjeta.toFixed(2)}</Text>

            <Text style={styles.resultItem}>
              Valor Final:
            </Text>

            <Text>
              R$ {(parseFloat(conta) + gorjeta).toFixed(2)}
            </Text>
        </View>
      }
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 48,
  },
  display: {
    width: 100+'%',
    height: 48,
    marginTop: 24,
    marginBottom: 24,
    paddingStart: 12,
    paddingEnd: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6+'px',
    backgroundColor: '#e5e5e5',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    margin: 20+'px'
  },
  result: {
    alignItems: 'center',
    width: 100+'%',
    marginTop: 24,
    marginBottom: 24,
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6+'px',
  },
  resultItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  }
});
