import React, { useState } from 'react';
import styled from 'styled-components';
import { View, Text, Button } from 'react-native';

const MainLayout = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
  backgroundColor: #f5f5f5;
`;

const TextField = styled.TextInput`
  height: 52px;
  margin: 32px;
  padding: 8px 16px;
  border: 1px solid #777;
  backgroundColor: white;
`;

const Frame = styled.View`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 16px;
  border-style: dashed;
  border-width: 3px;
  border-color: #dedede;
`;

const Splash = () => {
  const [name, setName] = useState('Convidado');
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setShowName(!showName);
  }

  return (
    <View style={{width: 90+'%', alignSelf: 'center', alignItems: 'center'}}>
      <TextField value={name} onChangeText={(n) => {setName(n)}} />

      <Button title={(showName ? 'Ocultar' : 'Mostrar') + ' Nome'} onPress={handleClick}/>
      {showName &&
        <Frame>
          <Text>Olá, {name}!</Text>
        </Frame>
      }
    </View>
  );
}

export default () => {
  return (
    <MainLayout>
      <Splash />
    </MainLayout>
  );
}