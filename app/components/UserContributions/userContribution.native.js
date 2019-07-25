import React from 'react';
import PropTypes from 'prop-types';
// import i18n from '../../locales/i18n.js';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/newUserContributions/userContributions';

import EditIcon from '../../assets/images/pencil.png';
import DeleteIcon from '../../assets/images/baseline_delete_outline.png';
import ArrowRight from '../../assets/images/arrow-right.png';
import CalendarIcon from '../../assets/images/green-calendar.png';
import TreeIcon from '../../assets/images/green-tree.png';

export default class UserContributions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _handleIndexChange = index => this.setState({ index });

  render() {
    const props = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 2, paddingTop: 20 }}>
          <Text style={styles.treeCount}>
            {props.treeCount ? props.treeCount + '  Trees' : 0 + '  Trees'}
          </Text>
          <Text style={styles.text}>
            <Image source={TreeIcon} style={styles.icon} />
            {props.location ? '  ' + props.location : '  none'}
          </Text>
          <Text style={styles.text}>
            <Image source={ArrowRight} style={styles.icon} />
            {props.dedicatedTo
              ? '  Dedicated to ' + props.dedicatedTo
              : '  Dedicated to none'}
          </Text>
          <Text style={styles.text}>
            <Image source={CalendarIcon} style={styles.icon} />
            {props.plantedDate ? '  ' + props.plantedDate : '  none'}
          </Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.plantedButtonWrapper}>
            <Text style={styles.plantedText}>Planted</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={props.onClickDeleteUserContributor}
              style={styles.button}
            >
              <Image style={styles.image} source={DeleteIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onClickEditUserContributor}
              style={styles.button}
            >
              <Image style={styles.image} source={EditIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

UserContributions.PropTypes = {
  treeCount: PropTypes.number,
  location: PropTypes.string,
  dedicatedTo: PropTypes.string,
  plantedDate: PropTypes.string,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func
};
