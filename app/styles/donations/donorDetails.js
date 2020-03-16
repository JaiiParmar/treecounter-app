import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const width = Dimensions.get('window').width;
export default EStyleSheet.create({
  scrollView: {
    padding: 24,
    marginTop: 72,
    paddingBottom: 240
  },
  pageTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 27,
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4d5153'
  },

  // Project Details
  projectDetails: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  projectImage: {
    height: 32,
    width: 32,
    borderRadius: 16
  },
  projectNameAmount: {
    marginLeft: 10
  },
  projectName: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    lineHeight: 24,
    color: '#4d5153',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '95%'
  },
  projectAmountView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  projectAmountImage: {
    height: 14,
    width: 14
  },
  projectAmountText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    color: '#4d5153',
    marginLeft: 10
  },

  // Gift Details
  giftDetails: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  giftImage: {
    height: 32,
    width: 32,
    borderRadius: 16
  },
  giftNameAmount: {
    marginLeft: 10
  },
  giftName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    letterSpacing: 0.21,
    textAlign: 'left',
    color: '#4d5153',
    display: 'flex',
    flexWrap: 'wrap'
  },
  giftRecipient: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    color: '#4d5153'
  },

  // Tree Count Selector

  treeCountSelector: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  selectorView: {
    borderRadius: 7,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    height: 54,
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: width * 0.24
  },
  treeCountText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    color: '#4d5153',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 42
  },
  selectedView: {
    borderRadius: 7,
    backgroundColor: '#89b53a',
    height: 54,
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    width: width * 0.24
  },
  selectedTreeCountText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 42
  },

  // Custom Tree Count Selector
  customSelectorView: {
    borderRadius: 7,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    height: 54,
    paddingVertical: 24,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    flexGrow: 1,
    width: width * 0.6
  },
  customSelectedView: {
    borderRadius: 7,
    backgroundColor: '#89b53a',
    height: 54,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    flexGrow: 1,
    width: width * 0.6,
    display: 'flex',
    flexDirection: 'row'
  },
  customTreeCountText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#4d5153',
    display: 'flex',
    flexWrap: 'wrap'
  },

  // Donation Frequency
  repititionSelector: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20
  },
  repititionText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#4d5153'
  },
  repititionSelectorView: {
    borderRadius: 7,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    height: 54,
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.26
  },
  selectedRepititionText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff'
  },
  repititionSelectedView: {
    borderRadius: 7,
    backgroundColor: '#89b53a',
    height: 54,
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.26
  },

  // Horizontal Divider
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: '#d5d5d5',
    marginTop: 20
  },

  // Commission
  coverCommissionText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.6)',
    width: width * 0.7
  },
  coverCommissionView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between'
  },

  // Tax Deductible
  notTaxDeductible: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 20
  },
  isTaxDeductibleText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 0.6)',
    width: width * 0.7
  },
  isTaxDeductibleView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between'
  },

  // Payment Process

  paymentProcessText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.6)',
    marginTop: 20
  },

  // Country For Tax

  countryForTaxText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 200
  },

  // Payment Button
  bottomButtonView: {
    width: '100%',
    backgroundColor: '#f2f2f7',
    height: 96,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  leftSection: {
    padding: 20,
    width: width * 0.75
  },
  paymentTreeAmount: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#89b53a',
    fontFamily: 'OpenSans-Bold'
  },
  paymentTreeCount: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4d5153',
    marginLeft: 8
  },
  paymentTreeDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  otherPaymentButton: {
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  donationTree: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#707070',
    marginLeft: 6,
    fontFamily: 'OpenSans-SemiBold'
  },
  otherPaymentText: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4d5153',
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold'
  },
  continueButtonView: {
    backgroundColor: '#89b53a',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: width * 0.25
  },
  continueButtonText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.21,
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 6
  },

  // Input Selection

  treeCountTextInput: {
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 0,
    width: 50,
    color: '#fff'
  },
  treeCountTextInputSelected: {
    borderColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 0,
    width: 50,
    color: '#fff'
  },
  treeCountNumber: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#4d5153',
    fontFamily: 'OpenSans-Regular'
  },
  treeCountNumberSelected: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'OpenSans-Regular'
  },

  // Donor Form

  formScrollView: {
    backgroundColor: 'white',
    flexGrow: 1,
    padding: 24,
    paddingBottom: 100,
    minHeight: '100%'
  },
  formHalfTextField: { width: '45%' },

  formView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40
  }
});