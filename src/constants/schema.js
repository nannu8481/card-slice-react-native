import * as images from '../images/images';

const data = [
  {
    version: 'V1',
    schema: 'Secondary School Examination',
    displayModel: {
      cardInformation: {
        backgroundColor: 'solid', // gradient, solid, transparent
        gradient: {
          direction: '',
          firstColor: '#F3BDDC',
          secondColor: '#76CCFE',
        },
        solid: '#ffffff',
      },
      headStyleInformation: {
        logos: {
          left: {
            show: false,
            size: {
              width: 37,
              height: 23,
            },
          },
          right: {
            show: true,
            size: {
              height: 32,
              width: 28,
            },
          },
        },
        title: {
          mainHeading: {
            show: true,
            fontSize: 16,
            color: '#312B5C',
            fontWeight: 600,
          },
          subHeading: {
            show: true,
            fontSize: 12,
            color: '#312B5C',
            fontWeight: 400,
          },
        },
      },
      bodyStyleInformation: {
        placement: {
          left: 'content',
          center: '',
          right: '',
        },
        content: {
          show: true,
          name: {
            fontSize: 14,
            color: '#312B5C',
            fontWeight: 400,
            font: null,
            show: true,
          },
          idNumber: {
            fontSize: 12,
            color: '#312B5C',
            fontWeight: 500,
            marginTop: 6,
            font: null,
            show: true,
          },
          date: {
            fontSize: 12,
            color: '#565870',
            fontWeight: 400,
            font: null,
            show: true,
          },
          subIdNumber: {
            fontSize: 14,
            fontWeight: 500,
            color: '#312B5C',
            textAlign: 'center',
            font: null,
            show: false,
          },
        },
        image: {
          show: true,
          size: {
            width: 52,
            height: 64,
          },
        },
        logo: {
          show: false,
          size: {
            width: 40,
            height: 33,
          },
        },
      },
      footerStyleInformation: {
        footerBorder: {
          position: 'top',
          show: false,
          color: '#D50C29',
          size: 1,
        },
        waterMark: {
          fontSize: 9,
          color: '#312B5C',
          fontWeight: 400,
          border: '1px solid #565870',
          position: 'flex-start', // center, flex-start, flex-end
          padding: '3px',
          color: '#000000',
        },
      },
    },
    userInfo: {
      type: 'Secondary School Examination',
      version: 'V1',
      displayInformation: {
        cardLogo: images?.Logo,
        issuedByLogo: images?.AsliLogo,
        mainHeading: 'SECONDARY SCHOOL EXAMINATION',
        subHeading: '',
        userImage: images?.UserImage,
        userName: 'Rishin V Thomas',
        issueDate: '24/07/2020',
        dateOfBirth: '',
        dateOfValidity: '24/07/2033',
        idNumber: '123142131231',
        subIdNumber: '',
        subLogo: images?.SubLogo,
        issuer: 'Verified by DigiLocker',
      },
    },
  },
];

const userInfo = [
  {
    type: 'Secondary School Examination',
    version: 'V1',
    displayInformation: {
      cardLogo: images?.Logo,
      issuedByLogo: images?.AsliLogo,
      mainHeading: 'SECONDARY SCHOOL EXAMINATION',
      subHeading: '',
      userImage: images?.UserImage,
      userName: 'Rishin V Thomas',
      issueDate: '24/07/2020',
      dateOfBirth: '',
      dateOfValidity: '24/07/2033',
      idNumber: '123142131231',
      subIdNumber: '',
      subLogo: images?.SubLogo,
      issuer: 'Verified by DigiLocker',
    },
  },
];

export {data, userInfo};
