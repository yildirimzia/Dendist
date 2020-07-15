import * as React from 'react';
import {View, Text, StyleSheet,Linking} from 'react-native';
import {Facebook, İnstagram,Linkedin,Twitter} from '../components/icons';



function Adress() {
  return (
    <View style={adress.container}>
      <Text style={adress.contactTitle}>İletişim</Text>
      <Text style={adress.contactContent}>
        Bilgi almak için iletisim@tduymaz.com adresine mail atabilir veya telefonumuzdan ulaşabilirsiniz.
      </Text>
      <Text style={adress.wp}>Telefon / Whatsapp: 0543 482 8640</Text>
      <Text style={adress.wp}>
        Adres:
        <Text style={adress.adressDetail}>Feneryolu Mahallesi, Bağdat Caddesi, No:117/8, 34726 Kadıköy, İstanbul</Text>
      </Text>
      <View style={adress.iconsStyle}>
        <Text onPress={() => Linking.openURL('http://facebook.com/dttduymaz')}>
          <Facebook style={adress.iconFacebook}/>
        </Text>
        <Text onPress={() => Linking.openURL('https://www.instagram.com/tduymaz/')}>
          <İnstagram style={adress.iconInstagram} />
        </Text>
        <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/tugbaduymaz/')}>
        <Linkedin style={adress.iconLinkledin} />
        </Text>
        <Text onPress={() => Linking.openURL('https://twitter.com/DuymazTugba')}>
          <Twitter style={adress.iconTwitter} />
        </Text>
      </View>
    </View>
  );
}

const adress = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex:1,
    shadowColor: 'black',
    padding: 20,
    shadowOpacity: .1,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,

  },
  contactTitle: {
   fontSize: 35,
   marginTop: 10,
   textAlign: 'center',
  },
  contactContent: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  wp: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  adressDetail: {
    fontWeight: '400',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  iconsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop:50,
  },
  iconFacebook: {
    color: '#3b5998',
  },
  iconInstagram: {
    color: '#3f729b',
  },
  iconLinkledin: {
    color: '#0072b1',
  },
  iconTwitter: {
    color: '#00acee',
  }
})

export default Adress;