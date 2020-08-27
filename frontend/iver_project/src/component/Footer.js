import React from 'react'
import './footer.css'

import footer_icon1 from "../image/icon_footer_01.png"
import footer_icon2 from "../image/icon_footer_02.png"
import footer_icon3 from "../image/icon_footer_03.png"
import footer_icon4 from "../image/icon_footer_04.png"
import footer_icon5 from "../image/icon_footer_05.png"

class Footer extends React.Component {

    scollTop = () => {
        console.log("scroll Top")
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer>
                <div className="frame">
                    <div className="footer_sec1">
                        <span>고객센터 1234-5678</span>
    
                        <span className="middle">
                            <a>
                                <img src={footer_icon5} alt={footer_icon5}></img>
                                <p>하이버 소개</p>
                            </a>
                            <a>
                                <img src={footer_icon1} alt={footer_icon1}></img>
                                <p>자주 묻는 질문</p>
                            </a>
                            <a>
                                <img src={footer_icon2} alt={footer_icon2}></img>
                                <p>카톡 플러스 친구</p>
                            </a>
                            <a>
                                <img src={footer_icon3} alt={footer_icon3}></img>
                                <p>페이스북</p>
                            </a>
                            <a>
                                <img src={footer_icon4} alt={footer_icon4}></img>
                                <p>인스타그램</p>
                            </a>
                        </span>
                    </div>
    
                    <div className="footer_sec2">
                        <p>
                            영업시간 : AM 10:00 ~ PM 17:00 ( 주말,공휴일 제외 )<br/>
                            점심시간 : PM 12:30 ~ PM 13:30
                        </p>
                    </div>
    
                    <div className="footer_sec3">
                        <p>
                            회사명 : ㈜브랜디 | 대표이사 : 서정민 | 사업자등록번호 : 220-88-93187 | 통신판매업신고 : 2016-서울강남-00359<br/>
                            호스팅사업자 : (주)브랜디 | 주소 : (06223) 서울특별시 강남구 테헤란로 32길 26 청송빌딩<br/>
                            개인정보관리책임자 : 윤석호(privacy@brandi.co.kr)<br/>
                        </p>
                        <p>
                            법적고지<br/>
                            (주)브랜디가 제공하는 하이버 서비스는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 하이버는 책임지지 않습니다.<br/>
                        </p>
                        <p>
                            100% 정품<br/>
                            하이버에서 판매되는 모든 브랜드 제품은 정식제조, 정식수입원을 통해 유통되는 100% 정품입니다.
                        </p>
                    </div>
    
                    <img onClick={this.scollTop} className="upBtn" src="https://img.icons8.com/ios/100/000000/up-squared.png" alt="up square png"/>
    
                </div>
            </footer>
        )
    }

    
}

export default Footer