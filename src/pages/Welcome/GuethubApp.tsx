import React from "react";
import Section from "../../component/Section";
import {useScrollHandler} from "../../hooks";

function GuethubApp() {
    const [ScrollAnimationRefs, addScrollAnimationRefs] = useScrollHandler();

    return (
        <Section
            title="GUET校园圈App"
            url="https://www.guethub.net/"
            url_title="点此前往官网下载"
            description="GUET校园圈 (GUET HUB)，支持 Android 和 IOS。

            它有几个非常实用的功能：
            1. 可以查看课表和成绩以及评教等教务功能，2.校内论坛功能。

            内测QQ群：482024244"
            bannerStyle={{width: "75%", height: "80vh"}}
        >
            <img height="100%"
                 width="100%"
                 style={{
                     boxShadow:
                         "0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d",
                     borderRadius: 16,
                     paddingLeft: 150,
                     paddingRight: 150,
                     marginTop: 16
                 }}
                 ref={addScrollAnimationRefs}
                 src="https://api.kexie.space/data/resource/hello/docs/introduction/appdev-assets/guethub-app.png"
                 alt="屏幕截图"></img>
        </Section>
    );
}

export default GuethubApp;
