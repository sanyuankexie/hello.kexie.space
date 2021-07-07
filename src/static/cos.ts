const BaseUrl = 'https://hello-kexie.obs.ap-southeast-1.myhuaweicloud.com'

export default BaseUrl

export const KexieLogo = `${BaseUrl}/images/logo.png`

export const Logo = {
    Multimedia: `${BaseUrl}/images/department/multimedia-department.png`,
    Software: `${BaseUrl}/images/department/software-depertment.png`,
    Hardware: `${BaseUrl}/images/department/hardware-department.png`,
    Organization: `${BaseUrl}/images/department/organization-department.png`,
    Kexie: `${BaseUrl}/images/logo.png`,
    Web: `${BaseUrl}/images/learning-direction/react.png`,
    Game: `${BaseUrl}/images/learning-direction/unity.png`,
    Android: `${BaseUrl}/images/learning-direction/android.png`,
    UI: `${BaseUrl}/images/learning-direction/ui.png`,
    Embedded: `${BaseUrl}/images/learning-direction/embedded.svg`,
    MachineLearning: `${BaseUrl}/images/learning-direction/python.png`,
    Applet: `${BaseUrl}/images/learning-direction/wechat.png`,
    Video: `${BaseUrl}/images/learning-direction/bilibili.png`,
} as const

export const QRCode = {
    WeChatOfficialAccount: `${BaseUrl}/images/wechat_QR_code.jpg `,
}