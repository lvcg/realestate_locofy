import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button, Button as MuiButton } from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Header from "./header";
import { useRouter } from "next/router";
import SellHomeContainer from "./sell-home-container";
import CardContainer from "./card-container";
import AreaContainer from "./area-container";
import Footer from "./footer";

const LandingPage = () => {
  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/properties-grid-view");
  }, [router]);

  return (
    <main className="relative bg-gray-white w-[1920px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <Header />
      <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <div className="self-stretch relative leading-[72px] font-semibold">
              Find Your Dream Home
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button
                className="[border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
                autoFocus
                disabled
              >
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                  Rent
                </div>
              </button>
              <Button variant="contained" color="primary">
                Sale
              </Button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-center">
                    Locations
                  </div>
                  <AntDropdown
                    overlay={
                      <AntMenu>
                        {[].map((option, index) => (
                          <AntMenu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </AntMenu.Item>
                        ))}
                      </AntMenu>
                    }
                    placement="bottomLeft"
                    trigger={["hover"]}
                  >
                    <AntButton onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </AntButton>
                  </AntDropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                    Property Type
                  </div>
                  <AntDropdown
                    className="self-stretch"
                    overlay={
                      <AntMenu>
                        {[
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ].map((option, index) => (
                          <AntMenu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </AntMenu.Item>
                        ))}
                      </AntMenu>
                    }
                    placement="bottomLeft"
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </AntDropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                    Rent Range
                  </div>
                  <AntDropdown
                    className="self-stretch"
                    overlay={
                      <AntMenu>
                        {[
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ].map((option, index) => (
                          <AntMenu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </AntMenu.Item>
                        ))}
                      </AntMenu>
                    }
                    placement="bottomLeft"
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </AntDropdown>
                </div>
                <AntButton
                  className="cursor-pointer"
                  style={{ width: "102px" }}
                  type="primary"
                  size="middle"
                  shape="default"
                  onClick={onSearchCTAClick}
                >
                  Search
                </AntButton>
              </nav>
            </div>
          </form>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <a
                className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                target="_blank"
                href="/properties-grid-view"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </a>
              <a
                className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-2@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                target="_blank"
                href="/properties-grid-view"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </a>
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-3@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                href="/properties-grid-view"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <a
                className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                target="_blank"
                href="/properties-grid-view"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </a>
              <a
                className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
                target="_blank"
                href="/properties-grid-view"
              >
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start">
        <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
            <SellHomeContainer
              listingId="/icon.svg"
              actionButtonText="Sell your home"
            />
            <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] w-[312px] flex flex-col py-[22px] px-4 box-border items-start justify-start min-w-[300px] max-w-[340px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                  alt=""
                  src="/icon1.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Rent your home
                  </div>
                  <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <SellHomeContainer
              listingId="/icon2.svg"
              actionButtonText="Buy a home"
              propWidth="unset"
            />
            <SellHomeContainer
              listingId="/icon3.svg"
              actionButtonText="Free marketing"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <form className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-large-400 text-primary-800 text-center">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-lightslategray text-center">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
            <CardContainer
              imageDimensions="/unsplashrlwe8f8anoc@2x.png"
              imageDimensionsText="/car.svg"
              imageDimensionsText2="/bathtub.svg"
              imageDimensionsText3="/arrowsout.svg"
              imageDimensionsText4="/plus.svg"
            />
            <CardContainer
              imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
              imageDimensionsText="/car.svg"
              imageDimensionsText2="/bathtub.svg"
              imageDimensionsText3="/arrowsout.svg"
              imageDimensionsText4="/plus1.svg"
            />
            <CardContainer
              imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
              imageDimensionsText="/car1.svg"
              imageDimensionsText2="/bathtub1.svg"
              imageDimensionsText3="/arrowsout1.svg"
              imageDimensionsText4="/plus2.svg"
            />
            <CardContainer
              imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
              imageDimensionsText="/car1.svg"
              imageDimensionsText2="/bathtub1.svg"
              imageDimensionsText3="/arrowsout1.svg"
              imageDimensionsText4="/plus2.svg"
            />
          </div>
        </div>
        <MuiButton variant="contained" color="primary">
          Load more listing
        </MuiButton>
      </form>
      <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px]">
            <AreaContainer />
            <AreaContainer propBackgroundImage={`url("/card-21@3x.png")`} />
            <AreaContainer propBackgroundImage={`url("/card-31@3x.png")`} />
            <AreaContainer propBackgroundImage={`url("/card-41@3x.png")`} />
          </div>
        </div>
        <MuiButton variant="contained" color="primary">
          Load more listing
        </MuiButton>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center">
        <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch relative leading-[36px]">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-roboto text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <input
                  className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch"
                  type="text"
                  placeholder="First name"
                  maxLength={100}
                  minLength={2}
                  required
                />
                <input
                  className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-center border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch"
                  type="text"
                  placeholder="Last name"
                  maxLength={100}
                  minLength={2}
                  required
                />
              </div>
              <input
                className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray"
                type="text"
                placeholder="Email Address"
                maxLength={100}
                minLength={10}
                required
              />
              <textarea
                className="bg-[transparent] h-[105px] font-roboto text-base self-stretch rounded box-border flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray"
                placeholder="Comments or questions"
                rows={10}
                maxLength={1000}
              />
              <MuiButton
                sx={{ width: 222 }}
                variant="contained"
                color="primary"
              >
                Submit
              </MuiButton>
            </div>
          </div>
        </div>
      </div>
      <Footer
        imageIds="/houseline1.svg"
        smallImageIds="/social-media-logo.svg"
        mediumImageIds="/social-media-logo1.svg"
        smallImageIds2="/social-media-logo2.svg"
        smallImageIds3="/social-media-logo3.svg"
        largeImageIds="/social-media-logo4.svg"
        propOverflow="unset"
      />
    </main>
  );
};

export default LandingPage;
