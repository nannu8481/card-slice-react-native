import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {data, userInfo} from '../constants/schema';
import {styles} from '../styles/Global';
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
  UserImageSection,
  UserTextWrapper,
  UserName,
  UserId,
  IssueDate,
  UserImage,
  UserLogo,
  SubNumberText,
  VerifyButton,
  MainWrapper,
  LogoSection,
} from '../styles/DynamicScreen';

const DynamicCard = props => {
  const [cards] = useState(data);

  const getImage = (bodyStyle, userInfo) => {
    return (
      <UserImageSection>
        <UserImage styles={bodyStyle.image} source={userInfo?.image} />
      </UserImageSection>
    );
  };

  // const getLogo = (bodyStyle, userInfo) => {
  //   return (
  //     <LogoSection>
  //       {/* <UserLogo source={userInfo.image} styles={bodyStyle.image} /> */}
  //     </LogoSection>
  //   );
  // };

  const getContent = (bodyStyle, userInfo) => {
    return (
      <UserTextWrapper styles={bodyStyle.content.show}>
        <UserName styles={bodyStyle.content.name}>
          {userInfo?.userName}
        </UserName>
        <UserId styles={bodyStyle.content.idNumber}>
          {userInfo?.idNumber}
        </UserId>
        {userInfo?.issueDate ? (
          <IssueDate styles={bodyStyle.content.date}>
            Issued Date: {userInfo?.issueDate}
          </IssueDate>
        ) : null}
        {userInfo?.dateOfBirth ? (
          <IssueDate styles={bodyStyle.content.date}>
            Date of birth: {userInfo?.dateOfBirth}
          </IssueDate>
        ) : null}
        {userInfo?.dateOfValidity ? (
          <IssueDate styles={bodyStyle.content.date}>
            Date of validity: {userInfo?.dateOfValidity}
          </IssueDate>
        ) : null}
        {userInfo?.examinationYear ? (
          <IssueDate styles={bodyStyle.content.date}>
            Examination Year: {userInfo?.examinationYear}
          </IssueDate>
        ) : null}
      </UserTextWrapper>
    );
  };

  const bodyRenderingComponent = (position, bodyStyle, userInfo) => {
    const allComponents = {
      content: getContent(bodyStyle, userInfo),
      // logo: getLogo(bodyStyle, userInfo),
      image: getImage(bodyStyle, userInfo),
    };

    return (
      <>
        <Text>{allComponents[position['left']]}</Text>
        <Text>{allComponents[position['center']]}</Text>
        <Text>{allComponents[position['right']]}</Text>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {cards?.map((itm, idx) => {
          const headerStyle = itm?.displayModel?.headStyleInformation;
          const bodyStyle = itm?.displayModel?.bodyStyleInformation;
          const footerStyle = itm?.displayModel.footerStyleInformation;
          const cardInfo = itm?.displayModel?.cardInformation;
          return (
            <TouchableOpacity key={idx}>
              <LinearGradient
                start={{x: 0.5, y: 1.2}}
                end={{x: 1, y: 0.3}}
                colors={
                  cardInfo?.backgroundColor === 'solid'
                    ? [cardInfo.solid, cardInfo.solid]
                    : [
                        cardInfo.gradient.firstColor,
                        cardInfo.gradient.secondColor,
                      ]
                }
                style={styles.linearGradient}>
                <MainWrapper>
                  <Wrapper>
                    <HeadWrapper>
                      <CardLogo
                        styles={headerStyle?.logos?.left?.size}
                        source={itm?.userInfo?.displayInformation.cardLogo}
                      />
                      <HeadingWrapper>
                        <MainTitle styles={headerStyle.title.mainHeading}>
                          {itm?.userInfo?.displayInformation.mainHeading}
                        </MainTitle>
                        {headerStyle?.title?.subHeading?.show && (
                          <SubTitle styles={headerStyle.title.subHeading}>
                            {itm?.userInfo?.displayInformation.subHeading}
                          </SubTitle>
                        )}
                      </HeadingWrapper>
                      <IssuerLogo
                        styles={headerStyle?.logos?.right?.size}
                        source={itm?.userInfo?.displayInformation.issuedByLogo}
                      />
                    </HeadWrapper>

                    <BodyWrapper>
                      {bodyRenderingComponent(
                        {
                          left: bodyStyle.placement.left,
                          right: bodyStyle.placement.right,
                          center: bodyStyle.placement.center,
                        },
                        bodyStyle,
                        itm?.userInfo?.displayInformation,
                      )}
                    </BodyWrapper>
                    <SubNumberText styles={bodyStyle.content.subIdNumber}>
                      {itm?.userInfo?.displayInformation.subIdNumber}
                    </SubNumberText>
                  </Wrapper>
                  <FooterWrapper styles={footerStyle}>
                    <VerifyButton styles={footerStyle.waterMark}>
                      {itm?.userInfo?.displayInformation.issuer}
                    </VerifyButton>
                  </FooterWrapper>
                </MainWrapper>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DynamicCard;
