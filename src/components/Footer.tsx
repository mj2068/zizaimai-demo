import { Flex, Image } from "antd";

export default function Footer({ toggleDebug }: { toggleDebug?: () => void }) {
  // console.log("render - Footer");

  return (
    <footer className="small-text gray-text">
      <Flex vertical align="center">
        <Image
          className="image"
          src={new URL("/src/assets/wechat_qr.png", import.meta.url).href}
          title="微信二维码"
          alt="微信二维码"
          width={96}
        />

        <Flex align="center" gap="0.25rem">
          <span className="material-icons" style={{ fontSize: "1rem" }}>
            email
          </span>
          <a className="grey-text" href="mailto:yuelianghushenfu@sina.com">
            yuelianghushenfu@sina.com
          </a>
        </Flex>
        <button onClick={toggleDebug}>dev</button>
        <div className="copyright-container mar-t-8">
          <span>
            <a className="grey-text" href="https://zizaimai.space/demo/">
              zizaimai.space
            </a>
          </span>
        </div>
        <div className="miit-container">
          <a
            className="miit-link"
            href="http://beian.miit.gov.cn/"
            target="_blank"
          >
            鲁ICP备2022041953号-1
          </a>
        </div>
      </Flex>
    </footer>
  );
}
