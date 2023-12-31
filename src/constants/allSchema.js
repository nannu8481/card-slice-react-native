const aadhaarSchema = {
    version: 'V1',
    schema: 'Aadhaar',
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
                    show: true,
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
                left: 'image',
                center: 'content',
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
                    show: false,
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
                    show: true,
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
                show: true,
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
        type: 'Aadhaar',
        version: 'V1',
        displayInformation: {
            cardLogo: images?.Logo,
            issuedByLogo: images?.AsliLogo,
            mainHeading: 'AADHAAR CARD',
            subHeading: 'GOVERNMENT OF INDIA',
            userImage: images?.UserImage,
            userName: 'Rishin V Thomas',
            issueDate: '24/07/2020',
            dateOfBirth: '24/07/1995',
            dateOfValidity: '24/07/2033',
            idNumber: '123142131231',
            subIdNumber: 'GHJGJHYTPK098',
            subLogo: images?.SubLogo,
            issuer: 'Verified With DigiLocker',
        },
    },
},

const panSchema = {
    version: 'V1',
    schema: 'Pan',
    displayModel: {
        cardInformation: {
            backgroundColor: 'gradient', // gradient, solid, transparent
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
        type: 'Pan',
        version: 'V1',
        displayInformation: {
            cardLogo: images?.Logo,
            issuedByLogo: images?.AsliLogo,
            mainHeading: 'PAN CARD',
            subHeading: 'GOVERNMENT OF INDIA',
            userImage: images?.UserImage,
            userName: 'Rishin V Thomas',
            issueDate: '24/07/2020',
            dateOfBirth: '24/07/1995',
            dateOfValidity: '24/07/2033',
            idNumber: '123142131231',
            subIdNumber: '',
            subLogo: images?.SubLogo,
            issuer: 'Verified by IDcentral',
        },
    },
},

const DLSchema = {
    version: 'V1',
    schema: 'Driving License',
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
                left: 'logo',
                center: 'content',
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
                show: true,
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
        type: 'Driving License',
        version: 'V1',
        displayInformation: {
            cardLogo: images?.Logo,
            issuedByLogo: images?.AsliLogo,
            mainHeading: 'INDIAN UNION DRIVING LICENSE',
            subHeading: '',
            userImage: images?.UserImage,
            userName: 'Rishin V Thomas',
            issueDate: '24/07/2020',
            dateOfBirth: '',
            dateOfValidity: '24/07/2033',
            idNumber: '123142131231',
            subIdNumber: '',
            subLogo: images?.SubLogo,
            issuer: 'Verified by IDfy',
        },
    },
},

const secondarySchoolSchema = {
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
const addressSchema = {
    version: 'V1',
    schema: 'Address Information',
    displayModel: {
        cardInformation: {
            backgroundColor: 'gradient', // gradient, solid, transparent
            gradient: {
                direction: '',
                firstColor: '#FFFFFF',
                secondColor: '#E4F2FF',
            },
            solid: '',
        },
        headStyleInformation: {
            logos: {
                left: {
                    show: true,
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
                    show: false,
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
            content: [{
                key:'address',
                label: false,
                fontSize: 14,
                color: '#312B5C',
                fontWeight: 400,
                font: null,
                show: true,
            }, {
                key:'city',
                label: false,
                fontSize: 14,
                color: '#312B5C',
                fontWeight: 400,
                font: null,
                show: true,
            }],
            image: {
                show: true,
                size: {
                    width: 52,
                    height: 64,
                },
            },
        },
        footerStyleInformation: {
            footerBorder: {
                position: 'top',
                show: true,
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
        type: 'Aadhaar',
        version: 'V1',
        displayInformation: {
            cardLogo: images?.Logo,
            issuedByLogo: images?.AsliLogo,
            mainHeading: 'AADHAAR CARD',
            subHeading: 'GOVERNMENT OF INDIA',
            image: images?.UserImage,
            userName: 'Rishin V Thomas',
            issueDate: '24/07/2020',
            dateOfBirth: '24/07/1995',
            dateOfValidity: '24/07/2033',
            idNumber: '123142131231',
            subIdNumber: 'GHJGJHYTPK098',
            issuer: 'Verified With DigiLocker',
        },
    }
}