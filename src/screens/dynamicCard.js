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

  const getImage = bodyStyle => {
    return (
      <UserImageSection>
        <UserImage
          styles={bodyStyle.image}
          source={userInfo[0]?.displayInformation?.userImage}
        />
      </UserImageSection>
    );
  };

  const getLogo = bodyStyle => {
    return (
      <LogoSection>
        <UserLogo
          source={userInfo[0]?.displayInformation?.subLogo}
          styles={bodyStyle.logo}
        />
      </LogoSection>
    );
  };

  const getContent = bodyStyle => {
    return (
      <UserTextWrapper styles={bodyStyle.content.show}>
        <UserName styles={bodyStyle.content.name}>
          {userInfo[0]?.displayInformation?.userName}
        </UserName>
        <UserId styles={bodyStyle.content.idNumber}>
          {userInfo[0]?.displayInformation?.idNumber}
        </UserId>
        <IssueDate styles={bodyStyle.content.date}>
          Issue Date: {userInfo[0]?.displayInformation?.issueDate}
        </IssueDate>
      </UserTextWrapper>
    );
  };

  const bodyRenderingComponent = (position, bodyStyle) => {
    const allComponents = {
      content: getContent(bodyStyle),
      logo: getLogo(bodyStyle),
      image: getImage(bodyStyle),
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
                        source={userInfo[0]?.displayInformation?.cardLogo}
                      />
                      <HeadingWrapper>
                        <MainTitle styles={headerStyle.title.mainHeading}>
                          {userInfo[0]?.displayInformation?.mainHeading}
                        </MainTitle>
                        {headerStyle?.title?.subHeading?.show && (
                          <SubTitle styles={headerStyle.title.subHeading}>
                            {userInfo[0]?.displayInformation?.subHeading}
                          </SubTitle>
                        )}
                      </HeadingWrapper>
                      <IssuerLogo
                        styles={headerStyle?.logos?.right?.size}
                        source={userInfo[0]?.displayInformation?.issuedByLogo}
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
                      )}
                    </BodyWrapper>
                    <SubNumberText styles={bodyStyle.content.subIdNumber}>
                      {userInfo[0]?.displayInformation?.subIdNumber}
                    </SubNumberText>
                  </Wrapper>
                  <FooterWrapper styles={footerStyle}>
                    <VerifyButton styles={footerStyle.waterMark}>
                      {userInfo[0]?.displayInformation?.verifiedBy}
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
