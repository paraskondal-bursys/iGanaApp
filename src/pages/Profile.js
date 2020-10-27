
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
  Image,
  Platform,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Linking,
} from "react-native";
import { Container, CheckBox, Button } from "native-base";
import  Images  from "../service/constants/Images";
import  Icon  from "../components/common/Icon";

const { width, height } = Dimensions.get("screen");

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.profile}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#f1f1f1" }} >
            <View style={styles.profileCard}>
              <Image source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEWutL/r7fLu8PWrsbypsLuwtsHp6/C0usTM0Njb3uXl5+3V2eC7wMrBxs++w8zh5OrIzNTR1dzMz9j/umIVAAAGIklEQVR4nO2d25ajIBBFkfISb9H0/3/siKbTJh3TAlVycNhP02vNQ/YCqqAAUSqRSCQSiUQikUgkEolEIpFIJBIJP+jlT0M+Mf8jzE/ihKi/0c8fVFzHWz00TVmWw1Dfxk7FbUlqbHSzKBBVfdtkWuvsgfljuHWvzRwNRGM56Qzm90+uQ7Zyy9aaZdtF2ZJ0bWalyZCqtnyv9y3ZjNE1JBX13WnIq1Z/8lskyzGudsz7R58cvv72WxyveeifvR9q1/Fkj9/8H+toumox7LZ6VsyuUShSVTr5zY63CBSpc/YzikOF7ugnaOjBFStfwUy32IruY/BHsQHuqbljFH11hO2pdGERND01tMoGHZMgbEylgUvQANhTaWRrQgNiTGWIo0+KaDGVLcysHHus5QZzE86KSD2VevYmzLB6Km8gXTGiKPpPSDfQdQHhyJwqnhRLiIUx1VKC2RxwwjuSoCBGmYpvSrrhGHo0Cg7Db8XsEtbwJm2YZWVYQ8lAsxC4DieW738I24SKGmlB3QU2FBcMPXkj6WRxCZ3yhQ0Bqv3CU5rwgrKG4buoEo6lbfA5qRLOhwNAE8rOacoitJ4SnpfqKrSeEl5b6GtoPYPk+jD4fGamOL1hLpguIPKhovb0hoKhBqOXylWEUWKp5LwNIh++nGVjBsNQXcUMIWZtBoH9wwWImbeS7KY1iKHYxA1hhb8gFU1B0qESOaqwGGKkQ0MlZAiSLJTcQj+01wqZWNOgDMMJEkmJMMlCCVXccJKFElokQh2nFckXobfVnpGYfWugJpSpRyGFUqVyfkGoUDohMDVFOoCpCol8qIEakXhuW/xShEmIYgVFmKm3WLUN5iy03OZM4MNC30gtgDOYaY3gNjBIHUNwKx9ja0bUECNf/AeG5x+Hclszug8tN0NfZ88WgptPKNtrQgXhDGgRLLa9hjIvFQumIKFU6gaiAWQYTggJouwBix1QBNpdk4k1SHUakYShm9BST1DFXYyCqWA8oJ7TUdc4V7kfEGc1A+IC8G9ytm+4dJiCfFvBUEH0CaaVItTW6DNMxW+NcmDvDTy14RLhMtAGPPe8cIchU9kNpEj6HpaUiFKceQ/LQARuQp6MiDwMWTIicDacYagsAmdDg/d+MN6q6QXvaIodSQ2+B0+w44zBsxHxm9AzYcCPQgN5hVPwQLrgUT3VoNWLV5wPgYFsau/AMZ5ilYA/43avFKsE/BmnaANz23AXDlkRt4T4HuvVfjxR5o59P42qjxpspzYxTGaesbxGg77ufYNldRjmwPN+LI8vINe5t7ALNTr0z3Xg/IaWvTT0z7Xn/OPwP4ildjPTGOozL1hWv2PM+HZTb+gttffYzksjWt/fsb03C3MceC/WZ06jSxfW22zxhRrrcltsA9GhFBVXN3U43A5zbH0fLidqo4qmVDsYRtWIbodOQG797sFxM19DfN16D7nrkZNYcqLPFZooVonkc/Irht0Zz1dzG3hF32eBdYPxFNkmuf81thLwpsUPLEfZ0Z53XMF1NUi3oK/J08ihNytiPJr3AnWs955atIBDBfNnB3R2AXgY8AHRJeN/T7bscxBHUgJ+s2PTI7QjFUJ+II5U3eT8ZsfyK2DMIbrWsn6zY9ZWYRpy6p6N/OuOs6Ouj++sU/O18s23kixvBzYkUV5dygP1Fkc9jOoISaKibxt9tN9dsh4LWUmiahyyMHp3yazu5ablVBi9cHbfkmZIivhVh4aWT0y9lf8sKnV1yM75Cz3wrq9y1pURD3ro2EoBVLnsQsjD9e0MUge8S+2IvjHEVboentst0I33cDziYXEvPK+CUXXQ3NoD3XiMRupD//xduO+ssn1uRhrXnir5nhozenASxEyC79EOW1ZRCWYO+zmxCVorRjQGH5Q2O+TRRNEnLMai3Nc6Zdl/B1Xuq7my7L9HLPnkvSg7b2nGGGW+2XXkyO+TCMHZE23EPux8CH9/mDfmPmr4+96G5HP3h/DXBSrBlxyO4nM/jTXXr/kcTwVfET+O8oPhGZrwc7DJz9CEH2/cRh9IF7Ynb4IPxhzMVhNKPEQZBP31vhEFXxc7mo3rN6dIFQsbryqcJM7MrNbC/wBt62JzepWBPgAAAABJRU5ErkJggg==" }} style={styles.avatar} />
            </View>
            <View style={[styles.body, styles.border]}>
              <Icon style={styles.icon} name="ios-mail" family="Ionicons" size={28} />
              <Text style={[styles.item, {fontSize:16}]}>Paras Kondal</Text>
            </View>
            <View style={styles.body}>
              <Icon style={styles.icon} name="phone-in-talk" family="MaterialIcons" size={28} />
              <Text style={[styles.item, {fontSize:16}]}>+91-7887956985</Text>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    backgroundColor: "#f1f1f1",
    paddingTop: 20,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    height: 100,
    backgroundColor:"blue"
  },
  profileCard: {
    paddingBottom:10,
    backgroundColor: "#f1f1f1"
  },
    item:{
      marginLeft:10,
      alignSelf:"center",
      color:"gray"
    },
    body: {
      flexDirection:"row"
      ,backgroundColor: "#fff",
      textAlign:"center",
      padding:10,
      paddingLeft:10,
    },
    icon:{
      color:"gray"
    },
    border: {
      borderBottomColor:"#dddddd",
      borderBottomWidth:1
    },
    avatar: {
      width: 200,
      height: 200,
      borderRadius: 62,
      borderWidth: 0,
      alignSelf: "center"
    },

});

