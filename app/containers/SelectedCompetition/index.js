import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  currentUserProfileSelector,
  selectedPlantProjectSelector,
  selectedTpoSelector
} from '../../selectors';
import { updateStaticRoute, updateRoute } from '../../helpers/routerHelper';
import CompetitionFull from '../../components/Competition/CompetitionFull';

import {
  clearPlantProject,
  selectPlantProjectAction
} from '../../actions/selectPlantProjectAction';
import {
  confirmPart,
  cancelInvite,
  declinePart,
  enrollCompetition,
  invitePart,
  leaveCompetition
} from '../../actions/competition';
import CompetitionParticipant from '../../components/Competition/CompetitionParticipant.native';
import { supportTreecounterAction } from '../../actions/supportTreecounterAction';
import Challenge from '../../components/Challenge/createChallenge';

class SelectedCompetitionContainer extends Component {
  constructor(props) {
    super(props);
    const { match } = props;
    let competition_id = null;
    if (match) {
      competition_id = match.params.competition;
    } else if (props.navigation) {
      competition_id = props.navigation.getParam('competition', null);
    }
    this.state = {
      competition_id: competition_id
    };
    this.leaveCompetition = this.leaveCompetition.bind(this);
    this.enrollCompetition = this.enrollCompetition.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match) {
    } else if (nextProps.navigation && this.props.navigation) {
      if (nextProps.navigation !== this.props.navigation) {
        this.setState({
          competition_id: nextProps.navigation.getParam('competition', null)
        });
      }
    }
  }
  leaveCompetition(id) {
    this.props.leaveCompetition(id);
  }
  enrollCompetition(id) {
    this.props.enrollCompetition(id);
  }
  componentDidMount() {}

  render() {
    console.log(this.state, this.props);
    if (this.state.competition_id) {
      return (
        <CompetitionFull
          {...this.props}
          competition_id={this.state.competition_id}
          leaveCompetition={id => this.leaveCompetition(id)}
          enrollCompetition={id => this.enrollCompetition(id)}
          confirmPart={id => this.props.confirmPart(id)}
          declinePart={id => this.props.declinePart(id)}
          cancelInvite={id => this.props.cancelInvite(id)}
          supportTreecounterAction={this.props.supportTreecounterAction}
          currentUserProfile={this.props.userProfile}
          navigation={this.props.navigation}
          invitePart={(competition, competitor) =>
            this.props.invitePart(competition, competitor)
          }
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  userProfile: currentUserProfileSelector(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      leaveCompetition,
      enrollCompetition,
      confirmPart,
      declinePart,
      cancelInvite,
      invitePart,
      supportTreecounterAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SelectedCompetitionContainer
);

SelectedCompetitionContainer.propTypes = {
  match: PropTypes.any,
  navigation: PropTypes.any,
  leaveCompetition: PropTypes.any,
  enrollCompetition: PropTypes.any,
  confirmPart: PropTypes.any,
  declinePart: PropTypes.any,
  cancelInvite: PropTypes.any,
  supportTreecounterAction: PropTypes.any
};