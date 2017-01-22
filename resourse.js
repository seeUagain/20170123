const texts = [
    '',
    '陈丹，你的出现，占满了我的视线，我愿随你永远',
    '自从遇见你那天开始，我的心就像跌进深深的湖水，推不开躲不掉，心一直想往你身上靠',
    '只要你愿意，当你失落失意的时候，需要一个肩膀的时候，告诉我，我会立即出现',
    '之前我不相信一见钟情，但是见到你的那一刻，我否定了我的看法。我的心为你沉沦，从此只为你跳动',
    '有一种爱的感觉，叫感同身受。有一种爱的默契，叫心有灵犀。有一种爱的承诺，叫天长地久',
    '有一种爱的方式，是执子之手，与子偕老',
    '莎士比亚说过：爱情是一种甜蜜的痛苦，但是我愿意忍受这种痛苦',
    '莎士比亚还说过，世界上没有比服侍爱情更快乐的了，你愿不愿意享受这种快乐？',
    'I LOVE YOU',
    '2017.1.23',
    '厉凡'
];

const images = [
    {
        text: '2015.1. 第一次看到你的照片', 
        src: 'http://t1.qpic.cn/mblogpic/48f1e35592ef4136f13e/2000',
        properties: {
            in: 'transition.fadeIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.2.22 我们一起看了第一场电影，吃了第一次饭', 
        src: 'http://t1.qpic.cn/mblogpic/61aff4c3c45d9d348b9c/2000',
        properties: {
            in: 'transition.flipXIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.4.8 我们一起去了常州恐龙园', 
        src: 'http://t1.qpic.cn/mblogpic/f7ecac0ed068aef1c028/2000',
        properties: {
            in: 'transition.flipYIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.7.5 我们夜游秦淮', 
        src: 'http://t1.qpic.cn/mblogpic/6b87c9baf2ab2d17d5a2/2000',
        properties: {
            in: 'transition.flipBounceXIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.7.22 谢谢你陪我过生日', 
        src: 'http://t1.qpic.cn/mblogpic/95fe66954807c53c200c/2000',
        properties: {
            in: 'transition.flipBounceYIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.8.16 酷暑下清凉的水魔方', 
        src: 'http://t1.qpic.cn/mblogpic/f202cd247c72c7b08bb0/2000',
        properties: {
            in: 'transition.swoopIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.10.12 终~于~我~们~结~婚~啦!~', 
        src: 'http://t1.qpic.cn/mblogpic/a6cf71b2eb65acddda16/2000',
        properties: {
            in: 'transition.whirlIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '那一天的你是最美的你', 
        src: 'http://t1.qpic.cn/mblogpic/bd322f410cbf63a5d63a/2000',
        properties: {
            in: 'transition.shrinkIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.1.23 这次换我陪你过生日啦', 
        src: 'http://t1.qpic.cn/mblogpic/637928421df3eba3b140/2000',
        properties: {
            in: 'transition.expandIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.3 蜜月之行正式开始，我们行走在张家界的天然氧吧中', 
        src: 'http://t1.qpic.cn/mblogpic/fca34a218b2f41363d6c/2000',
        properties: {
            in: 'transition.bounceIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '在玻璃栈道上瑟瑟发抖', 
        src: 'http://t1.qpic.cn/mblogpic/7798f85e29a1cb7ca406/2000',
        properties: {
            in: 'transition.bounceUpIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '凤凰古城里也留下了你最美的身影', 
        src: 'http://t1.qpic.cn/mblogpic/f34d72163493046a988c/2000',
        properties: {
            in: 'transition.bounceDownIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '你在海神庙绝美的景色中添加了最动人的一笔', 
        src: 'http://t1.qpic.cn/mblogpic/34a67f6ca35aee7564c4/2000',
        properties: {
            in: 'transition.slideLeftIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '阿勇河上有我们的欢声笑语', 
        src: 'http://t1.qpic.cn/mblogpic/0e9877a31937a0cd9ee2/2000',
        properties: {
            in: 'transition.slideRightIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '白沙滩上有你活泼的身影', 
        src: 'http://t1.qpic.cn/mblogpic/1032173ff6248b800de2/2000',
        properties: {
            in: 'transition.perspectiveUpIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.6.2 我们去看了懒懒的熊猫，威风的老虎...', 
        src: 'http://t1.qpic.cn/mblogpic/4fd41c70a902b3b24cf0/2000',
        properties: {
            in: 'transition.perspectiveDownIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.6 你生病的样子实在让人心疼', 
        src: 'http://t1.qpic.cn/mblogpic/c7e1c7933ed99fa454ca/2000',
        properties: {
            in: 'transition.bounceLeftIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.9.25 你开心的像个（熊）孩子', 
        src: 'http://t1.qpic.cn/mblogpic/984e5dfedb03195546ba/2000',
        properties: {
            in: 'transition.bounceRightIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.10.12 结婚壹周年纪念日', 
        src: 'http://t1.qpic.cn/mblogpic/b60db8abe9d8fe61dd1c/2000',
        properties: {
            in: 'transition.slideUpIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.10.22 拍摄婚纱照', 
        src: 'http://t1.qpic.cn/mblogpic/2011990a6f9057ec3226/2000',
        properties: {
            in: 'transition.slideDownIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '无论是吃货的你', 
        src: 'http://t1.qpic.cn/mblogpic/2d1ca49861b8f8e4e51e/2000',
        properties: {
            in: 'transition.perspectiveLeftIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '还是犯二的你', 
        src: 'http://t1.qpic.cn/mblogpic/3b1d1ee1529587574414/2000',
        properties: {
            in: 'transition.perspectiveRightIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '我都会一直爱着你~', 
        src: 'http://t1.qpic.cn/mblogpic/0be9ef5aac71ccbe93dc/2000',
        properties: {
            in: 'transition.expandIn',
            out: 'transition.fadeOut'
        }
    }
];

const snowflakeURl = [
    'http://img.mukewang.com/55adde120001d34e00410041.png',
    'http://img.mukewang.com/55adde2a0001a91d00410041.png',
    'http://img.mukewang.com/55adde5500013b2500400041.png',
    'http://img.mukewang.com/55adde62000161c100410041.png',
    'http://img.mukewang.com/55adde7f0001433000410041.png',
    'http://img.mukewang.com/55addee7000117b500400041.png'
];
