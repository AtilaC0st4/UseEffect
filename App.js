import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
  console.log('Buscando informações da API...');
},[contador]);




  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Contador: {contador}</Text>
      <Button
        title="Adicionar"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}
