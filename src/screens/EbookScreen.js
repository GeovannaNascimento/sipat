import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

// Exemplo de conteúdo do ebook
const ebookContent = `
Capítulo 1: Introdução à Segurança no Trabalho
A segurança no trabalho é um conjunto de medidas adotadas para minimizar os acidentes de trabalho...

Capítulo 2: Normas Regulamentadoras (NRs)
As Normas Regulamentadoras (NRs) são disposições complementares ao Capítulo V da CLT...

Capítulo 3: Identificação de Riscos
Identificar riscos no ambiente de trabalho é fundamental para prevenir acidentes...

Capítulo 4: Equipamentos de Proteção Individual (EPIs)
Os EPIs são dispositivos de uso individual destinados à proteção do trabalhador...

Capítulo 5: Procedimentos de Emergência
Em caso de emergência, é crucial seguir os procedimentos estabelecidos para garantir a segurança...

Capítulo 6: Estudos de Caso
Estudos de caso ajudam a ilustrar a importância das práticas de segurança no trabalho...
`;

const EbookScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.content}>
          {ebookContent}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default EbookScreen;
