/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Accordion from 'react-native-collapsible/Accordion';
import HTMLView from 'react-native-htmlview';
import { readmoreDown, readmoreUp, FAQsCover } from '../../assets';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking
} from 'react-native';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import { context } from '../../config';
import styles from '../../styles/faq';
import HeaderNew from './../Header/HeaderNew.native';

import i18n from '../../locales/i18n.js';

export default class FAQ extends Component {
  state = {
    activeSections: []
  };
  _renderHeader(section, index, isActive) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.question}</Text>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={isActive ? readmoreUp : readmoreDown}
        />
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <HTMLView
          value={`<div>${section.answer.replace(/(\r\n|\n|\r)/gm, '')}</div>`}
          stylesheet={styles}
          onLinkPress={url => {
            try {
              url = url.startsWith('/')
                ? `${context.scheme}://${context.host}${url}`
                : url;
            } catch (err) {
              // console.log(err);
            }

            //console.log('clicked link: ', url);
            Linking.openURL(url).catch(err => {
              console.log(err);
            });
          }}
        />
      </View>
    );
  }
  _updateSections = activeSections => {
    this.setState({ activeSections });
  };
  render() {
    return this.props.loading ? (
      <LoadingIndicator />
    ) : (
      <View style={{ flex: 1 }}>
        <HeaderNew
          title={i18n.t('label.faq')}
          navigation={this.props.navigation}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 72, paddingTop: 80 }}
        >
          <Image
            resizeMode="contain"
            source={FAQsCover}
            style={styles.faqcover}
          />
          <Accordion
            activeSections={this.state.activeSections}
            sections={this.props.faqs}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            touchableComponent={TouchableOpacity}
            onChange={this._updateSections}
          />
        </ScrollView>
        {/* <TabContainer {...this.props} /> */}
      </View>
    );
  }
}

FAQ.propTypes = {
  faqs: PropTypes.array.isRequired,
  loading: PropTypes.bool
};
