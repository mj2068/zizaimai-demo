import { Divider, Flex, Image } from "antd";

export default function Footer() {
  //

  return (
    <footer className="small-text">
      <Flex vertical align="center">
        <Divider />
        <Image
          className="image"
          src={new URL("/src/assets/wechat_qr.png", import.meta.url).href}
          title="微信二维码"
          alt="微信二维码"
          width={96}
        />
        <span>
          邮箱：
          <a className="grey-text" href="mailto:yuelianghushenfu@sina.com">
            yuelianghushenfu@sina.com
          </a>
        </span>
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
