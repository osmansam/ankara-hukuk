import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneInbound } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setActiveNav } from "../features/bar/barSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { language, activeNav } = useSelector((store) => store.bar);
  const { links } = useSelector((store) => store.link);
  return (
    <Wrapper>
      <div className="footer-kvk">
        <nav className="footer">
          <div className="footer-center">
            <ul className="footer-links">
              {links.map((item, index) => {
                const { _id, en, tr, link } = item;
                return (
                  <li key={index}>
                    <Link
                      className={`${activeNav === _id ? "active-footer" : ""}`}
                      to={link}
                      onClick={() => {
                        dispatch(setActiveNav(_id));
                      }}
                    >
                      {language === "tr" ? tr : en}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="location-info">
            <div className="footer-address">
              <SlLocationPin className="location-pin" />
              <div className="footer-address-info">
                {language === "tr" && (
                  <p>
                    <span className="bold">adres: </span>ANKARA HUKUK AVUKATLIK
                    BÜROSU Arapsuyu Mah. 625 Sok. No.27 KONYAALTI - ANTALYA
                  </p>
                )}
                {language === "en" && (
                  <p>
                    <span className="bold">address: </span>ANKARA HUKUK
                    AVUKATLIK BÜROSU Arapsuyu Mah. 625 Sok. No.27 KONYAALTI -
                    ANTALYA
                  </p>
                )}
              </div>
            </div>
            <div className="telefon-email">
              <div className="telefon-email-center">
                <BsTelephoneInbound className="tel-pin" />
                {language === "tr" && (
                  <p>
                    <span className="bold">telefon: </span>05005005050
                  </p>
                )}
                {language === "en" && (
                  <p>
                    <span className="bold">phone: </span>05005005050
                  </p>
                )}
                <p>
                  <span className="bold"></span>
                </p>
              </div>
              <div className="telefon-email-center">
                <TfiEmail className="tel-pin" />
                <p>
                  <span className="bold">email: </span>bilalkocaaga@gmail.com
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="kvk">
          <div className="kvk-info">
            {language === "tr" && (
              <p>
                www.ozderin.av.tr web sitesinde yer alan bilgiler, Türkiye
                Barolar Birliği’nin Meslek Kuralları ve ilgili mevzuatına bağlı
                kalınarak ve ilgili mevzuatla reklam yasağına ilişkin
                düzenlemelere uygun olarak hazırlanmıştır. Bu site, iş veya buna
                benzer başka bir kazanım talep etmek ve/veya reklam amaçlı
                olarak kullanılamaz.Yer alan bilgiler, haberler ve etkinliklerle
                bültenlerimiz yalnızca bilgi verme amaçlı olarak hazırlanmış
                olup, ticari amaç içermemektedir. Herhangi bir şekilde hukuki
                görüş veya dayanak olarak kullanılmamalıdır. Şöyle ki içerikler
                güncelliğini yitirebilir ve yürürlükte olan mevzuat veya hukuki
                uygulamaların son halini yansıtmayabilir.Bu nedenle ÖZDERİN
                AVUKATLIK BÜROSU bu sitede yer alan bilgilerdeki herhangi bir
                yanlışlık veya eksiklikten veya bu bilgilerin kullanımından
                doğan sonuçlardan sorumlu tutulamaz, ziyaretçiler sunulan
                içeriklerin doğru olmadığını veya bu içerikler nedeniyle zarar
                gördüklerini iddia edemezler. Bu sitedeki tüm bilgi ve
                dosyaların mülkiyeti ANKARA HUKUK AVUKATLIK BÜROSU’na ait olup,
                yazılı iznimiz olmadan kopyalanamaz, çoğaltılamaz ve
                kullanılmaz. ÖZDERİN tarafından açıkça yazılı şekilde izin
                verilmediği sürece, bu sitede yeni linkler açılması ve/veya bu
                siteye link yaratılması kesinlikle yasaktır.Faks ve/veya e-mail
                ve/veya iletişim formu ile ÖZDERİN AVUKATLIK BÜROSU’na
                ileteceğiniz herhangi bir bilgi veya bu sitenin veya içerdiği
                bilgilerin herhangi başka bir şekilde kullanımı, hiçbir şekilde
                avukat – müvekkil ilişkisi oluşturmayacağı gibi büromuzun var
                olan müvekkilleri ile de kısmi avukat – müvekkil ilişkisi
                oluşturmaz.
              </p>
            )}
            {language === "en" && (
              <p>
                The information contained on the website at www.ozderin.av.tr
                are compiled observing the Professional Rules of the Turkish
                Union of Bar Associations and relevant legislation and in
                accordance with the advertisement restrictions of the same
                legislation. This website may not be used to request jobs or
                other similar gains and/or for advertisement purposes. The
                information, news, and events and any relevant bulletins
                contained herein are prepared for information purposes only and
                are not intended for any commercial purposes. They are not to be
                relied upon as legal opinion or grounds in any manner whatsoever
                as the content may become outdated and may not reflect the
                current version of the legislation or legal practices in
                question. Therefore, ÖZDERİN LAW OFFICE may not be held
                responsible for any mistakes or shortcomings in the information
                contained in this website or any outcomes resulting from the use
                thereof; the visitors are not entitled to claim that the
                contents offered herein are not true or that they suffered
                damages due to such contents. All the information and files
                contained in this website are proprietary to ÖZDERİN LAW OFFICE
                and may not be copied, reproduced, or used without our consent
                in writing. It is absolutely prohibited to create new links in
                this website and/or to create links to this website, unless
                expressly permitted by ÖZDERİN. The use of any information that
                you will provide to ÖZDERİN LAW OFFICE through fax and/or e-mail
                and/or contact form or the use of this website or the
                information contained herein in any other manner does not result
                in a lawyer-client relationship and also does not create partial
                lawyer-client relationship with the existing clients of our
                office.
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  .footer-kvk {
    width: 100%;
    height: 24rem;
    display: block;

    justify-content: center;
    align-items: center;
    bottom: auto;
    margin-top: 4em;
  }
  .footer {
    width: 100%;
    background: black;
    display: flex;
    flex-flow: column wrap;
    height: 60%;
    /* border: 2px solid #000; */
    text-transform: uppercase;
  }

  .footer-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 0.75em;
    align-items: flex-start;
    width: 100%;
    /* border: 2px solid #000; */
  }
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1em;
    margin-left: -1em;
  }

  .active-footer {
    color: white !important;
  }
  .footer-links a {
    color: gray;
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    text-align: left;
    text-transform: uppercase;
  }
  .footer-links a:hover {
    color: #9f000f;
  }
  .kvk {
    width: 100%;
    height: 55%;
    background: rgb(193, 187, 187);
    display: flex;
  }

  .kvk-info {
    width: 75%;
    margin: auto;
  }
  .kvk-info p {
    font-size: 0.7em;
  }
  .location-info {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 4em;
  }
  .footer-address {
    display: flex;
    justify-content: space-evenly;
    width: 20em;
  }
  .location-pin {
    color: gray;
    font-size: 4rem;
    margin-right: 0.2em;
    margin-top: -0.3em;
  }
  .tel-pin {
    color: gray;
    font-size: 2rem;
    margin-left: 1em;
  }
  .telefon-email {
    height: 7em;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    margin-top: -1em;
  }
  .telefon-email-center {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 20em;
  }
  .telefon-email-center p,
  .footer-address-info p {
    color: grey;
    text-transform: none;
  }
  .bold {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    color: grey;
  }
  @media screen and (max-width: 801px) {
    .footer {
      height: 100%;
    }
  }
`;
export default Footer;
