import DigitalMarketingServices from "@/components/digitalmarketingservices/Digital-Marketing-Services"
import ImproveSEOonShopify from "./ImproveSEOonShopify"


const page = () => {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n        h4 {\n            text-align: center;\n            font-size: 20px;\n            font-family: "ProximaNova-Extrabld", Arial;\n            color: #576c2c;\n        }\n\n        .title_sections {\n            text-align: left;\n        }\n\n        li::marker {\n            color: #576c2c;\n        }\n\n        .list-design-wrap {\n            /* box-sizing: border-box; */\n            max-width: 960px;\n            margin: 0 auto;\n            margin-bottom: 20px;\n        }\n    '
                }}
            />
            <div className="pd_top_70" />
            <DigitalMarketingServices />
            <ImproveSEOonShopify />
        </>

    )
}

export default page