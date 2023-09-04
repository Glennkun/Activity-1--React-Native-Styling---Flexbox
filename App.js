import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import pic from './assets/pic.jpg';

const PP = () => {
  return (
    <View>
      <Image source={pic} style={styles.pp} />
    </View>
  );
};

const Profile = () => {
  const fname = 'Rodel Glenn';
  const lname = 'Jawa';
  return (
    <View>
      <Text style={styles.profile}>{fname} {lname}</Text>
    </View>
  );
};

const Course = (props) => {
  return (
    <View>
      <Text style={styles.course}>{props.like}</Text>
    </View>
  );
};

const Subject = (props) => {
  return (
    <View style={styles.sublist}>
      <Text style={styles.sub}>{props.subcode}</Text>
      <View>
        <Text style={styles.subdesc}>{props.subdesc}</Text>
        <Text style={styles.units}>Units: {props.units}</Text>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <PP />
        <Profile />
        <Course like="BS INFORMATION TECHNOLOGY" />
      </View>

      <Text style={styles.subtitle}>My Subjects</Text>

      <Subject subcode='ELEC 2' subdesc='Web Development/Web Enterprise' units='3' />
      <Subject subcode='ELEC 3' subdesc='Mobile Application' units='3' />
      <Subject subcode='IT 311' subdesc='Software Engineering' units='3' />
      <Subject subcode='IT 312' subdesc='Information Assurance and Security 2' units='3' />
      <Subject subcode='IT 313' subdesc='Quantitative Methods' units='3' />

      <Text style={styles.clickhere}>Click here to see more</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  head: {
    height: 260,
    width: 350,
    backgroundColor: '#24469C',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 40,
    marginBottom: 30,
  },
  pp: {
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 20,
  },
  course: {
    color: '#fff',
    marginLeft: 20,
  },
  subtitle: {
    marginRight: 248,
    fontSize: 20,
    marginBottom: 5,
  },
  sublist: {
    backgroundColor: '#DCDCDC',
    borderRadius: 5,
    marginBottom: 8,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 360,
   

  },
  sub: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subdesc: {
    marginLeft: 30,
  },
  units: {
    marginLeft: 30,
  },
  clickhere: {
    marginTop: 15,
    marginLeft: 180,
    fontSize: 18,
    marginBottom: 40,
    color: '#24469C',
  },
});

