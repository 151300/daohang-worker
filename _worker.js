// 定义分类和网站链接的字典
const LINKS = {
	常用网站: {
		Google: 'https://www.google.com/?hl=en-US',
		Bing: 'https://www.bing.com/?setmkt=en-US&setlang=en-US',
		搜狗: 'https://www.sogou.com/',
		'360搜索': 'https://www.so.com/',
		今日头条: 'https://www.toutiao.com/',
		DuckDuckGo: 'https://duckduckgo.com/',
		'Brave Search': 'https://search.brave.com/',
		YouTube: 'https://www.youtube.com',
		GitHub: 'https://www.github.com',
		Cloudflare: 'https://dash.cloudflare.com',
		'OpenAI ChatGPT': 'https://chatgpt.com',
		DeepSeek: 'https://chat.deepseek.com/',
		纳米AI搜索: 'https://www.n.cn/',
		'GitHub Models': 'https://github.com/marketplace/models',
		'DuckDuckGo AI Chat': 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
		Qwen: 'https://chat.qwen.ai/',
		通义千问: 'https://tongyi.aliyun.com/',
		豆包: 'https://www.doubao.com/chat/',
		文心一言: 'https://yiyan.baidu.com/',
		腾讯元宝: 'https://yuanbao.tencent.com/chat',
	},
	导航网站: {
		Hao123: 'https://www.hao123.com/',
		'360导航': 'https://hao.360.com/',
		'2345网址导航': 'https://www.2345.com/',
		毒霸网址大全: 'https://www.duba.com/',
		搜狗网址导航: 'https://123.sogou.com/',
	},
	看视频: {
		YouTube: 'https://www.youtube.com',
		Netflix: 'https://www.netflix.com',
		TikTok: 'https://www.tiktok.com',
		抖音: 'https://www.douyin.com/',
		西瓜视频: 'https://www.ixigua.com/',
		爱奇艺: 'https://www.iqiyi.com',
		腾讯视频: 'https://v.qq.com',
		优酷: 'https://www.youku.com',
		芒果: 'https://www.mgtv.com/',
		哔哩哔哩: 'https://www.bilibili.com',
		搜狐视频: 'https://tv.sohu.com/',
	},
	听音乐: {
		网易云音乐: 'https://music.163.com/',
		QQ音乐: 'https://y.qq.com/',
		酷狗音乐: 'https://www.kugou.com/',
		酷我音乐: 'https://www.kuwo.cn/',
		咪咕音乐: 'https://music.migu.cn/',
		千千音乐: 'https://music.taihe.com/',
	},
	PlayGround: {
		'Google AI Studio': 'https://aistudio.google.com/app/prompts/new_chat',
		'GitHub AI Playground': 'https://github.com/marketplace/models',
		'Together Playground': 'https://api.together.ai/playground/chat',
		'Cohere Command Playground': 'https://dashboard.cohere.com/playground',
		'AI21 Jamba Playground': 'https://studio.ai21.com/v2/chat',
		'IBM Granite Playground': 'https://www.ibm.com/granite/playground/',
		'Groq Playground': 'https://console.groq.com/playground',
		'Liquid Playground': 'https://playground.liquid.ai/',
		'Perplexity Playground': 'https://labs.perplexity.ai/',
		'Cloudflare AI Playground': 'https://playground.ai.cloudflare.com/',
	},
	DeepSeek: {
		DeepSeek: 'https://chat.deepseek.com/',
		纳米AI搜索: 'https://www.n.cn/',
		'纳米AI-大模型': 'https://bot.n.cn/',
		知乎直答: 'https://zhida.zhihu.com/',
		腾讯元宝: 'https://yuanbao.tencent.com/chat',
		天工AI: 'https://www.tiangong.cn/',
		火山方舟: 'https://www.volcengine.com/experience/ark',
		当贝AI: 'https://ai.dangbei.com/chat',
		秘塔AI搜索: 'https://metaso.cn/',
		YAYI雅意: 'https://yayi.wenge.com/',
		有道翻译AI: 'https://fanyi.youdao.com/#/AITranslate',
		超算互联网: 'https://www.scnet.cn/ui/chatbot/',
		问小白: 'https://www.wenxiaobai.com/',
		心流AI助手: 'https://iflow.cn/',
		'博查-多模态AI搜索': 'https://bochaai.com/',
		万知: 'https://www.wanzhi.com/',
		Deepinfra: 'https://deepinfra.com/chat/',
	},
	AI国外: {
		'OpenAI ChatGPT': 'https://chatgpt.com',
		'Microsoft Copilot': 'https://copilot.microsoft.com/',
		'Skype Copilot': 'https://web.skype.com/',
		'DuckDuckGo AI Chat': 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
		'Google Gemini': 'https://gemini.google.com/',
		'Anthropic Claude': 'https://claude.ai/',
		'Cohere Chat': 'https://coral.cohere.com/',
		'Ai21 Jamba': 'https://chat.ai21.com/',
		'Mistral Chat': 'https://chat.mistral.ai/',
		'pi.ai': 'https://pi.ai/',
		Grok: 'https://grok.com/',
		'Grok for x.com': 'https://x.com/i/grok?focus=1',
		HuggingChat: 'https://huggingface.co/chat/',
		Groq: 'https://groq.com/',
		Peo: 'https://poe.com/',
		OpenRouter: 'https://openrouter.ai/',
		YouChat: 'https://you.com/?chatMode=default',
		Phind: 'https://www.phind.com/',
		Perplexity: 'https://www.perplexity.ai/',
		'Nvidia Models': 'https://build.nvidia.com/models',
		DeepAi: 'https://deepai.org/chat',
	},
	AI国内: {
		Qwen: 'https://chat.qwen.ai/',
		通义千问: 'https://tongyi.aliyun.com/',
		豆包: 'https://www.doubao.com/chat/',
		文心一言: 'https://yiyan.baidu.com/',
		百度AI搜索: 'https://chat.baidu.com/',
		华为小艺: 'https://xiaoyi.huawei.com/chat/',
		智谱清言: 'https://chatglm.cn/',
		讯飞星火: 'https://xinghuo.xfyun.cn/',
		'360智脑': 'https://chat.360.com/',
		'360AI搜索': 'https://www.sou.com/',
		'百川智能-百小应': 'https://ying.baichuan-ai.com/chat',
		Kimi: 'https://kimi.moonshot.cn/',
		'商汤-商量': 'https://chat.sensetime.com/',
		'海螺-MiniMax': 'https://chat.minimaxi.com/',
		'海螺-MiniMax AI': 'https://chat.minimax.io/',
		跃问: 'https://yuewen.cn/chats/new',
		跃问new: 'https://www.stepfun.com/chats/new',
		紫东太初: 'https://taichu-web.ia.ac.cn/',
		元象大模型: 'https://chat.xverse.cn/xchat/index.html',
		Luca面壁露卡: 'https://luca.cn/',
		小悟空: 'https://wukong.com/',
	},
	智能体: {
		coze国际: 'https://www.coze.com/',
		coze中国: 'https://www.coze.cn/',
		腾讯元器: 'https://yuanqi.tencent.com/agent-shop',
		支付宝百宝箱: 'https://tbox.alipay.com/community',
		文心智能体: 'https://agents.baidu.com/center',
		'Dify.AI': 'https://dify.ai/zh',
		LinkAI: 'https://link-ai.tech/',
		Zapier: 'https://zapier.com/',
		Gnomic智能体: 'https://gnomic.cn/',
		BetterYeah: 'https://www.betteryeah.com/agentstore',
	},
	多模型: {
		'HIX Ai': 'https://hix.ai/home',
		Flowith: 'https://flowith.io/blank',
		'Not Diamond': 'https://chat.notdiamond.ai/',
		BlackboxAI: 'https://www.blackbox.ai/',
		ChatLabs: 'https://labs.writingmate.ai/',
		ChandlerAi: 'https://mychandler.bet/chat',
		ThinkAny: 'https://thinkany.ai/',
		'Devv AI': 'https://devv.ai/',
	},
	其它AI: {
		'glhf.chat': 'https://glhf.chat/',
		'ChatBot Arena': 'https://lmarena.ai/',
		Felo: 'https://felo.ai/zh-Hans/search',
		Genspark: 'https://www.genspark.ai/',
		'Andi Search': 'https://andisearch.com/',
		'Korea Wrtn': 'https://wrtn.ai/',
		MathGPT: 'https://mymathsolver.ai/zh-CN',
	},
	AI模型部署工具: {
		Ollama: 'https://ollama.com/',
		'LM Studio': 'https://lmstudio.ai/',
		Jan: 'https://jan.ai/',
		Msty: 'https://msty.app/',
		GPT4All: 'https://www.nomic.ai/gpt4all',
		Sanctum: 'https://sanctum.ai/',
		AnythingLLM: 'https://anythingllm.com/',
	},
	开源AI模型下载: {
		'Hugging Face': 'https://huggingface.co/models',
		'HF-Mirror': 'https://hf-mirror.com/',
		'阿里魔搭-ModelScope': 'https://www.modelscope.cn/home',
		'始智AI-WiseModel': 'https://wisemodel.cn/models',
		'Gitee AI': 'https://ai.gitee.com/',
		'Nexa AI': 'https://nexaai.com/models',
	},
	免费的代理工具: {
		WARP下载线路1: 'https://one.one.one.one/',
		WARP下载线路2: 'https://developers.cloudflare.com/warp-client/get-started/',
		'Proton VPN': 'https://protonvpn.com/',
		'VPN Gate': 'https://www.vpngate.net/cn/',
		'Tor(需配置网桥地址)': 'https://www.torproject.org/',
	},
	开源的代理工具: {
		v2rayN: 'https://github.com/2dust/v2rayN',
		'v2rayN-Pro': 'https://github.com/lowercase78/V2RayN-PRO',
		'hiddify-next': 'https://github.com/hiddify/hiddify-next',
		'NekoRay v4.0.1': 'https://github.com/MatsuriDayo/nekoray',
		NekoRay: 'https://github.com/Mahdi-zarei/nekoray',
		'GUI.for.SingBox': 'https://github.com/GUI-for-Cores/GUI.for.SingBox',
		'GUI.for.Clash': 'https://github.com/GUI-for-Cores/GUI.for.Clash',
		'mihomo-party': 'https://github.com/mihomo-party-org/mihomo-party',
		'Clash Verge rev': 'https://github.com/clash-verge-rev/clash-verge-rev',
		'Clash Nyanpasu': 'https://github.com/LibNyanpasu/clash-nyanpasu',
		FlClash: 'https://github.com/chen08209/FlClash',
		'Pandora-Box': 'https://github.com/snakem982/Pandora-Box',
		Karing: 'https://github.com/KaringX/karing',
		'Clah.Mata Android': 'https://github.com/MetaCubeX/ClashMetaForAndroid',
		'v2rayNG Android': 'https://github.com/2dust/v2rayNG',
		'MahsaNG Android': 'https://github.com/GFW-knocker/MahsaNG',
		'Neko_v2rayNG Android': 'https://github.com/Blawuken/Neko_v2rayNG',
		'NekoBox Android': 'https://github.com/MatsuriDayo/NekoBoxForAndroid',
		'V2free Android': 'https://github.com/bannedbook/v2ray.vpn',
		'v2flyNG Android': 'https://github.com/2dust/v2flyNG',
		'shadowsocksr Android': 'https://github.com/xxf098/shadowsocksr-v2ray-trojan-android',
		'Clash Verge v1.3.8': 'https://github.com/zzzgydi/clash-verge/releases/tag/v1.3.8',
		'hiddify v2023': 'https://github.com/hiddify/HiddifyClashDesktop',
		'clash for windows(CN)': 'https://github.com/Z-Siqi/Clash-for-Windows_Chinese',
		'clash for windows(EN)': 'https://archive.org/download/clash_for_windows_pkg',
	},
	社交平台: {
		Facebook: 'https://www.facebook.com',
		Twitter: 'https://x.com',
		LinkedIn: 'https://www.linkedin.com',
		Instagram: 'https://www.instagram.com',
		reddit: 'https://www.reddit.com',
		Discord: 'https://discord.com',
		Quora: 'https://www.quora.com',
		GMX: 'https://www.gmx.com/',
		微博: 'https://weibo.com',
		知乎: 'https://www.zhihu.com',
		微信: 'https://weixin.qq.com/',
		QQ: 'https://im.qq.com/index/',
		TIM: 'https://office.qq.com/',
		钉钉: 'https://www.dingtalk.com/',
		飞书: 'https://www.feishu.cn/',
		腾讯会议: 'https://meeting.tencent.com/',
	},
	电子邮箱: {
		Gmail: 'https://mail.google.com/',
	 2925无限邮箱: 'https://2925.com/',
	 Outlook: 'https://outlook.live.com/',
		ProtonMail: 'https://proton.me/',
		TutaMail: 'https://tuta.com/',
		iCloudMail: 'https://www.icloud.com/mail',
		QQmail: 'https://mail.qq.com/',
		'21CNmail': 'https://mail.21cn.com/',
		'163mail': 'https://mail.163.com/',
		阿里邮箱: 'https://mail.aliyun.com/?lang=zh_CN',
		新浪邮箱: 'https://mail.sina.com.cn/',
		搜狐邮箱: 'https://mail.sohu.com/',
		'tempail.com': 'https://tempail.com/',
		'temp-mail.org': 'https://temp-mail.org/en/',
		'temp-10minutemail': 'https://temp-mail.org/en/10minutemail',
		'10MinuteMail': 'https://10minutemail.net/',
		'Muellmail.com': 'https://muellmail.com/en',
		'tempmailo.com': 'https://tempmailo.com/',
		'temp-mail.io': 'https://temp-mail.io/en',
		mo2qt: 'https://www.mo2qt.com/',
		Zemail: 'https://zemail.me/',
		TempMail110: 'https://tempmail100.com/',
		incognito: 'https://incognitomail.co/',
		SandVPN: 'https://sandvpn.com/cn/mailbox',
		deepweb: 'https://deepweb.net/temp-email',
		MyTempMail: 'https://mytemp-mail.com/en',
		GuerrillaMail: 'https://www.guerrillamail.com/',
		'mail.tm': 'https://mail.tm/zh/',
		'tempmail.plus': 'https://tempmail.plus/',
		'Edu Mail': 'https://etempmail.com/zh',
		'internxt.com': 'https://internxt.com/zh/temporary-email',
		'mohmal.com': 'https://www.mohmal.com/en/inbox',
		'tmailor.com': 'https://tmailor.com',
		'tempmail.us.com': 'https://www.tempmail.us.com/zh/',
		'disposablemail.com': 'https://www.disposablemail.com/',
		'luxusmail.org': 'https://luxusmail.org/',
		'gettempmail.com': 'https://gettempmail.com/mailbox',
		'temp-inbox.me': 'https://temp-inbox.me/',
		'temp-inbox.com': 'https://temp-inbox.com/',
		'anonymmail.net': 'https://anonymmail.net/',
		'emailfake.com': 'https://emailfake.com/',
		'crazymailing.com': 'https://www.crazymailing.com/',
		'tempemail.dev': 'https://www.tempemail.dev/',
		'priyo.email': 'https://priyo.email/',
		'taxt.email': 'https://taxt.email/',
		'temp-mail.best': 'https://temp-mail.best/',
		'Temp-mail24': 'https://temp-mail24.com/',
		'tempmail.uno': 'https://tempmail.uno/',
		'mailrandom.com': 'https://www.mailrandom.com/',
		'tempmail.ws': 'https://www.tempmail.ws/',
		'tempmail.lol': 'https://tempmail.lol/zh/',
		'onetimemail.net': 'https://onetimemail.net/',
	},
};
// 网站标题（网站名称）
const WEBSITE_TITLE = '我的网址导航';

// 获取LINKS的第一个内部字典(第一个分类)
function getFirstInnerDict(outerDict) {
	for (let key in outerDict) {
		if (outerDict.hasOwnProperty(key)) {
			return outerDict[key]; // 返回第一个内部字典
		}
	}
	return null; // 如果外部对象为空，返回 null
}

async function handleRequest(request) {
	// 获取LINKS的第一个内部字典，即第一个分类（常用网站）
	const firstInnerDict = getFirstInnerDict(LINKS);
	// 如果第一个内部字典为空
	if (firstInnerDict == null) {
		return new Response('LINKS变量的值有问题！', {
			headers: { 'content-type': 'text/html;charset=UTF-8' },
		});
	}

	// 动态生成左侧分类名称
	let categoriesHtml = "<div class='categories'>";
	for (const category of Object.keys(LINKS)) {
		categoriesHtml += `<div class="category" onclick="showLinks('${category}')">${category}</div>`;
	}
	categoriesHtml += '</div>';

	// 动态生成初始右侧链接列表（默认显示常用网站）
	let linksHtml = "<div class='links-container'>";
	for (const [name, url] of Object.entries(firstInnerDict)) {
		linksHtml += `<div><a href="${url}" target="_blank">${name}</a></div>`;
	}
	linksHtml += '</div>';

	// HTML 页面内容，包含固定布局、搜索框和交互逻辑
	const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${WEBSITE_TITLE}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {  
            width: 100vw; 
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        /* 固定左侧导航栏 */
        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 280px;
            height: 100vh;
            background-color: #FAFAFA;
            overflow-y: auto;
            text-align: center;
			border-left: none;
            border-right: 1px solid #ccc;
            transition: width 0.3s ease;
            z-index: 1000;
        }

        /* 容器调整，避免被导航栏覆盖 */
        .container {
            margin-left: 280px;
            padding: 0;
            display: block;
            max-width: calc(100% - 280px);
            min-width: 300px;
        }

        /* 标题样式 */
        .sidebar h1 {
            margin-top: 40px;
            margin-bottom: 30px;
            font-size: 24px;
            color: #333;
        }

        .category {
            margin-top: 5px;
            margin-bottom: 5px;
            line-height: 2em;
            cursor: pointer;
            font-weight: bold;
            color: #333300;
        }
        .category:hover {
            color: #999933;
        }

        /* 右侧搜索框样式 */
        .search-bar {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            min-width: 150px;
            transition: none;
        }

        /* 右侧内容区域 */
        .content {
            padding: 20px;
            box-sizing: border-box;
            border-left: 1px solid #ccc;
			border-right: none;
            border-top: none;
            border-bottom: none;
        }

        /* 链接的布局 */
        .links-container {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            line-height: 32px;
            align-items: center;
        }
        .links-container div {
            width: calc(20% - 10px);
        }

        /* 链接样式 */
        a {
            text-decoration: none;
            color: #000;
            font-weight: bold;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
            transition: color 0.3s ease;
        }

        /* 鼠标悬停显示下划线 */
        a:hover {
            color: #999933;
            text-align: center;
        }

        /* 响应式设计 */

		/* 超大屏幕设备（>1200px） */
        @media (min-width: 1201px) {
            .sidebar {
                width: 300px;
            }
            .container {
                margin-left: 300px;
                max-width: calc(100% - 300px);
            }
            .sidebar h1 {
                font-size: 26px;
            }
            .category {
                font-size: 16px;
            }
            .search-bar {
                padding: 12px;
            }
            .content {
                padding: 25px;
            }
            .links-container div {
                width: calc(20% - 10px); /* 每行显示5个链接 */
            }
        }

        /* 大屏幕设备（992px - 1200px） */
        @media (max-width: 1200px) and (min-width: 992px) {
            .sidebar {
                width: 280px;
            }
            .container {
                margin-left: 280px;
                max-width: calc(100% - 280px);
            }
            .sidebar h1 {
                font-size: 24px;
            }
            .category {
                font-size: 15px;
            }
            .search-bar {
                padding: 10px;
            }
            .content {
                padding: 20px;
            }
            .links-container div {
                width: calc(33.33% - 10px); /* 每行显示3个链接 */
            }
        }

        /* 中等屏幕设备（600px - 992px） */
        @media (max-width: 991px) and (min-width: 600px) {
            .sidebar {
                width: 220px;
            }
            .container {
                margin-left: 220px;
                max-width: calc(100% - 220px);
            }
            .sidebar h1 {
                font-size: 22px;
            }
            .category {
                font-size: 14px;
            }
            .search-bar {
                padding: 8px;
            }
            .content {
                padding: 18px;
            }
            .links-container div {
                width: calc(50% - 10px); /* 每行显示2个链接 */
            }
        }

        /* 小屏幕设备（480px - 600px） */
        @media (max-width: 599px) and (min-width: 480px) {
            .sidebar {
                width: 180px;
            }
            .container {
                margin-left: 180px;
                max-width: calc(100% - 180px);
            }
            .sidebar h1 {
                font-size: 20px;
            }
            .category {
                font-size: 13px;
            }
            .search-bar {
                padding: 7px;
            }
            .content {
                padding: 15px;
            }
            .links-container div {
                width: 100%; /* 每行显示1个链接 */
            }
        }

        /* 手机设备（480px以下） */
        @media (max-width: 480px) {
            .sidebar {
                position: relative; /* 取消固定定位 */
                width: 100%;
                height: auto;
                border-left: none;
                border-right: none;
                border-top: 2px solid #ccc;
                border-bottom: 1px solid #ccc;
            }

            .container {
                margin-left: 0;
                max-width: 100%;
                display: flex;
                flex-direction: column;
            }

            .content {
                padding: 10px;
                border-left: none;
                border-right: none;
            }

            .links-container div {
                width: 100%; /* 每行显示1个链接 */
            }

            .search-bar {
                width: 100%;
                padding: 8px;
            }

            .sidebar h1 {
                font-size: 18px;
            }

            .category {
                font-size: 12px;
            }

            .content {
                padding: 12px;
            }
        }
    </style>
</head>

<body>
    <div class="sidebar">
        <h1>${WEBSITE_TITLE}</h1>
        ${categoriesHtml}
    </div>
    <div class="container">
        <!-- 右侧内容区域 -->
        <div class="content">
            <!-- 搜索框 -->
            <input type="text" id="searchInput" class="search-bar" placeholder="搜索本站的链接名称..." oninput="filterLinks()">
            <div id="links">${linksHtml}</div>
        </div>
    </div>

    <script>
        const linksData = ${JSON.stringify(LINKS)};

        // 根据类别显示对应的链接
        function showLinks(category) {
            const linksContainer = document.getElementById('links');
            let linksHtml = "<div class='links-container'>";
            for (const [name, url] of Object.entries(linksData[category])) {
                linksHtml += \`<div><a href="\${url}" target="_blank">\${name}</a></div>\`;
            }
            linksHtml += "</div>";
            linksContainer.innerHTML = linksHtml;
        }

        // 搜索框功能：根据关键词筛选链接
        function filterLinks() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const linksContainer = document.getElementById('links');
            let filteredLinksHtml = "<div class='links-container'>";
            
            // 遍历所有分类，找到匹配的链接
            for (const category of Object.keys(linksData)) {
                for (const [name, url] of Object.entries(linksData[category])) {
                    if (name.toLowerCase().includes(input)) {
                        filteredLinksHtml += \`<div><a href="\${url}" target="_blank">\${name}</a></div>\`;
                    }
                }
            }

            filteredLinksHtml += "</div>";
            linksContainer.innerHTML = filteredLinksHtml;
        }

        // 页面加载时显示默认分类的链接（可选）
        window.onload = function() {
            const defaultCategory = Object.keys(linksData)[0];
            showLinks(defaultCategory);
        }
    </script>
</body>
</html>
`;

	// 返回 HTML 内容
	return new Response(htmlContent, {
		headers: { 'content-type': 'text/html;charset=UTF-8' },
	});
}

export default {
	async fetch(request, env, _ctx) {
		return handleRequest(request);
	},
};
