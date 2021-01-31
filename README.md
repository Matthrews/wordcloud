#### 词云

- `import * as echarts from 'echarts'`
- `import 'echarts-wordcloud';`
- NOTE: echarts-wordcloud@2 is for echarts@5 echarts-wordcloud@1 is for echarts@4
- 出现`wordCloud not exist, loaded it first`的报错，请将`node_modules`下面的`echarts-wordcloud/src`下面四个文件 `copy` 到`echarts/lib`下面，然后代码里面直接`import wordCloud from 'echarts/lib/wordCloud'`

#### bundle 分析

- 安装`npm install --save source-map-explorer`
- `package.json`文件设置脚本`"analyze": "source-map-explorer 'build/static/js/*.js'"`
- 编译`npm run build`
- 分析`npm run analyze`

- 优化

```js
// import * as echarts from 'echarts'
// bundle分析总大小1.14MB(gzip)
// echarts大小782.02KB占67.3%
// 358.35 KB  build\static\js\2.10a99f90.chunk.js
// 8.3 KB     build\static\js\main.5586b1e2.chunk.js
// 774 B      build\static\js\runtime-main.b24f5520.js
// 137 B      build\static\css\main.51818782.chunk.css
import * as echarts from "echarts/lib/echarts";
// bundle分析总大小512.58KB(gzip)
// echarts大小184.01KB占35.9%
// 158.49 KB (-199.86 KB)  build\static\js\2.85537ea6.chunk.js
// 8.3 KB (-8 B)           build\static\js\main.13f51c61.chunk.js
// 774 B                   build\static\js\runtime-main.b24f5520.js
// 137 B                   build\static\css\main.51818782.chunk.css
```

#### 如何进行 bundle 分析

- Network panel
  see how much js code is being download

- Coverage tab
  show you how much js code is actually used

- tools
  - Webpack with webpack-bundle-analyzer
  - Source map explorer during development
  - Lighthouse

#### import 引入图片和 svg 的原理

#### How to messaure you web app's performance

- Web Vitals
  - `npm intall web-vitals`
  - `import { getFCP, getLCP, getFID, getCLS, getTTFB } from 'web-vitals'`
  - `getCLS(console.log);`
