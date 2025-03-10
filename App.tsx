import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>
          6 MODELOS DE COMPUTADORES 2026
        </Text>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/mac.png')}
          />
          <Text style={styles.textDescription}>
            O MacBook Pro 2026 é um dos computadores mais poderosos da Apple, projetado para profissionais que precisam de alto desempenho. Com um chip M2 Pro ou M2 Max, ele oferece desempenho extraordinário para tarefas pesadas como edição de vídeo, design gráfico e programação. A tela Retina Liquid, com cores precisas e brilho impressionante, torna-o ideal para criadores de conteúdo. Além disso, o design fino e leve garante portabilidade sem comprometer a potência.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/Dell.png')}
          />
          <Text style={styles.textDescription}>
            O Dell XPS 13 2026 é um dos laptops mais reconhecidos no mercado, combinando design elegante com desempenho de ponta. Equipado com os mais recentes processadores Intel i7 ou i9, possui uma tela InfinityEdge praticamente sem bordas, proporcionando uma experiência visual imersiva. Ideal para quem precisa de um dispositivo leve e potente para tarefas cotidianas, reuniões virtuais ou até mesmo para desenvolvedores que necessitam de um computador rápido e eficiente.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/raze.png')}
          />
          <Text style={styles.textDescription}>
            O Razer Blade 15 é um dos laptops para jogos mais sofisticados do mercado. Com uma tela de 15,6 polegadas e opções de resolução 4K, o Razer Blade 15 oferece uma experiência de jogo incrivelmente fluida e visualmente deslumbrante. Equipado com uma placa gráfica NVIDIA RTX 30 Series e processadores Intel Core i9, ele é perfeito para jogos AAA e tarefas de alta demanda como modelagem 3D e renderização de vídeos.
          </Text>
        </View>

        {/* Novos modelos de computadores com imagens */}

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/alien.png')}
          />
          <Text style={styles.textDescription}>
            O **Alienware Aurora R15** é um desktop de última geração, projetado para entusiastas de jogos e profissionais que exigem desempenho extremo. Equipado com processadores Intel Core i9 ou AMD Ryzen 9 e placas gráficas da série NVIDIA RTX 40, oferece desempenho imbatível para jogos em 4K, VR, e tarefas como renderização de vídeo e animação 3D. O design futurista e o sistema de resfriamento avançado garantem uma experiência de jogo sem superaquecimento.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/msi.png')}
          />
          <Text style={styles.textDescription}>
            O **MSI GE76 Raider** é um laptop de 17,3 polegadas focado em jogos e produtividade, oferecendo uma tela de alta taxa de atualização e uma placa gráfica NVIDIA GeForce RTX 3070. Este laptop é ideal para jogos de alta intensidade e também pode ser usado para criação de conteúdo, como edição de vídeos e design gráfico. Com um processador Intel i9 e até 64 GB de RAM, o GE76 Raider oferece um desempenho impressionante, aliado a um design robusto e moderno.
          </Text>
        </View>

        <View style={styles.car}>
          <Image
            style={styles.places}
            source={require('./assets/microsoft.png')}
          />
          <Text style={styles.textDescription}>
            O **Microsoft Surface Studio 3** é um desktop tudo-em-um voltado para criadores de conteúdo. Sua tela sensível ao toque de 28 polegadas e a capacidade de inclinação de 20 graus torna o Surface Studio 3 perfeito para designers gráficos, editores de vídeo e artistas digitais. Equipado com processadores Intel Core i7 ou i9 e placas gráficas NVIDIA GTX ou RTX, ele oferece excelente desempenho para tarefas criativas intensas e produtividade.
          </Text>
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',  // Fundo preto para contraste
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  title: {
    textShadowColor: "limegreen",  // Sombra mais clara de verde
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 10,
    color: "lightgreen",  // Cor do texto verde claro
    fontSize: 60,  // Aumentando o tamanho da fonte para mais destaque
    fontStyle: "italic",
    fontWeight: 'bold',  // Tornando o título mais ousado
    letterSpacing: 2,  // Aumentando o espaçamento entre as letras para mais estilo
  },

  car: {
    maxWidth: "45%",  // Aumentando a largura para dar mais espaço
    margin: "4%",  // Ajustando as margens para um layout mais espaçado
    shadowColor: 'limegreen',  // Sombra de verde mais vibrante
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,  // Aumentando a opacidade da sombra para mais destaque
    shadowRadius: 25,
    elevation: 15,  // Aumentando o valor da elevação para criar mais profundidade
    borderRadius: 15,  // Adicionando borda arredondada para suavizar os elementos
    borderColor: 'limegreen',  // Cor da borda verde
    borderWidth: 2,  // Largura da borda
  },

  textDescription: {
    flexWrap: "wrap",
    width: '100%',
    textAlign: "left",
    padding: "2%",  // Aumentando o padding para uma melhor leitura
    color: "lightgreen",  // Cor do texto verde claro
    fontStyle: 'italic',
    fontSize: 18,  // Aumentando o tamanho da fonte para maior legibilidade
    lineHeight: 25,  // Ajustando o espaçamento entre as linhas
  },

  places: {
    width: "100%",
    borderRadius: 10,  // Adicionando bordas arredondadas à imagem
    borderWidth: 3,  // Largura da borda
    borderColor: 'limegreen',  // Cor da borda verde vibrante
  }
});
