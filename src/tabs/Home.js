import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <View style={styles.header}>
        <View style={styles.header2}>
          <View style={styles.headerLeftView}>
            <View>
              <Image
                source={require('../images/man.png')}
                style={styles.user}
              />
              <Image
                source={require('../images/flag.png')}
                style={styles.flag}
              />
            </View>
            <View style={{marginLeft: moderateScale(10)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.home}>Home</Text>
                <Image
                  source={require('../images/down.png')}
                  style={styles.dropdown}
                />
              </View>
              <Text style={styles.address}>
                Fakhri makan taherabad galiakot
              </Text>
            </View>
          </View>

          <View style={styles.headerRightView}>
            <Image
              source={require('../images/qr-code.png')}
              style={styles.icon}
            />
            <Image
              source={require('../images/bell.png')}
              style={[
                styles.icon,
                {
                  marginLeft: moderateScale(15),
                  marginRight: moderateScale(15),
                },
              ]}
            />
            <Image source={require('../images/help.png')} style={styles.icon} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.updateCard}>
          <View style={styles.updateTopView}>
            <Image source={require('../images/logo.png')} style={styles.logo} />
            <View>
              <Text style={styles.updateTitle}>App Update Available</Text>
              <Text style={styles.updateMsg}>
                {
                  'We need fixed some issues and added some cool features in this update'
                }
              </Text>
            </View>
          </View>
          <View style={styles.updateBtnView}>
            <Text style={styles.later}>LATER</Text>
            <TouchableOpacity style={styles.update}>
              <Text style={styles.updateText}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../images/phone_pay_banner.png')}
          style={styles.banner}
        />
        <View style={styles.moneyTransferCard}>
          <Text style={styles.heading}>Money Transfers</Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/user.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.transferText}>To Mobile Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/bank2.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.transferText}>{'To Bank/\nUPI ID'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/reload.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.transferText}>To To Self Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={styles.transferCard}>
                <Image
                  source={require('../images/bank.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.transferText}>{'Check\nBalance'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.otherOption}>
          <TouchableOpacity style={styles.otherOptionTab}>
            <Image
              source={require('../images/wallet.png')}
              style={styles.icon}
            />
            <Text style={styles.otherOptionText}>Phonepe Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOptionTab}>
            <Image source={require('../images/gift.png')} style={styles.icon} />
            <Text style={styles.otherOptionText}>Phonepe Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOptionTab}>
            <Image
              source={require('../images/speaker.png')}
              style={styles.icon}
            />
            <Text style={styles.otherOptionText}>Refer & get 100</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.reachargeAndBills,
            {marginBottom: moderateVerticalScale(100)},
          ]}>
          <Text style={styles.heading}>Recharge & Pay Bills</Text>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/mobile.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>Mobile Reacharge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/satellite-dish.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/mobile.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/credit-card.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'Credit Card\nPayment'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.transferView}>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/mobile.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>Mobile Reacharge</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/satellite-dish.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'DTH'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/mobile.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.transferTab}>
              <View style={[styles.transferCard, {backgroundColor: 'white'}]}>
                <Image
                  source={require('../images/credit-card.png')}
                  style={[
                    styles.icon,
                    {tintColor: 'purple', width: scale(30), height: scale(30)},
                  ]}
                />
              </View>
              <Text style={styles.transferText}>{'Credit Card\nPayment'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
  },
  header2: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    width: scale(40),
    height: scale(40),
  },
  flag: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    right: -moderateScale(3),
    bottom: moderateScale(0),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: 'white',
  },
  home: {
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: '600',
  },
  dropdown: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
    marginLeft: moderateScale(5),
  },
  address: {
    color: 'white',
    fontSize: moderateScale(12),
    marginTop: moderateScale(2),
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: scale(22),
    height: scale(22),
    tintColor: 'white',
  },
  updateCard: {
    width: '94%',
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    marginTop: moderateScale(10),
    backgroundColor: 'white',
  },
  updateTopView: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
    marginTop: moderateScale(20),
  },
  logo: {
    width: scale(30),
    height: scale(30),
  },
  updateTitle: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    marginLeft: moderateScale(10),
    color: 'black',
  },
  updateMsg: {
    fontSize: 14,
    width: '65%',
    marginLeft: moderateScale(10),
    color: '#6e6e6e',
  },
  updateBtnView: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(15),
    alignItems: 'center',
    marginRight: moderateScale(20),
  },
  later: {
    color: 'purple',
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
  update: {
    backgroundColor: 'purple',
    paddingBottom: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    borderRadius: moderateScale(20),
    marginLeft: moderateScale(20),
  },
  updateText: {
    color: 'white',
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
  banner: {
    width: '94%',
    height: verticalScale(100),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
  },
  moneyTransferCard: {
    width: '94%',
    height: verticalScale(130),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
  },
  heading: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginLeft: moderateScale(15),
    marginTop: moderateVerticalScale(15),
  },
  transferView: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  transferTab: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferCard: {
    width: scale(36),
    height: scale(36),
    borderRadius: moderateScale(10),
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferText: {
    marginTop: moderateScale(5),
    textAlign: 'center',
  },
  otherOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '94%',
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  otherOptionTab: {
    width: '31%',
    height: verticalScale(60),
    backgroundColor: '#277be8',
    borderRadius: moderateScale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherOptionText: {
    color: 'white',
    fontWeight: '600',
    marginTop: moderateScale(10),
  },
  reachargeAndBills: {
    backgroundColor: '#ffff',
    borderRadius: moderateScale(5),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
    height: verticalScale(220),
    width: '94%',
  },
});
