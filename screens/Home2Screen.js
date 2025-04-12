import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from '../components/Card';
import CardDestacado from '../components/CardDestacado';
import FamosoItem from '../components/FamosoItem';
import LojaItem from '../components/LojaItem';
import FiltroHeader from '../components/FiltroHeader';
import CardPromocao from '../components/CardPromocao';

// Importando diretamente os componentes agora separados
import CardRepetido from '../components/CardRepetido';
import CardCategoria from '../components/CardCategoria';
import CardExclusivo from '../components/CardExclusivo';
import CardDoDia from '../components/CardDoDia';

export default function HomeScreen() {
  const mockCards = [
    {
      image: require('../assets/image.png'),
      avatar: require('../assets/image.png'),
      name: 'Quais Quais Bar',
      rating: '4.8',
      time: '27 min',
      price: 'R$ 5,99',
    },
    {
      image: require('../assets/image.png'),
      avatar: require('../assets/image.png'),
      name: 'Itália no Box',
      rating: '4.6',
      time: '45 min',
      price: 'Grátis',
    },
    {
      image: require('../assets/image.png'),
      avatar: require('../assets/image.png'),
      name: 'Feijão da Vó',
      rating: '4.9',
      time: '40 min',
      price: 'R$ 6,50',
    },
    {
      image: require('../assets/image.png'),
      avatar: require('../assets/image.png'),
      name: 'Brasileiríssimo',
      rating: '4.7',
      time: '35 min',
      price: 'R$ 7,00',
    },
  ];

  const filtroMock = ['Ordenar', 'Entrega grátis', 'Vale-refeição', 'Promoções', 'Novidades'];

  const categorias = [
    { name: 'Restaurantes', icon: 'fast-food-outline' },
    { name: 'Mercados', icon: 'cart-outline' },
    { name: 'Farmácias', icon: 'medkit-outline' },
    { name: 'Promoções', icon: 'pricetag-outline' },
    { name: 'Bebidas', icon: 'beer-outline' },
    { name: 'Cupons', icon: 'ticket-outline' },
    { name: 'Gourmet', icon: 'restaurant-outline' },
    { name: 'Shopping', icon: 'bag-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.address}>R. Antônio Lando, 266</Text>
        <Icon name="notifications-outline" size={24} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Categorias principais */}
<View style={styles.categories}>
  {categorias.map((item, idx) => (
    <TouchableOpacity key={idx} style={styles.categoryItem}>
      <Icon name={item.icon} size={30} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  ))}
</View>

{/* Destaques */}
<Text style={styles.title}>Destaques</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontal}>
  {mockCards.map((card, index) => (
    <CardDestacado
      key={`dest-${index}`}
      image={card.image}
      avatar={card.avatar}
      name={card.name}
      rating={card.rating}
      time={card.time}
      price={card.price}
    />
  ))}
</ScrollView>

        {/* Seções com Card padrão */}
        {[ 
  { title: 'Culinária Brasileira', key: 'culinaria' },
  { title: 'Mais pedidos perto de você', key: 'popular' },
].map((section) => (
  <View style={styles.section} key={section.key}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <TouchableOpacity>
        <Text style={styles.verMais}>Ver mais</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {mockCards.map((card, index) => (
        <Card
          key={`${section.key}-${index}`}
          image={card.image}
          avatar={card.avatar}
          name={card.name}
          rating={card.rating}
          time={card.time}
          price={card.price}
        />
      ))}
    </ScrollView>
  </View>
))}

{/* Famosos no iFood */}
<Text style={styles.title}>Famosos no iFood</Text>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontal}>
  {[
    'Itália no Box Valinhos',
    'Spoleto Parque Prado',
    'Candreva Bar - Valinhos',
    'Restaurante Vó Cida',
    "McDonald's",
  ].map((name, idx) => (
    <FamosoItem
      key={idx}
      image={require('../assets/image.png')}
      name={name}
    />
  ))}
</ScrollView>

        {/* Filtros */}
        <FiltroHeader filtro={filtroMock} />

        {/* Lojas */}
        <Text style={styles.title}>Lojas</Text>
        <View>
          <LojaItem
            image={require('../assets/image.png')}
            name="Itália no Box Valinhos - Parmegiana"
            type="Brasileira"
            distance="2,1 km"
            rating="4.6"
            time="35-45 min"
            price="Grátis"
          />
          <LojaItem
            image={require('../assets/image.png')}
            name="Amigos e Napoletto"
            type="Brasileira"
            distance="0,7 km"
            rating="4.5"
            time="65-75 min"
            price="R$ 5,00"
          />
          <LojaItem
            image={require('../assets/image.png')}
            name="Feijoada de Vó"
            type="Marmita"
            distance="2,2 km"
            rating="4.6"
            time="21-31 min"
            price="R$ 8,99"
          />
        </View>

        {/* Seções com cards especiais */}
        {[ 
          {
            title: 'Promoções',
            component: CardPromocao,
            props: {
              image: require('../assets/image.png'),
              title: 'Desconto 50%',
              subtitle: 'Só hoje!',
            },
          },
          {
            title: 'Peça de novo',
            component: CardRepetido,
            props: {
              image: require('../assets/image.png'),
              name: 'Hamburgueria Top',
              lastOrder: 'Pedido em 10/04',
            },
          },
          {
            title: 'Exclusivos do app',
            component: CardExclusivo,
            props: {
              image: require('../assets/image.png'),
              label: 'Combo 2x1',
              description: 'Apenas no app',
            },
          },
          {
            title: 'Oferta do dia',
            component: CardDoDia,
            props: {
              image: require('../assets/image.png'),
              title: 'Marmita Feijuca',
              discount: '30% OFF',
              time: 'Até às 20h',
            },
          },
          {
            title: 'Categorias',
            component: CardCategoria,
            props: {
              icon: require('../assets/image.png'),
              label: 'Brasileira',
            },
          },
        ].map(({ title, component: Component, props }, idx) => (
          <View key={idx}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
              {[...Array(3)].map((_, i) => (
                <Component key={i} {...props} />
              ))}
            </ScrollView>
          </View>
        ))}
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
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
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
