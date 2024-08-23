import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import Section from "../../component/Section";
import {useScrollHandler} from "../../hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GuethubApp() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 初始检查窗口大小

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const mobileImages = [
        "https://api.kexie.space/data/resource/hello/docs/introduction/appdev-assets/guethub-app-mobile-1.png",
        "https://api.kexie.space/data/resource/hello/docs/introduction/appdev-assets/guethub-app-mobile-2.png",
        "https://api.kexie.space/data/resource/hello/docs/introduction/appdev-assets/guethub-app-mobile-3.png",
    ];


    const settings = {
        dots: true,
        dotPosition: "bottom",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        style: {
            width: "100%",
            height: "80%",
            backgroundColor: "transparent",
        }
    };

    return (
        <Section
            title="GUET校园圈App"
            url="https://www.guethub.net/"
            url_title="点此前往官网下载"
            openInNewTab={true}
            description="GUET校园圈 (GUET HUB)，支持 Android 和 IOS。

            它有几个非常实用的功能：
            1. 可以查看课表和成绩以及评教等教务功能，2.校内论坛功能。

            内测QQ群：482024244"
            bannerStyle={{width: "80%", height: "auto", backgroundColor: "transparent"}}
        >
            {isMobile ? (
                <Slider
                    {...settings}
                >
                    {mobileImages.map((image, index) =>
                        <div key={index}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "16px"
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`轮播图片 ${index + 1}`}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "75vh",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </Slider>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80%", // 确保外部容器高度
                        flexDirection: "row",
                    }}
                >
                    {mobileImages.map((image, index) =>
                        <div key={index}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "16px",
                                    marginLeft: "16px",
                                    marginRight: "16px",
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`图片 ${index + 1}`}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "75vh",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Section>
    );
}

export default GuethubApp;
