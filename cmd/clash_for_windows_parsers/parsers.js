module.exports.parse = async (raw, {
    axios,
    yaml,
    notify,
    console
}, {
    name,
    url,
    interval,
    selected
}) => {
    const obj = yaml.parse(raw)
    console.log(name)
    console.log(url)
    console.log(interval)
    console.log(selected)
    console.log(obj)
    obj['rules'] = [
        'RULE-SET,reject,REJECT',
        'DOMAIN-SUFFIX,ip-api.com,DIRECT',
        'DOMAIN-SUFFIX,ipip.net,DIRECT',
        'DOMAIN-SUFFIX,ip138.com,DIRECT',
        'DOMAIN-SUFFIX,stunnel.vip,DIRECT',
        'DOMAIN-SUFFIX,gotochinatown.net,DIRECT',
        'DOMAIN-SUFFIX,ghelper.net,DIRECT',
        'DOMAIN-SUFFIX,ghelper.me,DIRECT',
        'DOMAIN-SUFFIX,ghelper.xyz,DIRECT',
        'DOMAIN-SUFFIX,ghelper.org,DIRECT',
        'DOMAIN-SUFFIX,fastapi.me,DIRECT',
        'DOMAIN-SUFFIX,vps315.com,DIRECT',
        'DOMAIN-SUFFIX,copyplay.net,DIRECT',
        'DOMAIN-SUFFIX,pickdown.net,DIRECT',
        'DOMAIN-KEYWORD,google,Ghelper',
        'DOMAIN-KEYWORD,youtube,Ghelper',
        'DOMAIN-SUFFIX,ggpht.com,Ghelper',
        'DOMAIN-SUFFIX,gmail.com,Ghelper',
        'DOMAIN-SUFFIX,gvt2.com,Ghelper',
        'DOMAIN-SUFFIX,gvt3.com,Ghelper',
        'DOMAIN-SUFFIX,chrome.com,Ghelper',
        'DOMAIN-SUFFIX,wikipedia.org,Ghelper',
        'DOMAIN-SUFFIX,wikimedia.org,Ghelper',
        'DOMAIN-SUFFIX,appspot.com,Ghelper',
        'DOMAIN-SUFFIX,android.com,Ghelper',
        'DOMAIN-SUFFIX,github.com,Ghelper',
        'DOMAIN-SUFFIX,gitbook.com,Ghelper',
        'DOMAIN-SUFFIX,kaggle.com,Ghelper',
        'DOMAIN-SUFFIX,arxiv.org,Ghelper',
        'DOMAIN-SUFFIX,wiktionary.org,Ghelper',
        'DOMAIN-SUFFIX,blogger.com,Ghelper',
        'DOMAIN-SUFFIX,youtu.be,Ghelper',
        'DOMAIN-SUFFIX,ytimg.com,Ghelper',
        'DOMAIN-SUFFIX,youtube.com,Ghelper',
        'DOMAIN-SUFFIX,instagram.com,Ghelper',
        'DOMAIN-SUFFIX,twitter.com,Ghelper',
        'DOMAIN-SUFFIX,t.co,Ghelper',
        'DOMAIN-SUFFIX,facebook.com,Ghelper',
        'DOMAIN-SUFFIX,telegram.org,Ghelper',
        'IP-CIDR,192.168.0.0/16,DIRECT',
        'IP-CIDR,10.0.0.0/8,DIRECT',
        'IP-CIDR,172.16.0.0/12,DIRECT',
        'IP-CIDR,172.23.0.0/12,DIRECT',
        'IP-CIDR,127.0.0.0/8,DIRECT',
        'IP-CIDR,100.64.0.0/10,DIRECT',
        'IP-CIDR6,::1/128,DIRECT',
        'IP-CIDR6,fc00::/7,DIRECT',
        'IP-CIDR6,fe80::/10,DIRECT',
        'IP-CIDR6,fd00::/8,DIRECT',
        'GEOIP,CN,DIRECT',
        'PROCESS-NAME,chrome.exe,Ghelper',
        'PROCESS-NAME,Clash for Windows.exe,Ghelper',
        'MATCH,DIRECT'
    ]
    obj['rule-providers'] = {
        "reject": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/reject.txt",
            "path": "./ruleset/reject.yaml",
            "interval": 86400
        },
        "icloud": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/icloud.txt",
            "path": "./ruleset/icloud.yaml",
            "interval": 86400
        },
        "apple": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/apple.txt",
            "path": "./ruleset/apple.yaml",
            "interval": 86400
        },
        "google": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/google.txt",
            "path": "./ruleset/google.yaml",
            "interval": 86400
        },
        "proxy": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt",
            "path": "./ruleset/proxy.yaml",
            "interval": 86400
        },
        "direct": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/direct.txt",
            "path": "./ruleset/direct.yaml",
            "interval": 86400
        },
        "private": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/private.txt",
            "path": "./ruleset/private.yaml",
            "interval": 86400
        },
        "gfw": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/gfw.txt",
            "path": "./ruleset/gfw.yaml",
            "interval": 86400
        },
        "greatfire": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/greatfire.txt",
            "path": "./ruleset/greatfire.yaml",
            "interval": 86400
        },
        "tld-not-cn": {
            "type": "http",
            "behavior": "domain",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/tld-not-cn.txt",
            "path": "./ruleset/tld-not-cn.yaml",
            "interval": 86400
        },
        "telegramcidr": {
            "type": "http",
            "behavior": "ipcidr",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/telegramcidr.txt",
            "path": "./ruleset/telegramcidr.yaml",
            "interval": 86400
        },
        "cncidr": {
            "type": "http",
            "behavior": "ipcidr",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/cncidr.txt",
            "path": "./ruleset/cncidr.yaml",
            "interval": 86400
        },
        "lancidr": {
            "type": "http",
            "behavior": "ipcidr",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/lancidr.txt",
            "path": "./ruleset/lancidr.yaml",
            "interval": 86400
        },
        "applications": {
            "type": "http",
            "behavior": "classical",
            "url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/applications.txt",
            "path": "./ruleset/applications.yaml",
            "interval": 86400
        }
    }
    return yaml.stringify(obj)
}