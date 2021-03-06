import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

let lineBreakMargin = -20;
if (Platform.OS === 'android') {
  lineBreakMargin = -30;
}
export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 15,
    textAlign: 'left',
    color: '#4d5153',
    paddingRight: 12,
    flex: 1,
    fontFamily: 'OpenSans-SemiBold',
    marginTop: 12
  },
  content: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 14,
    height: 14
  },
  faqcover: {
    width: width * 0.6,
    height: width * 0.6 * 0.83,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 12
  },

  a: {
    fontWeight: '300',
    color: '$colorPrimaryAccent'
  },
  p: { color: '#938989', fontFamily: 'Open Sans' },
  br: { marginBottom: lineBreakMargin }
});
