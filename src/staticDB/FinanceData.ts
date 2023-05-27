import arrowImg from '../assets/images/finance Vector.png'
import houselogo from '../assets/images/house Vector.png'
import houseImg from '../assets/images/houseImg.png'
import familyImg from '../assets/images/boy-with-his-father.png'
import teamImg from '../assets/images/team-high-five.png'
import pepperImg from '../assets/images/pepper.png'

export interface TemplateDataType {
    globalRobotoFont: {
      font: string;
    };
    globalPoppinsFont: {
      font: string;
    };
    topBar: {
      components: {
        logo: {
          content: string;
          style: {
            fontSize: string;
            color: string;
          };
        };
        loginButton: {
          content: string;
          style: {
            color: string;
            fontSize: string;
          };
        };
        registerButton: {
          content: string;
          style: {
            color: string;
            fontSize: string;
          };
        };
      };
      style: {
        backgroundColor: string;
      };
    };
    heroSection: {
      components: {
        heroHeader: {
          content: string;
          style: {
            fontSize: string;
            fontWeight: string;
          };
        };
        heroParagraph: {
          content: string;
          style: {
            fontSize: string;
          };
        };
      };
      style: {
        backgroundImage: string;
      };
    };
    toggleButtons: {
      activeButtonStyle: {
        backgroundColor: string;
        color: string;
      };
      ButtonStyle: {
        backgroundColor: string;
        color: string;
      };
      firstButtonText: {
        content: string;
      };
      secondButtonText: {
        content: string;
      };
    };
    toggleDiv: {
      components: {
        globalFontStyle: {
          color: string;
          backgroundColor: string;
        };
        personal: {
          text: {
            content: string;
          };
          image: string;
        }[];
        business: {
          text: {
            content: string;
          };
          image: string;
        }[];
      };
    };
    section3: {
      components: {
        globalFontStyle: {
          headerStyle: {
            fontSize: string;
            color: string;
          };
          text: {
            fontSize: string;
            color: string;
          };
        };
        personal: {
          header: {
            content: string;
          };
          text: {
            content: string;
          };
          image: string;
        }[];
        business: {
          header: {
            content: string;
          };
          text: {
            content: string;
          };
          image: string;
        }[];
      };
      style: {backgroundColor: string};
    };
    section4: {
      components: {
        globalFontStyle: {
          headerStyle: {
            fontSize: string;
            color: string;
          };
          text: {
            fontSize: string;
            color: string;
          };
        };
        personal: {
          header: {
            content: string;
          };
          text: {
            content: string;
          };
          image: string;
        }[];
        business: {
          header: {
            content: string;
          };
          text: {
            content: string;
          };
          image: string;
        }[];
      };
      style: {backgroundColor: string};
    };
    messageSection: {
      image: string;
      style: {
        background: string;
      };
    };
    footer: {
      components: {
        globalFontStyle: {
          headerStyle: {
            fontSize: string;
            color: string;
          };
          textStyle: {
            color: string;
          };
        };
        header: {
          content: string;
        };
        text: {
          content: string;
        };
        p1: {
          content: string;
        };
        p2: {
          content: string;
        };
      };
      style: {
        backgroundColor: string;
      };
    };
  }
  

const TemplateData= {
    globalRobotoFont: {font:'roboto'},
    globalPoppinsFont: {font: 'poppins'},
    topBar: {
        components: {
            globalFontStyle: {
                text: {
                    fontSize: '16px'
                }
            },
            logo: {
                content: 'LOGO',
                style: {
                    color: '#FC7225',
                    fontSize: '40px'
                }
            },
            loginButton: {
                content: 'Login',
                style: {
                    color: '#222222',
                }
            },
            registerButton: {
                content: 'Register',
                style: {
                    color: '#FC7225',
                }
            }
        },
        style: {
            backgroundColor: '#FFFFFF',
        }
    },
    heroSection: {
        components: {
            heroHeader: {
                content: 'Disover Lorem Ipsum',
                style: {
                    fontSize: '30px',
                    fontWeight: '700'
                }
            },
            heroParagraph: {
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis 
                molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                 risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget 
                 condimentum velit, sit amet feugiat lectus.`,
                 style: {
                    fontSize: '18px'
                 }
            }
        },
        style: {
            backgroundImage: ''
        }
    },
    toggleButtons: {
        activeButtonStyle: {
            backgroundColor: '#FC7225',
            color: '#FFFFFF'
        },
        ButtonStyle: {
            backgroundColor: '#FFFFFF',
            color: '#FC7225'
        },
        firstButtonText: {
            content: 'Personal'
        },
        secondButtonText: {
            content: 'Business'
        }
    },
    toggleDiv: {
        components: {
            globalFontStyle: {
                color: '#222222',
                backgroundColor: '#FFFFFF',
            },
            personal: [
                {
                    text: {
                        content: 'Open an acount'
                    },
                    image: houselogo
                },
                {
                    text: {
                        content: 'Manage your money'
                    },
                    image: arrowImg
                }
            ],
            business: [
                {
                    text: {
                        content: 'Reqeust a loan'
                    },
                    image: arrowImg
                },
                {
                    text: {
                        content: 'Open an investment account'
                    },
                    image: houselogo
                },
                {
                    text: {
                        content: 'Manage your money'
                    },
                    image: arrowImg
                }
            ]
        }
    },
    section3: {
        components: {
            globalFontStyle: {
                headerStyle: {
                    fontSize : '40px',
                    color: '#222222'
                },
                text: {
                    fontSize: '20px',
                    color: '#222222'
                }
            },
            personal: [
                {
                    header: {
                        content: 'Lorem Mountain Blog'
                    },
                    text: {
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec 
                        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
                        Maecenas eget condimentum velit, sit amet feugiat lectus.`
                    },
                    image: familyImg
                } ],
            business: [
                {
                    header: {
                        content: 'Lorem Mountain Blog'
                    },
                    text: {
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem 
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                        sit amet feugiat lectus.`
                    },
                    image: teamImg
                } ]
        },
        style: {
            backgroundColor: '#FFFFFF'
        }
        },
    section4: {
        components: {
            globalFontStyle: {
                headerStyle: {
                    fontSize : '40px',
                    color: '#222222'
                },
                text: {
                    fontSize: '20px',
                    color: '#222222'
                }
            },
            personal: [
                {
                    header: {
                        content: 'Lorem Mountain Blog'
                    },
                    text: {
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem 
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                        sit amet feugiat lectus.`
                    },
                    image: houseImg
                } ],
                business: [
                {
                    header: {
                        content: 'Lorem Mountain Blog'
                    },
                    text: {
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem 
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                        sit amet feugiat lectus.`
                    },
                    image: pepperImg
                }]
        },
        style: {
            backgroundColor: '#FFFFFF'
        }
    },
    messageSection: {
        image: '',
        style: {
            background: ''
        }
    },
    footer: {
        components: {
            globalFontStyle: {
                headerStyle: {
                    fontSize : '30px',
                    color: '#FFFFFF'
                },
                textStyle: {
                    color: '#FFFFFF'
                }
            },
            header: {
                content: 'LOGO'
            },
            text: {
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla est purus, ultrices in porttitor
                in, accumsan non quam.`
            },
            p1: {
                content: 'Customer care'
            },
            p2: {
                content: '+233 24 123 4567'
            }
        },
        style: {
            backgroundColor: '#222222',
        }

    }
        
}

export default TemplateData;