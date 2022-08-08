import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
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
  UserTextWrapper,
  UserName,
  UserId,
  IssueDate,
  UserImage,
  UserLogo,
  SubNumberText,
  VerifyButton,
  MainWrapper,
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
            <TouchableOpacity key={idx}>
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
                    <UserImage
                      styles={bodyStyle.image}
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
              </MainWrapper>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DynamicCard;
