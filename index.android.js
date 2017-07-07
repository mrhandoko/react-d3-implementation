/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryArea, VictoryStack, VictoryLine } from "victory-native";

const data = [
  {
    "date": "2017-06-29",
    "prev_growth": 2173.5033,
    "growth_amount": 0
  },
  {
    "date": "2017-06-30",
    "prev_growth": 2173.5033,
    "growth_amount": 0
  },
  {
    "date": "2017-07-01",
    "prev_growth": 2173.5033,
    "growth_amount": 0
  },
  {
    "date": "2017-07-02",
    "prev_growth": 2173.5033,
    "growth_amount": 0
  },
  {
    "date": "2017-07-03",
    "prev_growth": 2173.5033000000003,
    "growth_amount": 73.4716
  },
  {
    "date": "2017-07-04",
    "prev_growth": 2246.9749,
    "growth_amount": 802.1553
  },
  {
    "date": "2017-07-05",
    "prev_growth": 3049.1302,
    "growth_amount": 70.6102
  }
    ];

const bar1Property = {};
const bar2Property = {};
const xTick = data.map((x, index) => {
  if (index === 0 || index === data.length-1) {
    const date = new Date(x.date);
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return month[date.getMonth()-1] + ' ' + date.getFullYear();
  } else {
    return "";
  }
})

if (data.length === 7) {
  bar1Property = {
    data: {fill: "#A2D8D3", width: 18, strokeWidth: 0}
  };
  bar2Property = {
    data: {fill: "#009688", width: 18, strokeWidth: 0}
  };
} else {
  bar1Property = {
    data: {fill: "#A2D8D3", strokeWidth: 0}
  };
  bar2Property = {
    data: {fill: "#009688", strokeWidth: 0}
  };
}

export default class petope extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
        >
        <VictoryAxis
          dependentAxis
          tickFormat={(y) => (`${y / 1000} juta`)}
          style={{
              axis: {stroke: "none"},
              axisLabel: {fontSize: 16, padding: 20},
              grid: {stroke: "#c4c4c4", strokeDasharray: "0", strokeWidth: 0.5},
              ticks: {stroke: "none"},
              tickLabels: {fontSize: 10, padding: 5}
          }}
        />
        <VictoryAxis
          tickFormat={xTick}
          style={{
              axis: {stroke: "#C4C4C4", strokeWidth: 0.5},
              axisLabel: {fontSize: 16, padding: 20},
              grid: {stroke: "none"},
              ticks: {stroke: "none"},
              tickLabels: {fontSize: 10, padding: 5}
          }}
        />
            <VictoryStack
            >
                <VictoryBar
                  data={data}
                  style={bar1Property}
                  x="date"
                  y="prev_growth"
                />
                <VictoryBar
                  style={bar2Property}
                  data={data}
                  x="date"
                  y="growth_amount"
                />
            </VictoryStack>
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('petope', () => petope);
