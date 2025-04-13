import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../components/Card';
import CardDestacado from '../components/CardDestacado';
import FamosoItem from '../components/FamosoItem';
import LojaItem from '../components/LojaItem';
import FiltroHeader from '../components/FiltroHeader';
import CardPromocao from '../components/CardPromocao';
import CardRepetido from '../components/CardRepetido';
import CardCategoria from '../components/CardCategoria';
import CardExclusivo from '../components/CardExclusivo';
import CardDoDia from '../components/CardDoDia';

export default function HomeScreen() {
  const filtroMock = ['Ordenar', 'Entrega grátis', 'Vale-refeição', 'Promoções', 'Novidades'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <Image
    source={{ uri: 'https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png' }} // substitua com a URL da imagem do usuário
    style={styles.avatar}
  />
  <Text style={styles.address}>R. Antônio Lando, 266</Text>
  <Icon name="notifications-outline" size={24} style={styles.icon} />
</View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Categorias principais */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="fast-food-outline" size={30} />
            <Text style={styles.categoryText}>Restaurantes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="cart-outline" size={30} />
            <Text style={styles.categoryText}>Mercados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="medkit-outline" size={30} />
            <Text style={styles.categoryText}>Farmácias</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="pricetag-outline" size={30} />
            <Text style={styles.categoryText}>Promoções</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="beer-outline" size={30} />
            <Text style={styles.categoryText}>Bebidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="ticket-outline" size={30} />
            <Text style={styles.categoryText}>Cupons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="restaurant-outline" size={30} />
            <Text style={styles.categoryText}>Gourmet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="bag-outline" size={30} />
            <Text style={styles.categoryText}>Shopping</Text>
          </TouchableOpacity>
        </View>

        {/* Destaques */}
        <Text style={styles.title}>Destaques</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontal}>
          <CardDestacado image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Quais Quais Bar" rating="4.8" time="27 min" price="R$ 5,99" />
          <CardDestacado image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Itália no Box" rating="4.6" time="45 min" price="Grátis" />
          <CardDestacado image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Feijão da Vó" rating="4.9" time="40 min" price="R$ 6,50" />
          <CardDestacado image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Brasileiríssimo" rating="4.7" time="35 min" price="R$ 7,00" />
        </ScrollView>
        

        {/* Culinária Brasileira */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Culinária Brasileira</Text>
            <TouchableOpacity>
              <Text style={styles.verMais}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Quais Quais Bar" rating="4.8" time="27 min" price="R$ 5,99" />
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Itália no Box" rating="4.6" time="45 min" price="Grátis" />
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Feijão da Vó" rating="4.9" time="40 min" price="R$ 6,50" />
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Brasileiríssimo" rating="4.7" time="35 min" price="R$ 7,00" />
          </ScrollView>
        </View>

        {/* Mais pedidos perto de você */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mais pedidos perto de você</Text>
            <TouchableOpacity>
              <Text style={styles.verMais}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Quais Quais Bar" rating="4.8" time="27 min" price="R$ 5,99" />
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Itália no Box" rating="4.6" time="45 min" price="Grátis" />
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Feijão da Vó" rating="4.9" time="40 min" price="R$ 6,50" />
            <Card image={require('../assets/image.png')} avatar={require('../assets/image.png')} name="Brasileiríssimo" rating="4.7" time="35 min" price="R$ 7,00" />
          </ScrollView>
        </View>

        {/* Famosos no iFood */}
        <Text style={styles.title}>Famosos no iFood</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontal}>
          <FamosoItem image={require('../assets/image.png')} name="Itália no Box Valinhos" />
          <FamosoItem image={require('../assets/image.png')} name="Spoleto Parque Prado" />
          <FamosoItem image={require('../assets/image.png')} name="Candreva Bar - Valinhos" />
          <FamosoItem image={require('../assets/image.png')} name="Restaurante Vó Cida" />
          <FamosoItem image={require('../assets/image.png')} name="McDonald's" />
        </ScrollView>

        {/* Filtros */}
        <FiltroHeader filtro={filtroMock} />

        {/* Lojas */}
        <Text style={styles.title}>Lojas</Text>
        <LojaItem image={require('../assets/image.png')} name="Itália no Box Valinhos - Parmegiana" type="Brasileira" distance="2,1 km" rating="4.6" time="35-45 min" price="Grátis" />
        <LojaItem image={require('../assets/image.png')} name="Amigos e Napoletto" type="Brasileira" distance="0,7 km" rating="4.5" time="65-75 min" price="R$ 5,00" />
        <LojaItem image={require('../assets/image.png')} name="Feijoada de Vó" type="Marmita" distance="2,2 km" rating="4.6" time="21-31 min" price="R$ 8,99" />

        {/* Cards Especiais */}
        <Text style={styles.sectionTitle}>Promoções</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
          <CardPromocao image={require('../assets/image.png')} title="Desconto 50%" subtitle="Só hoje!" />
          <CardPromocao image={require('../assets/image.png')} title="Desconto 50%" subtitle="Só hoje!" />
          <CardPromocao image={require('../assets/image.png')} title="Desconto 50%" subtitle="Só hoje!" />
        </ScrollView>

        <Text style={styles.sectionTitle}>Peça de novo</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
          <CardRepetido image={require('../assets/image.png')} name="Hamburgueria Top" lastOrder="Pedido em 10/04" />
          <CardRepetido image={require('../assets/image.png')} name="Hamburgueria Top" lastOrder="Pedido em 10/04" />
          <CardRepetido image={require('../assets/image.png')} name="Hamburgueria Top" lastOrder="Pedido em 10/04" />
        </ScrollView>

        <Text style={styles.sectionTitle}>Exclusivos do app</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
          <CardExclusivo image={require('../assets/image.png')} label="Combo 2x1" description="Apenas no app" />
          <CardExclusivo image={require('../assets/image.png')} label="Combo 2x1" description="Apenas no app" />
          <CardExclusivo image={require('../assets/image.png')} label="Combo 2x1" description="Apenas no app" />
        </ScrollView>

        <Text style={styles.sectionTitle}>Oferta do dia</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
          <CardDoDia image={require('../assets/image.png')} title="Marmita Feijuca" discount="30% OFF" time="Até às 20h" />
          <CardDoDia image={require('../assets/image.png')} title="Marmita Feijuca" discount="30% OFF" time="Até às 20h" />
          <CardDoDia image={require('../assets/image.png')} title="Marmita Feijuca" discount="30% OFF" time="Até às 20h" />
        </ScrollView>

        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
          <CardCategoria icon={require('../assets/image.png')} label="Brasileira" />
          <CardCategoria icon={require('../assets/image.png')} label="Brasileira" />
          <CardCategoria icon={require('../assets/image.png')} label="Brasileira" />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // mantém o ícone no final
    padding: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  address: {
    flex: 1, // faz o texto ocupar o espaço entre a imagem e o ícone
    fontSize: 16,
  },
  icon: {
    marginLeft: 8,
  },
  content: {
    marginTop: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  categoryItem: {
    alignItems: 'center',
    margin: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginVertical: 8,
  },
  horizontal: {
    paddingLeft: 12,
    marginBottom: 16,
  },
  section: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 16,
  },
  verMais: {
    color: '#FF3D00',
    fontSize: 12,
  },
  scrollRow: {
    paddingLeft: 12,
    marginBottom: 16,
  },
});
