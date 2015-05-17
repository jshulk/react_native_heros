/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var _ = require("lodash");
var Cards = require("./data/cards");
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} = React;

var fm = React.createClass({
  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row !== row2
      })
    }
  },
  componentDidMount: function(){
    var garrosh = _(Cards.cards).findWhere({id: 7}),
      mind_control = _(Cards.cards).findWhere({id: 8});

      garrosh.image = require("image!warrior_garrosh_hellscream");
      mind_control.image = require("image!priest_mind_control");

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([garrosh, mind_control])
    })
  },
  render: function() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderCard}>

      </ListView>
      
    );
  },
  renderCard: function(card){
    return (
      <View style={styles.listView} >
        <Image  style = {styles.thumbnail} source={card.image} ></Image>
        <View style={styles.cardMetaData} >
          <Text style={styles.text}>{card.name}</Text>
          <Text style={styles.text}>Hero: {card.hero}</Text>
          <Text style={styles.text}>{card.mana} Mana</Text>
          <Text style={styles.text}>{card.description}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: "#625255"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cardMetaData: {
    flex: 1
  }
});

AppRegistry.registerComponent('fm', () => fm);
