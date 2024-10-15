import { Flex, Image } from "antd";
import IconEmail from "~icons/mdi/email";

export default function Footer({ toggleDebug }: { toggleDebug?: () => void }) {
  import.meta.env.DEV && console.log("Footer()");

  return (
    <footer className="small-text gray-text">
      <Flex
        vertical
        align="center"
        style={{
          maxWidth: "40rem",
          backgroundColor: "var(--clr-secondary-bg)",
          color: "var(--clr-secondary-fg)",
          marginTop: "12rem",
          paddingTop: "4rem",
          paddingBottom: "0.25rem",
          borderRadius: "16px 16px 0 0",
          flexGrow: 1,
        }}
      >
        <Image
          className="image"
          src={new URL("/src/assets/wechat_qr.png", import.meta.url).href}
          title="微信二维码"
          alt="微信二维码"
          width={96}
        />

        <Flex align="flex-end" gap="0.25rem">
          <IconEmail style={{ fontSize: "0.8rem" }} />
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
