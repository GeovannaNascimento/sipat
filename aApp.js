import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

// Conteúdo do eBook
const ebookContent = `
SIPAT

Capítulo 1: Introdução à Segurança do Trabalho

A segurança do trabalho é uma área essencial em qualquer ambiente laboral. Sua história remonta aos primórdios da Revolução Industrial, quando as condições de trabalho eram extremamente precárias e os acidentes eram frequentes. Com o tempo, movimentos sindicais e legislações trabalhistas foram estabelecidos para proteger os trabalhadores e garantir ambientes laborais mais seguros.

Objetivos da Segurança do Trabalho

A segurança do trabalho tem diversos objetivos, todos eles visando proteger a saúde e a integridade física dos trabalhadores. Entre os principais objetivos estão:

Prevenir acidentes e lesões no ambiente de trabalho.
Proteger os trabalhadores contra exposição a substâncias nocivas e agentes perigosos.
Promover o bem-estar físico e mental dos funcionários.
Cumprir as normas regulamentadoras estabelecidas pelos órgãos competentes.
Criar uma cultura de segurança que permeie toda a organização.

Cultura de Segurança

Uma cultura de segurança forte é fundamental para o sucesso das práticas de segurança do trabalho. Isso envolve o comprometimento da alta administração em relação à segurança, a participação ativa dos trabalhadores, a comunicação aberta sobre questões de segurança, o treinamento adequado para lidar com situações de risco e a implementação de políticas e procedimentos de segurança claros e eficazes.


Capítulo 2: Identificação de Riscos no Ambiente de Trabalho

Identificar os riscos presentes no ambiente de trabalho é essencial para prevenir acidentes e proteger os trabalhadores. Existem diversos tipos de riscos ocupacionais, que podem ser classificados em cinco categorias principais: físicos, químicos, biológicos, ergonômicos e de acidentes.

Riscos Físicos

Os riscos físicos incluem exposição a ruído excessivo, vibrações, temperaturas extremas, radiações ionizantes e não ionizantes, entre outros. Esses riscos podem causar danos à saúde dos trabalhadores se não forem adequadamente controlados.

Riscos Químicos

Os riscos químicos estão relacionados à exposição a substâncias perigosas, como produtos químicos corrosivos, tóxicos, inflamáveis ou irritantes. A inalação, ingestão ou contato com essas substâncias pode causar danos à saúde dos trabalhadores.

Riscos Biológicos

Os riscos biológicos estão associados à exposição a agentes biológicos, como vírus, bactérias, fungos, parasitas e outros microrganismos. Esses riscos são comuns em ambientes como hospitais, laboratórios de pesquisa e indústrias alimentícias.

Riscos Ergonômicos

Os riscos ergonômicos estão relacionados à ergonomia do trabalho e incluem posturas inadequadas, esforço físico excessivo, repetitividade de movimentos, entre outros. Esses riscos podem levar ao desenvolvimento de lesões musculoesqueléticas e distúrbios ocupacionais.

Riscos de Acidentes

Os riscos de acidentes incluem quedas de altura, choques elétricos, quedas de objetos, incêndios, explosões, entre outros. Esses riscos podem resultar em ferimentos graves e até mesmo fatais se não forem adequadamente controlados.

Técnicas de Identificação de Riscos

Existem diversas técnicas para identificar os riscos presentes no ambiente de trabalho, incluindo inspeções regulares, análise de risco, investigação de acidentes anteriores, entrevistas com os trabalhadores e análise de dados de saúde e segurança.

Medidas de Controle de Riscos

Após identificar os riscos, é importante implementar medidas para controlá-los e reduzir sua probabilidade de ocorrência. Isso pode incluir a implementação de medidas de controle administrativo, como treinamento dos trabalhadores e criação de políticas de segurança, bem como a utilização de medidas de controle de engenharia, como o uso de equipamentos de proteção coletiva e a implementação de sistemas de ventilação adequados.


Capítulo 3: Equipamentos de Proteção Individual (EPIs)

Os Equipamentos de Proteção Individual (EPIs) são dispositivos utilizados pelos trabalhadores com o objetivo de proteger sua saúde e segurança durante a execução de suas atividades laborais. Existem diversos tipos de EPIs, cada um destinado a proteger contra um tipo específico de risco.

Tipos de EPIs

Os principais tipos de EPIs incluem:

Capacete de segurança: Protege a cabeça contra impactos e quedas de objetos.
Óculos de proteção: Protegem os olhos contra partículas, respingos e radiações.
Protetores auriculares: Reduzem a exposição a ruídos excessivos e protegem a audição.
Luvas de segurança: Protegem as mãos contra cortes, queimaduras e produtos químicos.
Máscaras respiratórias: Protegem as vias respiratórias contra poeiras, vapores e gases nocivos.
Calçados de segurança: Protegem os pés contra impactos, esmagamentos e perfurações.
Cintos de segurança: Protegem contra quedas em altura e outros acidentes.
Seleção e Uso Adequado dos EPIs

A seleção adequada dos EPIs é fundamental para garantir sua eficácia na proteção dos trabalhadores. Além disso, é importante que os trabalhadores recebam treinamento adequado sobre como usar os EPIs corretamente e que sigam todas as instruções e diretrizes de segurança.

Manutenção e Inspeção dos EPIs

Os EPIs devem ser mantidos em bom estado de conservação e funcionamento para garantir sua eficácia. Isso inclui a realização de inspeções regulares, a substituição de EPIs danificados ou desgastados e o armazenamento adequado quando não estiverem em uso.

`;

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.content}>
        {ebookContent}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default App;
