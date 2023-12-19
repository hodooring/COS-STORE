import { Link } from "react-router-dom";
import { ContentStyle2 } from "./ContentStyle";

const Content2 = () => {
    return (
        <ContentStyle2>
            <div className="inner">
                <h2>TRENDING NOW</h2>
                <p>인상에 남는 패턴과 텍스처, 대조적인 컬러 팔레트로 완성한 폴카 도트 컬렉션을 소개합니다.<br>
                </br>드레스부터 니트웨어까지, 아웃핏에 특별한 포인트가 되어줄 아이템을 확인해보세요.</p>
                <ul>
                    <li> <Link> 플카 도트 컬렉션 </Link> </li>
                    <li> <Link> COS 컬렉션 </Link> </li>
                    <li> <Link> 신상품 </Link> </li>
                </ul>
                <p><img src="./images/content2.jpeg" alt="" /></p>
                <p>
                폴카 도트의 모던한 재해석.<br/>
                이번 시즌, 클래식한 폴카 도트를 볼드한 패턴으로 새롭게 선보입니다.<br/>
                현대적인 감각을 반영한 폴카 도트 컬렉션을 만나보세요.
                </p>
            </div>
        </ContentStyle2>
    );
};

export default Content2;