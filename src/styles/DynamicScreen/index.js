import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: 18px 15px;
`;

const MainWrapper = styled.View`
  /* flex: 1; */
  /* background-color: #ffffff; */
  /* width: 100%;
  max-width: 90%;
  height: 240;
  border-radius: 20px;
  justify-content: space-between;
  margin-top: 20; */
`;

const HeadWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const HeadingWrapper = styled.View``;
const MainTitle = styled.Text`
  text-align: center;
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
`;
const SubTitle = styled.Text`
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
`;

const CardLogo = styled.Image`
  width: 100%;
  max-width: ${props => props?.styles?.width};
  height: ${props => props?.styles?.height};
`;

const IssuerLogo = styled.Image`
  width: 100%;
  max-width: ${props => props?.styles?.width};
  height: ${props => props?.styles?.height};
`;

const BodyWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  justify-content: space-between;
`;

const UserTextWrapper = styled.View`
  text-align: left;
  width: 60%;
  display: ${props => (props?.styles ? 'flex' : 'none')};
`;

const UserImageSection = styled.View`
  width: 100%;
`;

const UserImage = styled.Image`
  max-width: ${props => (props?.styles?.show ? props?.styles?.size?.width : 0)};
  height: ${props => (props?.styles?.show ? props?.styles?.size?.height : 0)};
  object-fit: contain;
`;

const LogoSection = styled.View`
  width: 100%;
`;

const UserLogo = styled.Image`
  max-width: ${props => (props?.styles?.show ? props?.styles?.size?.width : 0)};
  height: ${props => (props?.styles?.show ? props?.styles?.size?.height : 0)};
`;

const UserName = styled.Text`
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
`;
const UserId = styled.Text`
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
  margin-top: ${props => props?.styles?.marginTop};
  display: ${props => (props?.styles?.show ? 'flex' : 'none')};
`;
const IssueDate = styled.Text`
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
`;

const SubNumberText = styled.Text`
  text-align: ${props => props?.styles?.textAlign};
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
  display: ${props => (props?.styles?.show ? 'flex' : 'none')};
`;

const FooterWrapper = styled.View`
  padding: 13px;
  width: 100%;
  align-items: ${props => props?.styles?.waterMark?.position};
  border-top-color: ${props =>
    props?.styles?.footerBorder?.show
      ? props?.styles?.footerBorder?.color
      : ''};
  border-top-width: ${props =>
    props?.styles?.footerBorder?.show ? props?.styles?.footerBorder?.size : 0};
`;

const VerifyButton = styled.Text`
  font-size: ${props => props?.styles?.fontSize};
  color: ${props => props?.styles?.color};
  font-weight: ${props => props?.styles?.fontWeight};
  border: ${props => props?.styles?.border};
  text-align: center;
  width: 180px;
  border-radius: 30px;
  padding: 6px 28px;
`;

export {
  Wrapper,
  HeadWrapper,
  MainTitle,
  SubTitle,
  BodyWrapper,
  FooterWrapper,
  HeadingWrapper,
  CardLogo,
  IssuerLogo,
  UserTextWrapper,
  UserName,
  UserId,
  IssueDate,
  UserImage,
  UserLogo,
  SubNumberText,
  VerifyButton,
  MainWrapper,
  UserImageSection,
  LogoSection,
};
