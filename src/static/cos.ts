const BaseUrl = "https://api.kexie.space/data/resource/hello";

export default BaseUrl;

export const KexieLogo = `${BaseUrl}/images/logo.webp`;

export const Logo = {
  Multimedia: `${BaseUrl}/images/department/multimedia-department.webp`,
  Software: `${BaseUrl}/images/department/software-depertment.webp`,
  Hardware: `${BaseUrl}/images/department/hardware-department.webp`,
  Safe: `${BaseUrl}/images/department/safe-department.webp`,
  Organization: `${BaseUrl}/images/department/organization-department.webp`,
  Kexie: `${BaseUrl}/images/logo.webp`,
  WebFront: `${BaseUrl}/images/learning-direction/react.webp`,
  WebServer: `${BaseUrl}/images/learning-direction/web-server.webp`,
  Game: `${BaseUrl}/images/learning-direction/unity.webp`,
  AppDev: `${BaseUrl}/images/learning-direction/appdevlogo.webp`,
  UI: `${BaseUrl}/images/learning-direction/ui.webp`,
  Embedded: `${BaseUrl}/images/learning-direction/embedded.svg`,
  DeepLearning: `${BaseUrl}/images/learning-direction/python.webp`,
  MiniProgram: `${BaseUrl}/images/learning-direction/mini-program.webp`,
  Video: `${BaseUrl}/images/learning-direction/bilibili.webp`,
  ReverseProject: `${BaseUrl}/images/learning-direction/reverse-project.webp`,
  Cryptology: `${BaseUrl}/images/learning-direction/crypto.webp`,
  WebSafe: `${BaseUrl}/images/learning-direction/web-safe.webp`,
  Pwn: `${BaseUrl}/images/learning-direction/pwn.webp`
} as const;

export const QRCode = {
  WeChatOfficialAccount: `${BaseUrl}/images/wechat_QR_code.webp`,
};

export const Video = {
  DeepLearning: {
    poster: `${BaseUrl}/images/poster.webp`,
    url: `${BaseUrl}/videos/pit.mp4`,
  },
  PromotionalVideo: {
    url: `${BaseUrl}/videos/2025-zxmg.mp4`,
  },
  MovieVideo: {
    url: `${BaseUrl}/videos/2025-zxmv.mp4`,
  },
};

export const Docs = {
  PrefixUrl: `${BaseUrl}/docs/introduction`,
};

export const GuethubAppAssets = {
  Screenshots: [
    `${Docs.PrefixUrl}/appdev-assets/guethub-app-mobile-1.webp`,
    `${Docs.PrefixUrl}/appdev-assets/guethub-app-mobile-2.webp`,
    `${Docs.PrefixUrl}/appdev-assets/guethub-app-mobile-3.webp`,
  ],
} as const;
