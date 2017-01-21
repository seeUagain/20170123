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
        src: 'http://thumbnail0.baidupcs.com/thumbnail/8bc9ca83d46bd82dd43dcf2fa2fd2369?fid=890062901-250528-172243957784795&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-gOVaTCrHajLmm%2FUJuBpkf%2FYOWdg%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.fadeIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.2.22 我们一起看了第一场电影，吃了第一次饭', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/fd05e023c910b80871ab165132404f52?fid=890062901-250528-1076052888019592&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ePbXpGu2am0%2FUUlqPcchVsdWZdg%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.flipXIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.4.8 我们一起去了常州恐龙园', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/2d844cc790abb8352df3a7cf9936df0e?fid=890062901-250528-728756288539575&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-GwVFI%2BRF2dlvoT0FskUSzbZ5Lkw%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.flipYIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.7.5 我们夜游秦淮', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/4c5a33e21a197d901e27543e45dd5a87?fid=890062901-250528-691415491446135&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-5McpeXNGo7lXa9d69V2a2VtiQ%2Bg%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.flipBounceXIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.7.22 谢谢你陪我过生日', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/48c6d65f45939853886285db50aad2d4?fid=890062901-250528-789313710679151&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-4PATJV97Dy8z%2BCsO6KLFnCzgRH4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472824900112693020&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.flipBounceYIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.8.16 酷暑下清凉的水魔方', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/eb58d8a5e02244b47a83f88fb7dda6a3?fid=890062901-250528-195089604631213&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-PveE9SAQ6D7%2BMObbu3Y7bdZHssk%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472824900112693020&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.swoopIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2015.10.12 终~于~我~们~结~婚~啦!~', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/670d7379f57a273fdaf5e7deac48357b?fid=890062901-250528-599474540437820&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jXYY6F8%2Fo%2F%2FvDy7yCWr8TgsrX%2Fk%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472824900112693020&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.whirlIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '那一天的你是最美的你', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/28e72b411cd699d0934a6be9a641f8dd?fid=890062901-250528-1059994379848958&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-A43QC9oFjJMMtjARShEtjqklLfs%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472824900112693020&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.shrinkIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.1.23 这次换我陪你过生日啦', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/63953380be91e700e385eaf465495759?fid=890062901-250528-938115110159263&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ycddpvFaRab7xvymZwimHQbLiqU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472824900112693020&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.expandIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.3 蜜月之行正式开始，我们行走在张家界的天然氧吧中', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/fdea176fd5e238540519c099d8a8ac88?fid=890062901-250528-405235464596214&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-7nfyoUmUp9AlIxhKzRhpB1mmhRI%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.bounceIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '在玻璃栈道上瑟瑟发抖', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/21e877f0b18aa022a47a885de5d1fe97?fid=890062901-250528-343450926715611&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-j9kMICAVuamre0WTVzXlYl9gduQ%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.bounceUpIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '凤凰古城里也留下了你最美的身影', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/40741419cb3195c65385d494bac6e83d?fid=890062901-250528-917221865988215&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-DVRSBgXkLMH0EilZ5AObzFztYmM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.bounceDownIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '你在海神庙绝美的景色中添加了最动人的一笔', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/23fd7e743f9546418d6f2b7ef3753a3f?fid=890062901-250528-30384848264899&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-eAHLIlRjTiURFGEg5eZ9hxTygJ8%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.slideLeftIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '阿勇河上有我们的欢声笑语', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/88284155abbc35b123eaa2b0c7da8e7b?fid=890062901-250528-1050566102595513&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-hMXXHoNdM3tGg6yHajO7kJEolmk%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.slideRightIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '白沙滩上有你活泼的身影', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/a0fcf641bc9e03f8bfffe0917eebda4e?fid=890062901-250528-39149280956963&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-IzwA%2F7Qi%2FGwIq7qQrC4wWeNeSTk%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.perspectiveUpIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.6.2 我们去看了懒懒的熊猫，威风的老虎...', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/6ea2703080e3ba1b4f515ac500f4ccbf?fid=890062901-250528-32730255233873&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-REeJ%2BttVfAJivzXJ1nGFGtQ2p4s%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.perspectiveDownIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.6 你生病的样子实在让人心疼', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/edc5e84ea7889816bd50b91fcc4cf828?fid=890062901-250528-436717755551597&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-O9LzQIwG%2BqsCWuNUETowVHlht%2Fk%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.bounceLeftIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.9.25 你开心的像个（熊）孩子', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/7a05983b5817aefcf64f08b5ed2c71e4?fid=890062901-250528-663320685177608&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rkIQ211X5eshd%2Ble74eBUQPahvQ%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.bounceRightIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.10.12 结婚壹周年纪念日', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/672d2df954fdf0986849b9def431788e?fid=890062901-250528-37773101153665&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-5jwA7tZ60g%2F9Y9CTYcY1PAIL6qw%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.slideUpIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '2016.10.22 拍摄婚纱照', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/41808ae90bdd0d4031711198018060d8?fid=890062901-250528-35305833467281&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TEkSB%2BPATy35%2FzqbqvYDaAYwA8E%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.slideDownIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '无论是吃货的你', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/4f57070e928a4f7b3d9f07d9278e176e?fid=890062901-250528-642675733285388&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-VlxGkw6hlqTv5hrhsDngiRB6vaw%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.perspectiveLeftIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '还是犯二的你', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/736a7457a921a9ab9c6d448e031e31e6?fid=890062901-250528-818561307265733&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-fITdiLoAK%2FtNBHJzpzU4dUGaiQo%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
        properties: {
            in: 'transition.perspectiveRightIn',
            out: 'transition.fadeOut'
        }
    },
    {
        text: '我都会一直爱着你~', 
        src: 'http://thumbnail0.baidupcs.com/thumbnail/b7df46af82ae97b85c4b0954cd3003c2?fid=890062901-250528-581482646446023&time=1484960400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-VywlFvbkSHuXn0A8rvluCtklfMg%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=472864855641890470&dp-callid=0&size=c1920_u1080&quality=90',
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