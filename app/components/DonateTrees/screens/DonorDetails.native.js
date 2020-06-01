import { Formik } from 'formik';
import React, { useEffect, useState, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  Keyboard,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-material-textfield';
import * as Yup from 'yup';
import { nextArrowWhite } from '../../../assets';
import { updateStaticRoute } from '../../../helpers/routerHelper';
import i18n from '../../../locales/i18n.js';
import styles from '../../../styles/donations/donorDetails';
import { formatNumber } from '../../../utils/utils';
import HeaderAnimated from '../../Header/HeaderAnimated.native';
import GooglePlacesInput from '../components/AutoComplete.native';
import {
  SelectCountryModal,
} from '../components/donationComponents.native';
import countryData from '../../../assets/countryCodes.json';

import {
  getCountryFlagImageUrl
} from '../../../actions/apiRouting';


export function getCountryData(countryCode) {
  return countryData.find(c => c.countryCode == countryCode) || {};
}
const DonationContactDetailsSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'First name is too short!')
    .max(50, 'First name is too long!')
    .required('First name is required'),
  lastname: Yup.string()
    .min(2, 'Last name is too short!')
    .max(50, 'Last name is too long!')
    .required('Last name is equired'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  address: Yup.string()
    .required('Address is required'),
  city: Yup.string()
    .required('City is required'),
  zipCode: Yup.string()
    .required('Zip Code is required'),
  country: Yup.string()
    .required('Country is required'),
});

export default function DonorDetails(props) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [buttonType, setButtonType] = useState('donate');
  const [isCompanySwitch, setisCompanySwitch] = React.useState(false); // for Switching whether the user wants receipt or not
  const [showCountryModal, setShowCountryModal] = React.useState(false);

  let countryCodes = countryData;
  countryCodes = countryCodes.map(a => a.countryCode);
  countryCodes = countryCodes.sort();

  let lastnameRef = useRef(null);
  let emailRef = useRef(null);
  let addressRef = useRef(null);

  const keyboardDidShow = () => {
    setButtonType('>');
  };

  const keyboardDidHide = () => {
    setButtonType('donate');
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );

    // clean up
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <HeaderAnimated
        scrollY={scrollY}
        navigation={props.navigation}
        title={'Contact Details'}
      />

      {/* <KeyboardAwareScrollView
        contentContainerStyle={[styles.scrollView]}
        keyboardDismissMode="on-drag"
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
        extraScrollHeight={32}
        extraHeight={32}
        enableOnAndroid
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
      > */}
      <Formik
        initialValues={{
          firstname: props.currentUserProfile
            ? props.currentUserProfile.firstname
            : '',
          lastname: props.currentUserProfile
            ? props.currentUserProfile.lastname
            : '',
          email: props.currentUserProfile ? props.currentUserProfile.email : '',
          address: props.currentUserProfile
            ? props.currentUserProfile.address
            : '',
          city: props.currentUserProfile
            ? props.currentUserProfile.city
            : '',
          zipCode: props.currentUserProfile
            ? props.currentUserProfile.zipCode
            : '',
          country: props.currentUserProfile
            ? props.currentUserProfile.country
            : '',
          isCompany: false,
          companyName: ''
        }}
        validationSchema={DonationContactDetailsSchema}
        onSubmit={values => {
          props.contextActions.setDonorDetails(values);
          updateStaticRoute('payment_details_form', props.navigation, {
            navigation: props.navigation,
            paymentSetup: props.paymentSetup
          });
        }}
      >
        {formikProps => (
          <>
            <KeyboardAwareScrollView
              contentContainerStyle={styles.scrollView}
              keyboardDismissMode="on-drag"
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled
              extraScrollHeight={32}
              extraHeight={32}
              enableOnAndroid
              scrollEventThrottle={16}
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: scrollY } } }
              ])}
            >
              <View>
                <View style={styles.formView}>
                  <View style={[styles.formHalfTextField, { zIndex: 2 }]}>
                    <TextField
                      label={i18n.t('label.pledgeFormFName')}
                      value={formikProps.values.firstname}
                      tintColor={'#89b53a'}
                      baseColor={'#D5D5D5'}
                      titleFontSize={12}
                      returnKeyType="next"
                      lineWidth={1}
                      labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                      affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      style={{ fontFamily: 'OpenSans-Regular' }}
                      blurOnSubmit={false}
                      error={
                        formikProps.touched.firstname &&
                        formikProps.errors.firstname
                      }
                      onChangeText={formikProps.handleChange('firstname')}
                      onBlur={formikProps.handleBlur('firstname')}
                      onSubmitEditing={() => {
                        lastnameRef.focus();
                      }}
                    />
                  </View>

                  <View style={styles.formHalfTextField}>
                    <TextField
                      label={i18n.t('label.pledgeFormLName')}
                      value={formikProps.values.lastname}
                      tintColor={'#89b53a'}
                      baseColor={'#D5D5D5'}
                      titleFontSize={12}
                      returnKeyType="next"
                      lineWidth={1}
                      labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                      affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      style={{ fontFamily: 'OpenSans-Regular' }}
                      error={
                        formikProps.touched.lastname &&
                        formikProps.errors.lastname
                      }
                      ref={input => {
                        lastnameRef = input;
                      }}
                      onChangeText={formikProps.handleChange('lastname')}
                      onBlur={formikProps.handleBlur('lastname')}
                      onSubmitEditing={() => {
                        emailRef.focus();
                      }}
                    />
                  </View>
                </View>

                <View style={{ marginTop: 12 }}>
                  <TextField
                    label={i18n.t('label.pledgeFormEmail')}
                    value={formikProps.values.email}
                    tintColor={'#89b53a'}
                    baseColor={'#D5D5D5'}
                    titleFontSize={12}
                    lineWidth={1}
                    keyboardType="email-address"
                    error={
                      formikProps.touched.email && formikProps.errors.email
                    }
                    labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                    titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                    affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                    style={{ fontFamily: 'OpenSans-Regular' }}
                    returnKeyType="next"
                    ref={input => {
                      emailRef = input;
                    }}
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                  // onSubmitEditing={() => {
                  //   addressRef.focus();
                  // }}
                  />
                </View>

                <View style={{ marginTop: 12 }}>
                  <TextField
                    label={i18n.t('Address')}
                    value={formikProps.values.address}
                    tintColor={'#89b53a'}
                    baseColor={'#D5D5D5'}
                    titleFontSize={12}
                    lineWidth={1}
                    error={
                      formikProps.touched.address && formikProps.errors.address
                    }
                    labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                    titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                    affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                    style={{ fontFamily: 'OpenSans-Regular' }}
                    returnKeyType="next"
                    ref={input => {
                      addressRef = input;
                    }}
                    onChangeText={formikProps.handleChange('address')}
                    onBlur={formikProps.handleBlur('address')}
                  />
                </View>


                <View style={styles.autoCompleteAddressView}>
                  <GooglePlacesInput
                    placeholder={'City'}
                    initialValue={
                      formikProps.values.city
                        ? formikProps.values.city
                        : ''
                    }
                    setFieldValue={formikProps.setFieldValue}
                  />
                </View>

                {!formikProps.errors.city ? null : (
                  <View>
                    <Text
                      style={{
                        color: '#e74c3c',
                        marginTop: 64,
                        fontFamily: 'OpenSans-SemiBold',
                        fontSize: 12
                      }}
                    >
                      {formikProps.values.city
                        ? null
                        : formikProps.errors.city}
                    </Text>
                  </View>
                )}

                <View style={styles.formView}>
                  <View style={[styles.formHalfTextField, { zIndex: 2 }]}>
                    <TextField
                      label={'Zip code'}
                      value={formikProps.values.zipCode}
                      tintColor={'#89b53a'}
                      baseColor={'#D5D5D5'}
                      titleFontSize={12}
                      returnKeyType="next"
                      lineWidth={1}
                      labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                      affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      style={{ fontFamily: 'OpenSans-Regular' }}
                      blurOnSubmit={false}
                      error={
                        formikProps.touched.zipCode &&
                        formikProps.errors.zipCode
                      }
                      onChangeText={formikProps.handleChange('zipCode')}
                      onBlur={formikProps.handleBlur('zipCode')}
                    // onSubmitEditing={() => {
                    //   lastnameRef.focus();
                    // }}
                    />
                  </View>

                  <TouchableOpacity
                    style={[styles.formHalfTextField, {
                      borderBottomWidth: 1,
                      borderBottomColor: '#D5D5D5',
                      flex: 1,
                      marginLeft: 24,
                      alignSelf: 'flex-end',
                      marginBottom: 8,
                      paddingBottom: 6
                    }]}
                    onPress={() => setShowCountryModal(
                      prevTaxCountryModal => !prevTaxCountryModal
                    )}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        source={{
                          uri: getCountryFlagImageUrl(
                            getCountryData(formikProps.values.country).currencyCountryFlag,
                            'png',
                            256
                          )
                        }}
                        style={{ width: 24, height: 15 }}
                      />
                      <Text
                        style={{
                          paddingLeft: 12,
                          lineHeight: 22,
                          flex: 1,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: 16,
                          color: '#111'
                        }}
                      >
                        {getCountryData(formikProps.values.country).country}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <SelectCountryModal
                    selectedCountry={formikProps.values.country}
                    showModal={showCountryModal}
                    setShowModal={setShowCountryModal}
                    setFormikValue={formikProps.setFieldValue}
                    taxDeductibleCountries={countryCodes}
                  />

                  {/* <View style={styles.formHalfTextField}>
                    <TextField
                      label={'Country'}
                      value={formikProps.values.country}
                      tintColor={'#89b53a'}
                      titleFontSize={12}
                      returnKeyType="next"
                      lineWidth={1}
                      labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                      affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      style={{ fontFamily: 'OpenSans-Regular' }}
                      error={
                        formikProps.touched.country &&
                        formikProps.errors.country
                      }
                      // ref={input => {
                      //   countryRef = input;
                      // }}
                      onChangeText={formikProps.handleChange('country')}
                      onBlur={formikProps.handleBlur('country')}
                    // onSubmitEditing={() => {
                    //   emailRef.focus();
                    // }}
                    />
                  </View> */}
                </View>



                <View style={styles.coverCommissionView}>
                  <Text style={styles.coverCommissionText}>
                    This is a Company Donation
                  </Text>
                  <Switch
                    style={styles.coverCommissionSwitch}
                    onValueChange={value =>
                      formikProps.setFieldValue('isCompany', value)
                    }
                    thumbColor={
                      formikProps.values.isCompany ? '#89b53a' : '#bdc3c7'
                    }
                    trackColor={{
                      false: '#f2f2f7',
                      true: 'rgba(137, 181, 58, 0.6)'
                    }}
                    value={formikProps.values.isCompany}
                  />
                </View>
                {formikProps.values.isCompany ? (
                  <View>
                    <TextField
                      label={'Company Name'}
                      value={formikProps.values.companyName}
                      tintColor={'#89b53a'}
                      titleFontSize={12}
                      lineWidth={1}
                      error={
                        formikProps.touched.companyName &&
                        formikProps.errors.companyName
                      }
                      labelTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      titleTextStyle={{ fontFamily: 'OpenSans-SemiBold' }}
                      affixTextStyle={{ fontFamily: 'OpenSans-Regular' }}
                      returnKeyType="next"
                      onChangeText={formikProps.handleChange('companyName')}
                      onBlur={formikProps.handleBlur('companyName')}
                    />
                  </View>
                ) : null}
              </View>
            </KeyboardAwareScrollView>
            {props.context &&
              props.context.donationDetails &&
              props.context.projectDetails &&
              props.context.donationDetails.totalTreeCount ? (
                <PaymentOption
                  treeCount={props.context.donationDetails.totalTreeCount}
                  treeCost={props.context.projectDetails.amountPerTree}
                  selectedCurrency={props.context.projectDetails.currency}
                  navigation={props.navigation}
                  onSubmit={formikProps.handleSubmit}
                  isValid={formikProps.isValid}
                />
              ) : (
                <ActivityIndicator size="large" color="#0000ff" />
              )}
          </>
        )}
      </Formik>
      {/* </KeyboardAwareScrollView> */}

    </View>
  );
}

export function PaymentOption(props) {
  return (
    <View style={styles.bottomButtonView}>
      <View style={styles.leftSection}>
        <View style={styles.paymentTreeDetails}>
          <Text style={styles.paymentTreeAmount}>
            {formatNumber(
              props.commissionSwitch
                ? props.treeCost * props.treeCount +
                ((props.treeCount / 100) * 2.9 + 0.3)
                : props.treeCost * props.treeCount,
              null,
              props.selectedCurrency
            )}
          </Text>
          <Text style={styles.paymentTreeCount}>
            for {props.treeCount} trees
          </Text>
        </View>

        {/* <TouchableOpacity style={styles.otherPaymentButton}>
            <Text style={styles.otherPaymentText}>Other payment methods</Text>
          </TouchableOpacity> */}
        <View>
          <Text style={styles.otherPaymentText}>Click Next to proceed</Text>
        </View>
      </View>
      {props.isValid ? (
        <TouchableOpacity
          onPress={() => {
            props.onSubmit();
          }}
          style={styles.continueButtonView}
        >
          <Text style={styles.continueButtonText}>Next</Text>
          <Image
            style={{ maxHeight: 24, maxWidth: 24 }}
            source={nextArrowWhite}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
          <View style={[styles.continueButtonView, { backgroundColor: 'grey' }]}>
            <Text style={styles.continueButtonText}>Next</Text>
            <Image
              style={{ maxHeight: 24, maxWidth: 24 }}
              source={nextArrowWhite}
              resizeMode="contain"
            />
          </View>
        )}
    </View>
  );
}

DonorDetails.navigationOptions = {
  header: null
};