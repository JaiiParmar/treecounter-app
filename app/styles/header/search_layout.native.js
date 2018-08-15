import EStyleSheet from 'react-native-extended-stylesheet';

export default (styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  searchResult: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profileImage: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  profileText: {
    fontSize: 20,
    color: '#b9d384'
  }
}));