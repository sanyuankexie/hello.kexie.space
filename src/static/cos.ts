const BaseUrl = "https://api.kexie.space/data/resource/hello";

export default BaseUrl;

export const KexieLogo = `${BaseUrl}/images/logo.png`;

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
  DeepLearning: `${BaseUrl}/images/learning-direction/python.png`,
  Applet: `${BaseUrl}/images/learning-direction/wechat.png`,
  Video: `${BaseUrl}/images/learning-direction/bilibili.png`,
} as const;

export const QRCode = {
  WeChatOfficialAccount: `${BaseUrl}/images/wechat_QR_code.jpg `,
};

export const Video = {
  DeepLearning: {
    poster: `${BaseUrl}/images/poster.png`,
    url: `${BaseUrl}/videos/pit.mp4`,
  },
  PromotionalVideo: {
    url: `${BaseUrl}/videos/2023-zxmg.mp4`,
  },
  MovieVideo: {
    url: `${BaseUrl}/videos/2023-zxmv.mp4`,
  },
};

export const Docs = {
  PrefixUrl: `${BaseUrl}/docs/introduction`,
};
