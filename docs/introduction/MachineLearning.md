#  人工智能

## 介绍

> 功能强大的人工智能依靠设计良好的人工神经网络展现出强大的学习和推理能力，其效果给传统行业带来巨大的冲击，致使这个研究方向在很多人眼里是魔法一样的存在。你想成为一名魔法师吗？

人工智能（英语：artificial intelligence，缩写为AI）亦称智械、机器智能，指由人制造出来的机器所表现出来的智能。通常人工智能是指通过普通电脑程式来呈现人类智能的技术。该词也指出研究这样的智能系统是否能够实现，以及如何实现。同时，通过医学、神经科学、机器人学及统计学等的进步，常态预测则认为人类的很多职业也逐渐被其取代。

这是一个听上去很魔幻而迅速膨胀的方向。知乎的一份《锅炉设计转行 AI，可行吗？》表达了任职于传统岗位的网友对人工智能逐渐取代人类的工作的担忧。在新闻上，人工智能天天不是摧毁这个行业就是取代那个行业——或许再过一段时间它就要毁灭人类了。但是如果你仔细观察整个人类科技发展史，你会发现，新事物的出现带来的巨大改变在下一个时代的人眼中是再正常不过的事了。书籍刚刚出现时，有人担心书籍会“侵蚀人的思想”，但是现在大多数人的人生前20年求学精力中，有至少10年是住在书堆里的。

![image-20210702172622959](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/20210715020300image-20210702172622959.png)

## 方法和技术

**人工智能的一种重要的实现手段是深度学习。**

深度学习是机器学习中一种基于对数据进行表征学习的算法。观测值（例如一幅图像）可以使用多种方式来表示，如每个像素强度值的向量，或者更抽象地表示成一系列边、特定形状的区域等。而使用某些特定的表示方法更容易从实例中学习任务（例如，人脸识别或面部表情识别）。深度学习的好处是用非监督式或半监督式的特征学习和分层特征提取高效算法来替代手工获取特征。

![neural_network_deep_dive-01a](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/20210714224714neural_network_deep_dive-01a.png)

简单第说，人工智能的“智能”体现在，当你给出公式 y = kx + b 时，神经网络能通过已知的 x 和 y 习得 k ，并用在未知 x 对应的 y 的推理上。

深度学习的要素有：模型的设计、训练数据的采集、训练过程、预测过程。其中：

**模型的设计**指的是设计者根据实际需要解决的问题设计一个可能拟合这个问题的公式的组合。

**数据的采集**指的是在已知的样本中收集一定数量的学习用样本。

**训练**过程指的是将采集到的学习用样本放入模型中，使模型拟合问题。

**预测**过程指的是训练好的模型接受一个学习用样本之外的未知样本，预测它可能对应的真实值。

## 就业

目前人工智能岗位的就业主要分为三个大部分：

1. 科研（research）

   科研岗位的研究者们一直追求者最先进的技术。

   科研岗主要分布于各大院校直辖的研究室，或是较大规模的公司所拥有的AI实验室，或是研究机构下设的AI分所。该种岗位对研究者的各种能力要求通常都很高，特别是要求很好的数学、统计学素养。

2. 业务和算法（algorithm engineering）

   业务和算法岗的工程师们很擅长针对某个问题设计神经网络。

   业务组是根据需求设计神经网络的一个开发团队，参与这种工作要求工作者对神经网络的常见架构非常熟悉并且能分析某种设计的合理性。

3. 应用和部署（applications and deployment）

   应用和部署岗位的开发这们能够熟练地将设计好的神经网络部署到实际使用场景。

   应用和部署岗位的主要工作是将设计好的神经网络部署于各种应用场景，该岗位要求工作者的综合实力较强，熟悉团队使用的神经网络框架，并具有和云端、客户端、边缘硬件、物联网等开发团队直接进行技术对接的能力。

![image-20210702173523027](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210702173523027.png)

## 学习路线

- 高等数学知识。在深度学习方法中，高等数学基础是理解反向传播等重要算法的基础。

- 线性代数知识。在神经网络中，数据往往是以矩阵的方式被传播和运算的。这些传播和运算的方法都来自线性代数的知识。
- 统计学与概率学。在统计学习方法中，机器学习到的往往是一件事情发生的可能性。概率论与数理统计的知识显得尤为重要。
- C语言和Python。C语言是学习一切语言的基础。而Python是你接触这个方向将会经常使用的语言。
- 机器学习基础和深度学习基本原理。一些入门知识可以从互联网和书籍中获得。可以参考下文中出现的参考资料。
- 子方向的研究。当你对机器学习方法有一定的认知后，就可以开始对子方向的研究了。

![image-20210702174304930](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210702174304930.png)

## 学习建议

1. 下定学好数学类科目的决心
2. 学习一门非常简单的编程语言Python
3. 了解一种深度学习框架
4. 了解深度学习的一些原理，例如梯度和反向传播
5. 对照教程尝试多层感知机
6. 熟悉卷积的思想和方法
7. 尝试卷积神经网络和基本视觉任务
8. 选择一种具体的技术继续钻研

## 子方向

### 计算机视觉

（1）概述

​	基于深度学习的计算机视觉是一个应用范围及其广泛的方向。你可能见过的计算机视觉任务有：

​	景区的一角摄像头正在默默统计当前景点的人流量（目标检测技术）

![image-20210715012132879](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715012132879.png)

​	门禁自动通过人脸识别你的身份然后开门（关键点、特征提取和搜索技术）

![image-20210715012508089](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715012508089.png)

​	bilibili视频中弹幕位于人物后方（图像的分割技术）

![image-20210715013949639](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715013949639.png)

​	在多个摄像头中自动追踪嫌疑犯（目标的重识别技术）

![image-20210715014332867](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715014332867.png)

（2） 应用

基于视觉AI的智慧农业

![image-20210702173205127](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210702173205127.png)

智能锅炉温控和钢铁冶炼控制

![image-20210702173246026](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210702173246026.png)

基于声纹的设备故障分析AI

![image-20210702173333061](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210702173333061.png)

智能电网设施巡检机器人

![image-20210702173408158](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210702173408158.png)

### 自然语言处理

（1）概述

自然语言处理( Natural Language Processing, NLP)是计算机科学领域与人工智能领域中的一个重要方向。它研究能实现人与计算机之间用自然语言进行有效通信的各种理论和方法。自然语言处理是一门融语言学、计算机科学、数学于一体的科学。因此，这一领域的研究将涉及自然语言，即人们日常使用的语言，所以它与语言学的研究有着密切的联系，但又有重要的区别。自然语言处理并不是一般地研究自然语言，而在于研制能有效地实现自然语言通信的计算机系统，特别是其中的软件系统。因而它是计算机科学的一部分 。

（2）应用

翻译软件，如百度翻译、Google翻译、有道翻译等

![image-20210715015452103](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715015452103.png)

智能问答系统

通过中文分词、短文本相似度、命名实体识别等相关技术计算两个问题对的相似度，可解决问答、对话、语料挖掘、知识库构建等问题。

![image-20210715015819010](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715015819010.png)

舆情分析

通过关键词提取、文本聚类、主题挖掘等算法模型，挖掘突发事件、舆论导向，进行话题发现、趋势发现、舆情分析等。多维度分析情绪、热点、趋势、传播途径等，及时全面的掌握舆情动态。



内容推荐

通过关键词提取、短文本相似度等技术，提取关键语义信息，精准匹配出语义相似的内容，从而快速构建内容推荐场景。

### 其他常见研究方向

（1）图像描述

对图像进行分割后，将图像分成了若干个区域，包括不同特征的物体和背景，其中可能包含某些形状，如长方形、圆、曲线及任意形状的区域。分割完成后，下一步就是用数据、符号、形式语言来表示这些具有不同特征的小区，这就是图像描述。以特征为基础进行区别或分类是计算机理解景物的基础。图像区域的描述可以分为对区域本身的描述和区域之间的关系、结构进行描述。包括对线、曲线、区域、几何特征等各种形式的描述是图像处理的基础技术。

![image-20210715020032130](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715020032130.png)

（2）神经网络攻击和防御

尽管深度学习在很多计算机视觉领域的任务上表现出色，Szegedy et al. 第一次发现了深度神经网络在图像分类领域存在有意思的弱点。他们证明尽管有很高的正确率，现代深度网络是非常容易受到对抗样本的攻击的。这些对抗样本仅有很轻微的扰动，以至于人类视觉系统无法察觉这种扰动（图片看起来几乎一样）。这样的攻击会导致神经网络完全改变它对图片的分类。此外，同样的图片扰动可以欺骗好多网络分类器。这类现象的深远意义吸引了好多研究员在对抗攻击和深度学习安全性领域的研究。

![image-20210715020216201](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/image-20210715020216201.png)

`当然，AI无界，上述应用只是一些小例子。未来的舞台是属于你们的。`

## 相关赛事

你可以参加的较为知名的比赛有（排名不分先后）：

- 中国高校计算机大赛-人工智能创意赛（[aicontest.baidu.com](aicontest.baidu.com)）
- 中国高校计算机大赛-网络技术挑战赛（[net.c4best.cn](net.c4best.cn)）

- 全国大学生服务外包创新创业大赛（[fwwb.org.cn](fwwb.org.cn)）
- 全国大学生数学建模比赛（www.mcm.edu.cn）
- 中国软件杯大学生软件设计大赛（www.cnsoftbei.com）
- 互联网+大学生创新创业大赛（[cy.ncss.cn](cy.ncss.cn)）
- 挑战杯全国大学生课外学术科技作品竞赛和创业计划大赛（[tiaozhanbei.net](tiaozhanbei.net)）
- 全国大学生嵌入式芯片与系统设计大赛（www.socchina.net）
- 英特尔杯大学生电子设计竞赛嵌入式系统专题邀请赛（[nuedc.sjtu.edu.cn](nuedc.sjtu.edu.cn)）
- 全国大学生物联网设计竞赛（[iot.sjtu.edu.cn](iot.sjtu.edu.cn)）

由于人工智能及其技术正在逐渐兴起，几乎所有知名比赛都会包含相关赛题，或具有相关赛道。况且，人工智能技术应用到传统领域竞赛中往往能获得意想不到的效果。也就是说，你可以参加的比赛绝不仅限于这些。



## 学习书籍和参考资料

![图片1](https://corona-images2.obs.cn-north-4.myhuaweicloud.com/tech-gateway-intro/%E5%9B%BE%E7%89%871.png)

##  可能使用的在线学习平台或资料

- Python For Beginners（www.python.org/about/gettingstarted）
- 工具箱的深度學習記事簿 （[ml.akasaki.space](ml.akasaki.space)）
- 菜鸟教程  runoob （www.runoob.com）
- Colaboratory （[colab.research.google.com](colab.research.google.com)）
- 动手学深度学习：面向中文读者 （[zh.d2l.ai](zh.d2l.ai)）
- 神经网络与深度学习（[nndl.github.io](nndl.github.io)）
- TensorFlow Tutorials （[tensorflow.google.cn/tutorials](tensorflow.google.cn/tutorials)）
- PyTorch Tutorials （[pytorch.org/tutorials](pytorch.org/tutorials)）

以上网站平台排名不分先后