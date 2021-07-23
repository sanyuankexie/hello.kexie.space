# 微信小程序

## 介绍

>  微信小程序，小程序的一种（英语：Wechat Mini Program），是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。主要提供给企业、政府、媒体、其他组织或个人的开发者在微信平台上提供服务。

微信小程序是一种介于原生app、和web app的hybrid。通过微信进行加载，实现类似原生app的流畅。目前移动端开发火热趋势仍在上升。

![kRjT-hhuhism9497041](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/QQ%E6%88%AA%E5%9B%BE20210719165231.jpg)

相对原生app来说，小程序更加轻量、更新实时、跨平台；相对web app来说，小程序资源离线，体验更流畅。微信小程序的设计目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生APP体验的服务。

![kRjT-hhuhism9497041](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/kRjT-hhuhism9497041.jpg)

对于用户而言，小程序和 APP 的区别就是：小程序不需要安装，也不会给用户主动发去提示消息，不占用 APP 那么大的手机内存，只要有微信就能使用，随用随走，十分方便。

对于开发者而言，小程序的开发比 APP 简单、耗时短、 bug 少、流畅程度高。

对于企业、商家、个人而言，小程序的开发成本比 APP 低，而且等待的时间也比较短。

说了这么多小程序的优点和特性你想尝试一下，成为微信小程序的开发者之一呢？

## 技术要点

**微信小程序可以理解为在微信上运行的网页。**

微信小程序本质上和网页并无决定性区别，所以小程序的技术要点和web开发技术要点并无多大区别。实现逻辑是小程序将编译前端代码得到的界面展现给用户，内部的数据传输和更替通过前后端之间的数据交互来完成。比如小程序呈现某一商品的价格是前端通过编译展现出来的数字，而价格的实时更新是前后端数据交互的结果。

微信小程序的技术要点包括：JavaScript+CSS+HTML5、JavaScript前端框架、服务器编程语言、后端框架。其中

**JavaScript+CSS+HTML5**：被称为前端三剑客，互相搭配使用实现前端界面的展示。HTML是超文本标记语言的简称，它是一种不严谨的、简单的标识性语言。它用各种标签将页面中的元素组织起来，告诉浏览器该如何显示其中的内容；CSS是层叠样式表的简称，是用来修饰内容样式的（重在内容样式美化展示上）它用来表现HTML文件样式的，简单说就是负责HTML页面中元素的展现及排版；JavaScript是一种脚本语言，是用来做交互的，主要用来扩展文档交互能力的，使静态的HTML具有一定的交互行为（比如表单提交、动画特效、弹窗等）。用一句白话文来解释三者之间的关系：`如果把HTML比做身体，那CSS就好比是衣服，而JavaScript则意味着人能做的一些高级动作。`微信小程序对于这三剑客都有一定的改动，不过在主体、原理上都是相通的

<img src="https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/20200824184057.png" style="aligin:center">

**JavaScript前端框架**：它能让前端工程师透过千锤百炼的工具，建立扩展性高、互动性强的网路程式。框架存在的根本目的是方便使用者开发，并解决原生条件下的部分弊端。小程序本身就相当于一个在web基础上建立的框架——微信小程序原生框架。不过随着发展更多基于Vue、React的框架逐步完善，已经在某些方面超越原生了，而且使用第三方框架开发甚至可以跨小程序、app、网页开发，减少了学习成本、增加了开发范围，是一个亮眼的优点。

<img src="https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/front_end_frameworks_experience_ranking.png" style="aligin:center">

**服务器编程语言**：就是常说的后端语言，如Java、Python、Node、PHP、Go等。开发人员使用服务器编程语言实现和前端交互。比如前端发送过来数据，后端判断后进行数据处理，并返回参数给前端。没有后端的微信小程序不是一个真正意义上完整的小程序，而服务器编程语言就像是前端三剑客那样，是后端基础语言。

<img src="https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/001.jpg" style="aligin:center">

**后端框架**：后端框架和前端框架的目的是一样的，都是在基础语言上整合出的高效率工具，为了使开发人员高效、便捷的进行开发。

| **框架**      | **编程语言** | **著名的用例**                             |
| ------------- | ------------ | ------------------------------------------ |
| Django        | Python       | Instagram Pinterest Coursera               |
| Laravel       | PHP          | Deltanet Travel Neighborhood Lender MyRank |
| Ruby on Rails | Ruby         | ZendDesk Shopify GitHub                    |
| ExpressJS     | NodeJS       | MySpace GeekList Storify                   |
| CakePHP       | PHP          | Mapme Educationunlimited Followmy Tv       |
| Flask         | Python       | Red Hat Rackspace Reddit                   |
| Asp .NET      | C#           | Microsoft Godaddy Ancestry                 |
| Spring Boot   | Java         | Trivago Via Varejo Intuit                  |
| Koa           | NodeJS       | –                                          |
| Phoenix       | Elixir       | Financial Times Fox 10 ABC15               |

## 方向和学习路线

### 方向

微信小程序在方向上和网页的微妙差别是前后端选择上。网页的开发人员可以精确分隔出前后端开发人员，而微信小程序的方向一般都是主前端或者全栈（前端+后端），当然现在的前后端开发人员或多或少都懂另一端的知识。微信小程序是在网站的基础上开发的，所以说选择微信小程序的后端开发其实和网页的后端开发几乎没差，所以一般选微信小程序的方向前端开发一定是必有的技能。

微信小程序目前有

### 学习路线

#### 前端

1. 学习前端三剑客：JavaScript+CSS+HTML5。

2. 学习使用“微信开发者工具”，这是小程序开发的专业工具，在初学者阶段使用小程序的原生框架就够了。
3. 了解小程序的项目文件配置。
4. 阅读微信小程序的官方文档，在大致学习文档后可以将其作为开发过程中的辅助手册，少走弯路。
5. 完成以上步骤就可以尝试写demo了，前期可以参照别人的demo或者现成的小程序示例开发。
6. 学习使用UI组件，UI组件是别人写好的UI封装好的，在视觉呈现上要强于一般的原生开发，而且引用UI组件可以减小开发难度。
7. 学习第三方前端框架，为了方便开发、多端使用，可以选择一款第三方框架来提升自己的实力。当然，小程序的原生也是一种框架。

如果只是前端开发的话到这里其实就够了，接下来就是后端开发。

#### 后端

1. 学习一种服务器语言，如：Java、Node、PHP等。
2. 学习使用服务器语言对应的后端框架，如Java的SpringBoot，Node的Express，PHP的Laravel等。
3. 学习和数据库进行交互，最基础要实现对数据库的增、删、改、查等基本功能。
4. 学习服务器部署和调试，实现和前端通过URL进行数据交互，实现完整的开发流程。

![小程序学习线路](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%AD%A6%E4%B9%A0%E7%BA%BF%E8%B7%AF.jpg)

#### 云开发

微信小程序云开发可以无需搭建部署服务器，快速构建小程序；无需管理证书、签名、秘钥，直接调用微信 API ，免登录、免鉴权调用微信开放服务。但是不影响前端技术要点要求，重点是省略了服务器搭建部署，节省一部分学习成本，但是后端代码的编写还是要进行。

云开发的学习路线也是要学完前端路线、后端语言及框架后再进行。

## 相关赛事

专门为小程序设立的赛事目前只有一项：

* 微信小程序应用开发大赛（https://developers.weixin.qq.com/community/competition）

不过小程序可以配合其他技术方向联合参赛（排名不分先后，以下比赛仅简单举例）：

* 互联网+大学生创新创业大赛（cy.ncss.cn）
* 全国大学生服务外包创新创业大赛（fwwb.org.cn）
* 中国软件杯大学生软件设计大赛（www.cnsoftbei.com）
* 全国大学生物联网设计竞赛（iot.sjtu.edu.cn）
* 移动互联创新大赛（http://dasai.cemd.org.cn/）

由于小程序的方便、轻量化等特点，越来越多的比赛的前端展示部分可以采用小程序展示，所以小程序可以配合其他技术方向，比如算法、硬件等领域进行参赛。

## 学习书籍

![小程序书籍推荐](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/小程序书籍推荐.jpg)

## 在线学习平台&辅助平台

菜鸟教程（https://www.runoob.com/）里面有很多技术方面的基础知识，包括web相关的基础知识。

w3school在线教程（http://www.w3school.com.cn/）里面主要是一些web相关的基础知识。

CodePen（https://codepen.io/）分享的都是国内外写的一些前端demo，项目之类的，想学习项目经验的话，这个网站是一个不错的选择，在这里也可以线上写代码。

FreeCodeCamp中文社区（https://freecodecamp.cn/home）以闯关的形式带领一步一步的学习，最后还会颁发证书，在这途中不仅能够学习到基础知识，还能学习到项目经验。

廖雪峰的官方网站（https://www.liaoxuefeng.com/）廖雪峰大神，看他的博客可以学到不少东西。

阮一峰ES6标准入门（http://es6.ruanyifeng.com/）在他的个人网站学到很多前端前卫知识。

Stack Overflow（https://stackoverflow.com/）一个专门交流编程问题的问答社区，这里面充满了大牛，一般出现代码什么的出现错误，都能在上面找到解决方案。