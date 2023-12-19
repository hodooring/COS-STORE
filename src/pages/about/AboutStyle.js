import styled from 'styled-components'

export const AboutWrap = styled.div` 
    .inner { padding:100px 0 
        
    }
    .aboutmain { 
        h2 { font-size:60px; font-weight:400;  margin-bottom:50px }
        h3 {text-align: center; margin-bottom:50px; font-size: 20px;}
        p {text-align: center; font-size: 14px; margin-bottom: 50px;}
    }
    .aboutsub {
        .aboutbutton { display: flex; justify-content: center; 
        li { padding: 5px 10px; margin-right: 10px; box-sizing: border-box; font-size: 13px; width: 200px; text-align: center; background: #000; line-height: 2; 
            a{color: #fff;}
        }
    }
        .aboutvis{ display: flex; justify-content: space-between; margin-top: 300px;
            li{width: 330px; font-size: 14px; 
                img {width: 330px; margin-bottom: 15px;}
                p {margin-bottom: 10px;}
                span {font-size: 13px;}
            }

        }
    }
    .aboutcon1{
        margin-top: 300px; 
        h3{font-size: 40px; text-align: center; margin-bottom: 20px;}
        h4{margin-bottom: 30px; text-align: center;}
        ul { display: flex; justify-content: space-between; margin-top: 100px;
            li{width: 400px; font-size: 14px; 
                img {width: 400px; margin-bottom: 15px;}
                p {margin-bottom: 10px;}
                span {font-size: 13px;}}
            }
    }
    .aboutcon2{
        margin-top: 300px; 
        h3{font-size: 40px; text-align: center; margin-bottom: 20px;}
        h4{margin-bottom: 30px; text-align: center;}
        ul { display: flex; justify-content: space-between; margin-top: 100px;
            li{width: 400px; font-size: 14px; 
                img {width: 400px; margin-bottom: 15px;}
                p {margin-bottom: 10px;}
                span {font-size: 13px;}}
            }
    }
    .aboutcon3{
        margin-top: 300px; 
        h3{font-size: 40px; text-align: center; margin-bottom: 20px;}
        h4{margin-bottom: 30px; text-align: center;}
        ul { display: flex; justify-content: space-evenly; margin-top: 100px;
            li{width: 400px; font-size: 14px; 
                img {width: 400px; margin-bottom: 15px;}
                p {margin-bottom: 10px;}
                span {font-size: 13px;}}
            }
    }

   
`