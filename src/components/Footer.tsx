import { Flex, Image } from "antd";
import IconEmail from "~icons/mdi/email";
import JpgFooter from "@/assets/v4-footer.jpg";
import { Link } from "react-router-dom";

export default function Footer({ toggleDebug }: { toggleDebug?: () => void }) {
  if (import.meta.env.DEV) console.log("Footer()");

  return (
    <footer className="small-text gray-text" style={{}}>
      <Flex
        vertical
        align="center"
        style={{
          maxWidth: "40rem",
          // backgroundColor: "var(--clr-secondary-bg)",
          color: "var(--clr-dark-fg)",
          marginTop: "12rem",
          paddingTop: "8rem",
          paddingBottom: "0.25rem",
          borderRadius: "8px 8px 0 0",
          flexGrow: 1,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.4)",
        }}
      >
        <img
          src={JpgFooter}
          alt="footer"
          style={{
            position: "absolute",
            width: "auto",
            height: "auto",
            zIndex: -1,
            top: "0",
          }}
        />
        <Image
          className="image"
          src={new URL("/src/assets/wechat_qr.png", import.meta.url).href}
          title="微信二维码"
          alt="微信二维码"
          width={96}
          style={{ boxShadow: "0 0 2px 2px rgba(0, 0, 0, 0.4)" }}
        />

        <Flex align="flex-end" gap="0.25rem">
          <IconEmail style={{ fontSize: "0.8rem" }} />
          <a
            className=""
            href="mailto:yuelianghushenfu@sina.com"
            style={{ color: "lightblue" }}
          >
            yuelianghushenfu@sina.com
          </a>
        </Flex>

        {import.meta.env.DEV && (
          <>
            <Link to="weekly-effect">每周效果挑战</Link>
            <button onClick={toggleDebug}>dev</button>
          </>
        )}
        
        <div className="copyright-container mar-t-8">
          <span>
            <a
              className=""
              href="https://zizaimai.space/demo/"
              style={{ color: "lightblue" }}
            >
              zizaimai.space
            </a>
          </span>
        </div>
        <div className="miit-container">
          <a
            className="miit-link"
            href="http://beian.miit.gov.cn/"
            target="_blank"
            style={{ color: "lightblue" }}
          >
            鲁ICP备2022041953号-1
          </a>
        </div>
      </Flex>
    </footer>
  );
}
