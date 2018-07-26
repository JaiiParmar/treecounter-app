import React from 'react';
import PropTypes from 'prop-types';

import ContributionCardList from './ContributionCardList';
import ContributionsMapLegend from './ContributionsMapLegend';
import TextHeading from '../Common/Heading/TextHeading';
import CardLayout from '../Common/Card/CardLayout';
import InlineLink from '../Common/InlineLink';
import i18n from '../../locales/i18n.js';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView
} from 'react-native';
import styles from '../../styles/my_trees.native';
import tabBarStyles from '../../styles/common/tabbar.native';

import PrimaryButton from '../Common/Button/PrimaryButton';
import { plantedTarget } from '../../assets';
import { getLocalRoute } from '../../actions/apiRouting';
import { TabView } from 'react-native-tab-view';

export default class UserContributions extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      routes: [
        {
          key: 'map',
          title: 'Map'
        },
        { key: 'list', title: 'List' }
      ]
    };
  }

  _renderTabBar = props => {
    return (
      <View style={tabBarStyles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={
                this.state.index === i
                  ? tabBarStyles.tabItemActive
                  : tabBarStyles.tabItem
              }
              key={'route' + i}
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text
                style={
                  this.state.index === i
                    ? tabBarStyles.textActive
                    : tabBarStyles.text
                }
              >
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _handleIndexChange = index => this.setState({ index });
  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'map':
        return (
          <View {...this.props} style={styles.mapContainer}>
            <Text>Map</Text>
            <ContributionsMapLegend />
          </View>
        );
        break;
      case 'list':
        return (
          <View {...this.props} style={styles.listContainer}>
            <Text>Tree List under progres</Text>
          </View>
        );
        break;
        return null;
    }
  };
  xw;

  render() {
    const { userProfileId, userContributions } = this.props;
    return (
      <ScrollView contentContaierStyle={styles.container}>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <PrimaryButton
              onClick={event => {
                setTimeout(() => {
                  this.props.navigation.navigate(
                    getLocalRoute('app_registerTrees')
                  );
                }, 0);
              }}
              image={plantedTarget}
            >
              Register new trees
            </PrimaryButton>
          </View>
          <TabView
            navigationState={this.state}
            renderScene={this._renderScene}
            renderTabBar={this._renderTabBar}
            onIndexChange={this._handleIndexChange}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          {Object.keys(userContributions).length > 0 ? (
            <View>
              <ArcGISContributionsMap userId={userProfileId} />
              <ContributionsMapLegend />
              <View className="contribution-container">
                <ContributionCardList contributions={userContributions} />
              </View>
              <View className="contribution-buttons">
                <TouchableHighlight
                  onPress={() => getLocalRoute('app_registerTrees')}
                >
                  <Text>{i18n.t('label.registerFurther')}</Text>
                  uri={'app_registerTrees'}
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => getLocalRoute('app_donateTrees')}
                >
                  uri={'app_donateTrees'}
                  <Text>{i18n.t('label.donate_trees')}</Text>
                </TouchableHighlight>
              </View>
            </View>
          ) : (
            <View className="no-contribution-wrapper">
              <Text>{i18n.t('label.no_contributions')}</Text>
            </View>
          )}
        </View> */}
      </ScrollView>
    );
  }
}

UserContributions.propTypes = {
  userProfileId: PropTypes.number.isRequired,
  userContributions: PropTypes.array.isRequired
};