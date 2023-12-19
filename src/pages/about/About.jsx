import { Link } from "react-router-dom";
import { AboutWrap } from "./AboutStyle";


const About = () => {
    return (
        <AboutWrap>
            <div className="inner">
                <div className="aboutmain">
                    <h2>Better Looks Beyond</h2>
                    <h3>지속가능성에 대한 브랜드의 비전</h3>
                    <p>COS는 타임리스 스타일과 우수한 퀄리티를 최우선으로 컬렉션을 디자인하는 브랜드입니다.<br/>컬렉션 소재의 93%가 지속 가능한 소재로 제작되었으며, COS 리셀과 Full Circle 같은 자원순환적인 서비스를 선두적으로 도입해왔습니다. <br/>제품, 매장, 협력업체, 소비자들을 위한 지속가능성을 이루기 위해 노력하는 과정을 자세히 알아보세요.</p>
                </div>
                <div className="aboutsub">
                    <ul className="aboutbutton">
                        <li> <Link> 제품 </Link> </li>
                        <li> <Link> 사람 </Link> </li>
                        <li> <Link> 환경 </Link> </li>
                    </ul>
                    <ul className="aboutvis">
                        <li>
                            <img src="./images/about2.jpeg" alt="" />
                            <p>패키징</p>
                            <span>새로운 패키징 방식은 재사용 가능하거나 리사이클 소재로 제작되어 브랜드의 지속 가능한 방식에 부합합니다.</span>
                        </li>
                        <li>
                            <img src="./images/about3.jpeg" alt="" />
                            <p>스토어</p>
                            <span>전 세계적으로 COS 스토어는 컨셉 있는 디자인과 자원순환성을 고려한 설계 방식으로 잘 알려져 있습니다.</span>
                        </li>
                        <li>
                            <img src="./images/about4.jpeg" alt="" />
                            <p>소재</p>
                            <span>디자인팀은 지속 가능한 소재를 사용해 모던하고 실용적인 컬렉션과 액세서리를 제작합니다.</span>
                        </li>
                        <li>
                            <img src="./images/about5.jpeg" alt="" />
                            <p>네트워크</p>
                            <span>협력업체와 자선단체 또한 브랜드와 함께 지속가능성의 가치를 추구하고 있습니다.</span>
                        </li>
                    </ul>
                </div>

                <div className="aboutcon1">
                    <h3>제품</h3>
                    <h4>현재뿐만 아니라 미래에도 혁신적인 제품을 제작하기 위해 더 나은 아이디어를 고안하고 디자인에 반영합니다.</h4>
                    <ul>
                        <li>
                            <img src="./images/about6.jpeg" alt="" />
                            <p>데님 컬렉션</p>
                            <span>오가닉 코튼과 리사이클 코튼으로 완성한 데님 컬렉션을 소개합니다.</span>
                        </li>
                        <li>
                            <img src="./images/about7.jpeg" alt="" />
                            <p>지속 가능한 선택</p>
                            <span>COS 리셀부터 Full Circle 서비스까지, 환경에 대한 부담을 최소화하기 위해 자원순환성을 생각한 서비스를 런칭했습니다.</span>
                        </li>
                        <li>
                            <img src="./images/about8.jpeg" alt="" />
                            <p>제품 관리</p>
                            <span>모든 컬렉션은 오랜 시간이 지나도 입을 수 있도록 제작되었습니다.<br/> 제품 본연의 상태를 유지할 수 있는 관리 방법을 참고해보세요.</span>
                        </li>
                    </ul>
                </div>

                <div className="aboutcon2">
                    <h3>사람</h3>
                    <h4>오랜 시간 동안 협업을 진행한 협력업체부터 같이 근무하는 동료까지, 사람을 최우선으로 생각합니다.</h4>
                    <ul>
                        <li>
                            <img src="./images/about9.jpeg" alt="" />
                            <p>협력업체</p>
                            <span>브랜드 런칭 때부터 평등과 지속가능성 그리고 혁신의 가치를 공유하는 전문가들과 공고히 관계를 다져왔습니다.</span>
                        </li>
                        <li>
                            <img src="./images/about10.jpeg" alt="" />
                            <p>성평등</p>
                            <span>여성 직원들이 공평하게 대우받고 안전하게 근무할 수 있도록 브랜드 차원에서 성평등을 추구하며 평등한 기회를 제공하려고 합니다.</span>
                        </li>
                        <li>
                            <img src="./images/about11.jpeg" alt="" />
                            <p>기부단체</p>
                            <span>자선 단체와 커뮤니티, 그리고 사회에서 선두적인 활동으로 두각을 나타내는 개인을 꾸준히 지원합니다.</span>
                        </li>
                    </ul>
                </div>
                <div className="aboutcon3">
                    <h3>환경</h3>
                    <h4>탄소 중립적인 방식으로 컬렉션을 제작해 생산 과정에서 발생하는 탄소 배출량과 자원 사용량을 줄이려고 합니다.</h4>
                    <ul>
                        <li>
                            <img src="./images/about12.jpeg" alt="" />
                            <p>COS 스토어 경험</p>
                            <span>더 지속 가능한 방식으로 인테리어 자재부터 매장 건설 방식까지 고려하며, 인테리어의 컨셉을 확장시켜 보다 더 나은 쇼핑 환경을 제공하고자 합니다.</span>
                        </li>
                        <li>
                            <img src="./images/about13.jpeg" alt="" />
                            <p>발전 과정</p>
                            <span>H&M 그룹과 함께 탄소 중립적인 방식으로 사업 계획을 진행하는 내용을 자세히 알아보세요.</span>
                        </li>
                    </ul>
                </div>
             </div>
        </AboutWrap>
    );
};

export default About;