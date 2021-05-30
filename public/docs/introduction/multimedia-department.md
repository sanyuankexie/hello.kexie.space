# 关于多媒体部

## 部门介绍

三院科协多媒体部，是科协的三大技术部门之一。 （多媒体部有很多好看的师兄师姐的） 

多媒体部现有的学习方向有：网站开发、UI设计、3D建模以及视频剪辑。 它旨在培养一批充满活力，具有设计美感，掌握本专业所需的基础理论、专业知识以及具有创新精神的复合型人才。

多媒体部同时也会承担一些科协内部的宣传工作。如果你想开发出自己独特的网站、剪辑出超爆款视频、设计出精美的UI以及模型，那么加入多媒体是你不二之选！

> Building......

## 网站开发

这是是一个测试代码 `Test code`

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>

using namespace std;

const int N = 200010;

int n, m;
int cnt, res;
int father[N];

struct Edge{
    int a, b, w;
    bool operator< (const Edge &E) const {
        return w < E.w;
    }
}edges[N];

/* 
    并查集模板
*/
int find(int x) {
    if (father[x] != x) father[x] = find(father[x]);
    return father[x];
}

int kruskal() {
    // 将邻接表从小到大排序
    sort(edges, edges + m);
    
    // 初始化并查集
    for (int i = 1; i <= n; ++ i) father[i] = i;
    
    //krusal
    for (int i = 0; i < m; ++ i) {
        int a = edges[i].a, b = edges[i].b;
        a = find(a), b = find(b);
        // 如果他俩不在一个集合内
        if (a != b) {
            res += edges[i].w;
            cnt ++;
            father[a] = b;
        }
    }
    
    return res;
}

int main () {
    cin >> n >> m;
    for (int i = 0; i < m; ++ i) {
        int a, b, w;
        cin >> a >> b >> w;
        edges[i] = {a, b, w};
    }
    
    res = kruskal();
    // 如果选取的边少于n-1,那么这个图不连通
    if (cnt < n - 1) cout << "impossible" << endl;
    else cout << res << endl;
    
    return 0;
}
```