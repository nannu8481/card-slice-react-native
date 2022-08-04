import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {data, userInfo} from '../constants/schema';
import {
  Wrapper,
  HeadWrapper,
  CardLogo,
  IssuerLogo,
  BodyWrapper,
  FooterWrapper,
  HeadingWrapper,
  MainTitle,
  SubTitle,
  UserTextWrapper,
  UserName,
  UserId,
  IssueDate,
  UserImage,
  UserLogo,
  SubNumberText,
  VerifyButton,
} from '../styles/DynamicScreen';

const DynamicCard = props => {
  const [cards] = useState(data);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {cards?.map((itm, idx) => {
          const headerStyle = itm?.displayModel?.headStyleInformation;
          const bodyStyle = itm?.displayModel?.bodyStyleInformation;
          const footerStyle = itm?.displayModel.footerStyleInformation;
          return (
            <TouchableOpacity
              key={idx}
              style={[
                styles.card,
                {backgroundColor: itm?.displayModel?.cardInformation?.solid},
              ]}>
              <Wrapper>
                <HeadWrapper>
                  <CardLogo
                    styles={headerStyle?.logos?.left?.size}
                    source={userInfo[0]?.displayInformation?.cardLogo}
                  />
                  <HeadingWrapper>
                    <MainTitle styles={headerStyle.title.mainHeading}>
                      {userInfo[0]?.displayInformation?.mainHeading}
                    </MainTitle>
                    <SubTitle styles={headerStyle.title.subHeading}>
                      {userInfo[0]?.displayInformation?.subHeading}
                    </SubTitle>
                  </HeadingWrapper>
                  <IssuerLogo
                    styles={headerStyle?.logos?.right?.size}
                    source={userInfo[0]?.displayInformation?.issuedByLogo}
                  />
                </HeadWrapper>
                <BodyWrapper>
                  <UserImage
                    styles={bodyStyle.image.size}
                    source={userInfo[0]?.displayInformation?.userImage}
                  />
                  {bodyStyle.content.show && (
                    <UserTextWrapper>
                      <UserName styles={bodyStyle.content.name}>
                        {userInfo[0]?.displayInformation?.userName}
                      </UserName>
                      {bodyStyle?.content.idNumber.show && (
                        <UserId styles={bodyStyle.content.idNumber}>
                          {userInfo[0]?.displayInformation?.idNumber}
                        </UserId>
                      )}
                      <IssueDate styles={bodyStyle.content.date}>
                        {userInfo[0]?.displayInformation?.issueDate}
                      </IssueDate>
                    </UserTextWrapper>
                  )}

                  <UserLogo
                    source={userInfo[0]?.displayInformation?.subLogo}
                    styles={bodyStyle.logo}
                  />
                </BodyWrapper>
                <SubNumberText styles={bodyStyle.content.subIdNumber}>
                  {userInfo[0]?.displayInformation?.subIdNumber}
                </SubNumberText>
              </Wrapper>

              <FooterWrapper styles={footerStyle.footerBorder}>
                <VerifyButton styles={footerStyle.waterMark}>
                  {userInfo[0]?.displayInformation?.verifiedBy}
                </VerifyButton>
              </FooterWrapper>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DynamicCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 50,
  },
  card: {
    backgroundColor: 'grey',
    height: 240,
    width: '90%',
    borderRadius: 15,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
