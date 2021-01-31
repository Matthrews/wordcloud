import React from 'react';
// import * as echarts from 'echarts'
// 358.35 KB  build\static\js\2.10a99f90.chunk.js
// 8.3 KB     build\static\js\main.5586b1e2.chunk.js
// 774 B      build\static\js\runtime-main.b24f5520.js
// 137 B      build\static\css\main.51818782.chunk.css
import * as echarts from 'echarts/lib/echarts'
// 158.49 KB (-199.86 KB)  build\static\js\2.85537ea6.chunk.js
// 8.3 KB (-8 B)           build\static\js\main.13f51c61.chunk.js
// 774 B                   build\static\js\runtime-main.b24f5520.js
// 137 B                   build\static\css\main.51818782.chunk.css
import 'echarts-wordcloud';

// svg引入直接作为ReactComponent
import { ReactComponent as Collect } from './assets/imgs/collect.svg'
// 小图片引入直接是nase64插入src
import analyze from './assets/imgs/analyze.png'

var data = {
    value: [{
        "name": "花鸟市场",
        "value": 1446
    },
    {
        "name": "汽车",
        "value": 928
    },
    {
        "name": "视频",
        "value": 906
    },
    {
        "name": "电视",
        "value": 825
    },
    {
        "name": "Lover Boy 88",
        "value": 514
    },
    {
        "name": "动漫",
        "value": 486
    },
    {
        "name": "音乐",
        "value": 53
    },
    {
        "name": "直播",
        "value": 163
    },
    {
        "name": "广播电台",
        "value": 86
    },
    {
        "name": "戏曲曲艺",
        "value": 17
    },
    {
        "name": "演出票务",
        "value": 6
    },
    {
        "name": "给陌生的你听",
        "value": 1
    },
    {
        "name": "资讯",
        "value": 1437
    },
    {
        "name": "商业财经",
        "value": 422
    },
    {
        "name": "娱乐八卦",
        "value": 353
    },
    {
        "name": "军事",
        "value": 331
    },
    {
        "name": "科技资讯",
        "value": 313
    },
    {
        "name": "社会时政",
        "value": 307
    },
    {
        "name": "时尚",
        "value": 43
    },
    {
        "name": "网络奇闻",
        "value": 15
    },
    {
        "name": "旅游出行",
        "value": 438
    },
    {
        "name": "景点类型",
        "value": 957
    },
    {
        "name": "国内游",
        "value": 927
    },
    {
        "name": "远途出行方式",
        "value": 908
    },
    {
        "name": "酒店",
        "value": 693
    },
    {
        "name": "关注景点",
        "value": 611
    },
    {
        "name": "旅游网站偏好",
        "value": 512
    },
    {
        "name": "出国游",
        "value": 382
    },
    {
        "name": "交通票务",
        "value": 312
    },
    {
        "name": "旅游方式",
        "value": 187
    },
    {
        "name": "旅游主题",
        "value": 163
    },
    {
        "name": "港澳台",
        "value": 104
    },
    {
        "name": "本地周边游",
        "value": 3
    },
    {
        "name": "小卖家",
        "value": 1331
    },
    {
        "name": "全日制学校",
        "value": 941
    },
    {
        "name": "基础教育科目",
        "value": 585
    },
    {
        "name": "考试培训",
        "value": 473
    },
    {
        "name": "语言学习",
        "value": 358
    },
    {
        "name": "留学",
        "value": 246
    },
    {
        "name": "K12课程培训",
        "value": 207
    },
    {
        "name": "艺术培训",
        "value": 194
    },
    {
        "name": "技能培训",
        "value": 104
    },
    {
        "name": "IT培训",
        "value": 87
    },
    {
        "name": "高等教育专业",
        "value": 63
    },
    {
        "name": "家教",
        "value": 48
    },
    {
        "name": "体育培训",
        "value": 23
    },
    {
        "name": "职场培训",
        "value": 5
    },
    {
        "name": "金融财经",
        "value": 1328
    },
    {
        "name": "银行",
        "value": 765
    },
    {
        "name": "股票",
        "value": 452
    },
    {
        "name": "保险",
        "value": 415
    },
    {
        "name": "贷款",
        "value": 253
    },
    {
        "name": "基金",
        "value": 211
    },
    {
        "name": "信用卡",
        "value": 180
    },
    {
        "name": "外汇",
        "value": 138
    },
    {
        "name": "P2P",
        "value": 116
    },
    {
        "name": "贵金属",
        "value": 98
    },
    {
        "name": "债券",
        "value": 93
    },
    {
        "name": "网络理财",
        "value": 92
    },
    {
        "name": "信托",
        "value": 90
    },
    {
        "name": "征信",
        "value": 76
    },
    {
        "name": "期货",
        "value": 76
    },
    {
        "name": "公积金",
        "value": 40
    },
    {
        "name": "银行理财",
        "value": 36
    },
    {
        "name": "银行业务",
        "value": 30
    },
    {
        "name": "典当",
        "value": 7
    },
    {
        "name": "海外置业",
        "value": 1
    },
    {
        "name": "汽车",
        "value": 1309
    },
    {
        "name": "汽车档次",
        "value": 965
    },
    {
        "name": "汽车品牌",
        "value": 900
    },
    {
        "name": "汽车车型",
        "value": 727
    },
    {
        "name": "购车阶段",
        "value": 461
    },
    {
        "name": "二手车",
        "value": 309
    },
    {
        "name": "汽车美容",
        "value": 260
    },
    {
        "name": "新能源汽车",
        "value": 173
    },
    {
        "name": "汽车维修",
        "value": 155
    },
    {
        "name": "租车服务",
        "value": 136
    },
    {
        "name": "车展",
        "value": 121
    },
    {
        "name": "违章查询",
        "value": 76
    },
    {
        "name": "汽车改装",
        "value": 62
    },
    {
        "name": "汽车用品",
        "value": 37
    },
    {
        "name": "路况查询",
        "value": 32
    },
    {
        "name": "汽车保险",
        "value": 28
    },
    {
        "name": "陪驾代驾",
        "value": 4
    },
    {
        "name": "网络购物",
        "value": 1275
    },
    {
        "name": "做我的猫",
        "value": 1088
    },
    {
        "name": "只想要你知道",
        "value": 907
    },
    {
        "name": "团购",
        "value": 837
    },
    {
        "name": "比价",
        "value": 201
    },
    {
        "name": "海淘",
        "value": 195
    },
    {
        "name": "移动APP购物",
        "value": 179
    },
    {
        "name": "支付方式",
        "value": 119
    },
    {
        "name": "代购",
        "value": 43
    },
    {
        "name": "体育健身",
        "value": 1234
    },
    {
        "name": "体育赛事项目",
        "value": 802
    },
    {
        "name": "运动项目",
        "value": 405
    },
    {
        "name": "体育类赛事",
        "value": 337
    },
    {
        "name": "健身项目",
        "value": 199
    },
    {
        "name": "健身房健身",
        "value": 78
    },
    {
        "name": "运动健身",
        "value": 77
    },
    {
        "name": "家庭健身",
        "value": 36
    },
    {
        "name": "健身器械",
        "value": 29
    },
    {
        "name": "办公室健身",
        "value": 3
    },
    {
        "name": "商务服务",
        "value": 1201
    },
    {
        "name": "法律咨询",
        "value": 508
    },
    {
        "name": "化工材料",
        "value": 147
    },
    {
        "name": "广告服务",
        "value": 125
    },
    {
        "name": "会计审计",
        "value": 115
    },
    {
        "name": "人员招聘",
        "value": 101
    },
    {
        "name": "印刷打印",
        "value": 66
    },
    {
        "name": "知识产权",
        "value": 32
    },
    {
        "name": "翻译",
        "value": 22
    },
    {
        "name": "安全安保",
        "value": 9
    },
    {
        "name": "公关服务",
        "value": 8
    },
    {
        "name": "商旅服务",
        "value": 2
    },
    {
        "name": "展会服务",
        "value": 2
    },
    {
        "name": "特许经营",
        "value": 1
    },
    {
        "name": "休闲爱好",
        "value": 1169
    },
    {
        "name": "收藏",
        "value": 412
    },
    {
        "name": "摄影",
        "value": 393
    },
    {
        "name": "温泉",
        "value": 230
    },
    {
        "name": "博彩彩票",
        "value": 211
    },
    {
        "name": "美术",
        "value": 207
    },
    {
        "name": "书法",
        "value": 139
    },
    {
        "name": "DIY手工",
        "value": 75
    },
    {
        "name": "舞蹈",
        "value": 23
    },
    {
        "name": "钓鱼",
        "value": 21
    },
    {
        "name": "棋牌桌游",
        "value": 17
    },
    {
        "name": "KTV",
        "value": 6
    },
    {
        "name": "密室",
        "value": 5
    },
    {
        "name": "采摘",
        "value": 4
    },
    {
        "name": "电玩",
        "value": 1
    },
    {
        "name": "真人CS",
        "value": 1
    },
    {
        "name": "轰趴",
        "value": 1
    },
    {
        "name": "家电数码",
        "value": 1111
    },
    {
        "name": "手机",
        "value": 885
    },
    {
        "name": "电脑",
        "value": 543
    },
    {
        "name": "大家电",
        "value": 321
    },
    {
        "name": "家电关注品牌",
        "value": 253
    },
    {
        "name": "网络设备",
        "value": 162
    },
    {
        "name": "摄影器材",
        "value": 149
    },
    {
        "name": "影音设备",
        "value": 133
    },
    {
        "name": "办公数码设备",
        "value": 113
    },
    {
        "name": "生活电器",
        "value": 67
    },
    {
        "name": "厨房电器",
        "value": 54
    },
    {
        "name": "智能设备",
        "value": 45
    },
    {
        "name": "个人护理电器",
        "value": 22
    },
    {
        "name": "服饰鞋包",
        "value": 1047
    },
    {
        "name": "服装",
        "value": 566
    },
    {
        "name": "饰品",
        "value": 289
    },
    {
        "name": "鞋",
        "value": 184
    },
    {
        "name": "箱包",
        "value": 168
    },
    {
        "name": "奢侈品",
        "value": 137
    },
    {
        "name": "母婴亲子",
        "value": 1041
    },
    {
        "name": "孕婴保健",
        "value": 505
    },
    {
        "name": "母婴社区",
        "value": 299
    },
    {
        "name": "早教",
        "value": 103
    },
    {
        "name": "奶粉辅食",
        "value": 66
    },
    {
        "name": "童车童床",
        "value": 41
    },
    {
        "name": "关注品牌",
        "value": 271
    },
    {
        "name": "宝宝玩乐",
        "value": 30
    },
    {
        "name": "母婴护理服务",
        "value": 25
    },
    {
        "name": "纸尿裤湿巾",
        "value": 16
    },
    {
        "name": "妈妈用品",
        "value": 15
    },
    {
        "name": "宝宝起名",
        "value": 12
    },
    {
        "name": "童装童鞋",
        "value": 9
    },
    {
        "name": "胎教",
        "value": 8
    },
    {
        "name": "宝宝安全",
        "value": 1
    },
    {
        "name": "宝宝洗护用品",
        "value": 1
    },
    {
        "name": "软件应用",
        "value": 1018
    },
    {
        "name": "系统工具",
        "value": 896
    },
    {
        "name": "理财购物",
        "value": 440
    },
    {
        "name": "生活实用",
        "value": 365
    },
    {
        "name": "影音图像",
        "value": 256
    },
    {
        "name": "社交通讯",
        "value": 214
    },
    {
        "name": "手机美化",
        "value": 39
    },
    {
        "name": "办公学习",
        "value": 28
    },
    {
        "name": "应用市场",
        "value": 23
    },
    {
        "name": "母婴育儿",
        "value": 14
    },
    {
        "name": "游戏",
        "value": 946
    },
    {
        "name": "手机游戏",
        "value": 565
    },
    {
        "name": "PC游戏",
        "value": 353
    },
    {
        "name": "网页游戏",
        "value": 254
    },
    {
        "name": "游戏机",
        "value": 188
    },
    {
        "name": "模拟辅助",
        "value": 166
    },
    {
        "name": "个护美容",
        "value": 942
    },
    {
        "name": "护肤品",
        "value": 177
    },
    {
        "name": "彩妆",
        "value": 133
    },
    {
        "name": "美发",
        "value": 80
    },
    {
        "name": "香水",
        "value": 50
    },
    {
        "name": "个人护理",
        "value": 46
    },
    {
        "name": "美甲",
        "value": 26
    },
    {
        "name": "SPA美体",
        "value": 21
    },
    {
        "name": "花鸟萌宠",
        "value": 914
    },
    {
        "name": "绿植花卉",
        "value": 311
    },
    {
        "name": "狗",
        "value": 257
    },
    {
        "name": "其他宠物",
        "value": 131
    },
    {
        "name": "水族",
        "value": 125
    },
    {
        "name": "猫",
        "value": 122
    },
    {
        "name": "动物",
        "value": 81
    },
    {
        "name": "鸟",
        "value": 67
    },
    {
        "name": "宠物用品",
        "value": 41
    },
    {
        "name": "宠物服务",
        "value": 26
    },
    {
        "name": "书籍阅读",
        "value": 913
    },
    {
        "name": "网络小说",
        "value": 483
    },
    {
        "name": "关注书籍",
        "value": 128
    },
    {
        "name": "文学",
        "value": 105
    },
    {
        "name": "报刊杂志",
        "value": 77
    },
    {
        "name": "人文社科",
        "value": 22
    },
    {
        "name": "建材家居",
        "value": 907
    },
    {
        "name": "装修建材",
        "value": 644
    },
    {
        "name": "家具",
        "value": 273
    },
    {
        "name": "家居风格",
        "value": 187
    },
    {
        "name": "家居家装关注品牌",
        "value": 140
    },
    {
        "name": "家纺",
        "value": 107
    },
    {
        "name": "厨具",
        "value": 47
    },
    {
        "name": "灯具",
        "value": 43
    },
    {
        "name": "家居饰品",
        "value": 29
    },
    {
        "name": "家居日常用品",
        "value": 10
    },
    {
        "name": "生活服务",
        "value": 883
    },
    {
        "name": "物流配送",
        "value": 536
    },
    {
        "name": "家政服务",
        "value": 108
    },
    {
        "name": "摄影服务",
        "value": 49
    },
    {
        "name": "搬家服务",
        "value": 38
    },
    {
        "name": "物业维修",
        "value": 37
    },
    {
        "name": "婚庆服务",
        "value": 24
    },
    {
        "name": "二手回收",
        "value": 24
    },
    {
        "name": "鲜花配送",
        "value": 3
    },
    {
        "name": "维修服务",
        "value": 3
    },
    {
        "name": "殡葬服务",
        "value": 1
    },
    {
        "name": "求职创业",
        "value": 874
    },
    {
        "name": "创业",
        "value": 363
    },
    {
        "name": "目标职位",
        "value": 162
    },
    {
        "name": "目标行业",
        "value": 50
    },
    {
        "name": "兼职",
        "value": 21
    },
    {
        "name": "期望年薪",
        "value": 20
    },
    {
        "name": "实习",
        "value": 16
    },
    {
        "name": "雇主类型",
        "value": 10
    },
    {
        "name": "星座运势",
        "value": 789
    },
    {
        "name": "星座",
        "value": 316
    },
    {
        "name": "算命",
        "value": 303
    },
    {
        "name": "解梦",
        "value": 196
    },
    {
        "name": "风水",
        "value": 93
    },
    {
        "name": "面相分析",
        "value": 47
    },
    {
        "name": "手相",
        "value": 32
    },
    {
        "name": "公益",
        "value": 90
    }
    ],
    //云朵图片
    image: "data:image/png;base64,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VmAthdbxwO3GBPDcCiiwSYFPAvH7wK9s8pmZnzBmYMXQdgBiv+f4a1NAgekJxI6hEVb/N4XSxg6sMIhXWPHbw7hS1qaAAtMQuAZ48dSuoZxCYC1Nz+HA891meRqr1SqqFnhP823+xVNTmFJghc12TWjtPzUo61GgAoHzmqCKC0In2aYWWEtIj2mC6wGTVLMoBeYl8D3gXcCrgf+d8tCmGlhLZgcCBwDbThnR2hQoVCDe8kVQxaZ78ZnV5NvUAysA49ZhS8G15eRFLVCB6Qt8EYir1SOoJv2KaiVlCYG1VPOdgL2B3YCHAbee/rqwQgUmIxAb7J3WPIrd8qmkwFo+83deFly7AH88mWVhIQpMS+CzwOlNUH1nWqW1r6bUwFo50p2BeOzU/G0v4REKzEPgbOAc4PNAfOt31TyGtX4UcwmslXOyNRCPbZq/8c/xqixeiW02pwl0LFUJXAf8qHlcAVzWPC5f9s+zBplrYG1s0iKwIrgiwGwKlCAQIXUl8N8lFJuzxhoDK6enfSugQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEYBAysjrl0roEBaAQMrrae9KaBARgEDKyOuXSugQFoBAyutp70poEBGAQMrI65dK6BAWgEDK62nvSmgQEaB3wNj5+o8TA77DQAAAABJRU5ErkJggg=="
}

/**
 * 遇到一个大坑， echarts 和 charts-wordcloud 版本不兼容导致控制台报错
 *  echarts-wordcloud@2 is for echarts@5 echarts-wordcloud@1 is for echarts@4
 */
class App extends React.Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('chart'));
        //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
        var maskImage = new Image();
        maskImage.src = data.image

        maskImage.onload = function () {
            myChart.setOption({
                backgroundColor: '#fff',
                tooltip: {
                    show: false
                },
                series: [{
                    type: 'wordCloud',
                    gridSize: 1,
                    sizeRange: [12, 60],
                    rotationRange: [-90, -45, 0, 45, 90],
                    rotationStep: 45,
                    maskImage: maskImage,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' +
                                    Math.round(Math.random() * 255) +
                                    ', ' + Math.round(Math.random() * 255) +
                                    ', ' + Math.round(Math.random() * 255) + ')'
                            }
                        }
                    },
                    emphasis: {
                        focus: 'self',
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    left: 'center',
                    top: 'center',
                    width: '100%',
                    height: '100%',
                    right: null,
                    bottom: null,
                    data: data.value
                }]
            })
        }
    }
    render() {
        return <div className="chart-container">
            <Collect title="收藏" style={{ transform: 'scale(0.5) translateX(200px)', background: 'red' }} />
            <img src={analyze} alt="analyze" style={{ transform: 'scale(0.3)' }} />
            <div id="chart"></div>
        </div>
    }
}

export default App