import styled from "styled-components"

export const ContentStyle1 = styled.div`
    background: #000;
    .inner {}
    h2 {color:#fff}
    p {font-size: 14px; text-align: center; margin: 100px auto; color:#dcdcdc;
        img {width:1400px}}
`

export const ContentStyle2 = styled.div`
    background: #fff;
    .inner {}
    h2 {}
    p {font-size: 14px; text-align: center; margin: 100px auto; 
        img { width: 1400px;
        }}
    ul { display: flex; justify-content: center; 
        li { border: 1px solid #000; padding: 5px 10px; margin-right: 10px; box-sizing: border-box; font-size: 13px;}
    }

`