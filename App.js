import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>
          6 MODELOS DE COMPUTADORES 2026
        </Text>

        <View style={styles.pc}>
          <Image
            style={styles.places}
            source={require('./assets/mac.png')}
          />
          <Text style={styles.textDescription}>
            Embora detalhes específicos sobre o MacBook Pro 2026 ainda não tenham sido oficialmente divulgados pela Apple, espera-se que este modelo apresente avanços significativos em relação às versões anteriores. Rumores indicam que o MacBook Pro 2026 poderá incorporar o chip M6 da Apple, oferecendo desempenho aprimorado e maior eficiência energética. Além disso, há especulações sobre um design mais fino e leve, possivelmente com telas OLED para cores mais vibrantes e pretos profundos. No entanto, devido a atrasos na tecnologia OLED, o lançamento pode ter sido adiado.
          </Text>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>➡️</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.pc}>
          <Image
            style={styles.places}
            source={require('./assets/Dell.png')}
          />
          <Text style={styles.textDescription}>
            O Dell XPS 13 é conhecido por seu design elegante e desempenho robusto. A versão de 2021 apresentou processadores Intel Core i7 de 11ª geração e placas gráficas integradas Iris Xe, garantindo desempenho sólido para tarefas cotidianas e profissionais. O modelo de 2026 provavelmente continuará essa tendência, incorporando os mais recentes processadores e melhorias em design e funcionalidade.
          </Text>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>➡️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pc}>
          <Image
            style={styles.places}
            source={require('./assets/raze.png')}
          />
          <Text style={styles.textDescription}>
            O Razer Blade 15 é um dos laptops para jogos mais sofisticados do mercado. Com uma tela de 15,6 polegadas e opções de resolução 4K, o Razer Blade 15 oferece uma experiência de jogo incrivelmente fluida e visualmente deslumbrante. Equipado com uma placa gráfica NVIDIA RTX 30 Series e processadores Intel Core i9, ele é perfeito para jogos AAA e tarefas de alta demanda como modelagem 3D e renderização de vídeos.
          </Text>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>➡️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pc}>
          <Image
            style={styles.places}
            source={require('./assets/alien.png')}
          />
          <Text style={styles.textDescription}>
            O Alienware Aurora R15 é um desktop gamer da Dell, projetado para oferecer desempenho excepcional em jogos e aplicações intensivas. Embora as especificações possam variar, geralmente inclui processadores Intel Core i9 ou AMD Ryzen de última geração, placas gráficas Nvidia GeForce RTX ou AMD Radeon, e sistemas de resfriamento avançados. O design é futurista, característico da linha Alienware.
          </Text>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>➡️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pc}>
          <Image
            style={styles.places}
            source={require('./assets/msi.png')}
          />
          <Text style={styles.textDescription}>
            O MSI GE76 Raider é um laptop de 17,3 polegadas focado em jogos e produtividade, oferecendo uma tela de alta taxa de atualização e uma placa gráfica NVIDIA GeForce RTX 3070. Este laptop é ideal para jogos de alta intensidade e também pode ser usado para criação de conteúdo, como edição de vídeos e design gráfico. Com um processador Intel i9 e até 64 GB de RAM, o GE76 Raider oferece um desempenho impressionante, aliado a um design robusto e moderno.
          </Text>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>➡️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pc}>
          <Image
            style={styles.places}
            source={require('./assets/microsoft.png')}
          />
          <Text style={styles.textDescription}>
            O Microsoft Surface Studio 3 é um desktop tudo-em-um voltado para criadores de conteúdo. Sua tela sensível ao toque de 28 polegadas e a capacidade de inclinação de 20 graus torna o Surface Studio 3 perfeito para designers gráficos, editores de vídeo e artistas digitais. Equipado com processadores Intel Core i7 ou i9 e placas gráficas NVIDIA GTX ou RTX, ele oferece excelente desempenho para tarefas criativas intensas e produtividade.
          </Text>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>➡️</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  title: {
    textShadowColor: "limegreen",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 10,
    color: "lightgreen",
    fontSize: 60,
    fontStyle: "italic",
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  pc: {
    maxWidth: "45%",
    margin: "4%",
    shadowColor: 'limegreen',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 25,
    elevation: 15,
    borderRadius: 15,
    borderColor: 'limegreen',
    borderWidth: 2,
  },

  textDescription: {
    flexWrap: "wrap",
    width: '100%',
    textAlign: "left",
    padding: "2%",
    color: "lightgreen",
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 25,
  },

  places: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'limegreen',
  },

  arrowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrow: {
    fontSize: 40,
    color: 'limegreen',
  }
});