import React from "react";
import {
  Typography,
  Layout,
  Card,
  Carousel,
  Image,
  Space,
  Divider,
} from "antd";
import { GithubOutlined } from "@ant-design/icons";
import IconVue from '~icons/logos/vue';
import IconIonic from '~icons/logos/ionic-icon';
import IconCapacitor from '~icons/logos/capacitorjs-icon';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const ProjectPlantHelper: React.FC = () => {
  const screenshots = [
    "ph-home-1.jpg",
    "ph-detail-2.jpg",
    "ph-add-1.jpg",
    "ph-add-2.jpg",
    "ph-detail-1.jpg",
    "ph-detail-3.jpg",
    "ph-classify-1.jpg",
    "ph-classify-2.jpg",
  ];

  return (
    <Layout>
      <Content
        style={{ padding: "50px 50px 0", maxWidth: 800, margin: "0 auto" }}
      >
        <Card>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Space align="center">
              <Image
                src={
                  new URL(
                    "/src/assets/previous_work/flow-plant-electronics-icon-square.svg",
                    import.meta.url
                  ).href
                }
                alt="Plant Helper Icon"
                width={80}
                preview={false}
              />
              <Title level={2} style={{ margin: 0 }}>
                植物小助手
              </Title>
            </Space>

            <Paragraph>
              <Text strong>植物小助手</Text>
              是一款多平台App，旨在帮助用户管理小型植物或花卉。
              <a
                href="https://github.com/mj2068/plant-helper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined /> GitHub 仓库
              </a>
            </Paragraph>

            <Carousel autoplay style={{ maxWidth: "100%", margin: "0 auto" }}>
              {screenshots.map((img, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Image
                    src={
                      new URL(
                        `/src/assets/previous_work/${img}`,
                        import.meta.url
                      ).href
                    }
                    alt={`Screenshot ${index + 1}`}
                    style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
                  />
                </div>
              ))}
            </Carousel>

            <Space direction="vertical">
              <Title level={4}>主要功能</Title>
              <ul>
                <li>增减植物条目，记录信息或添加照片</li>
                <li>通过天气API展示历史天气数据，协助用户判断植物状态</li>
                <li>基于百度AI开放平台的植物图像识别</li>
                <li>计划中：配套智能硬件，可插入土壤实现智能监控（开发中）</li>
              </ul>
            </Space>

            <Divider />

            <Space direction="vertical">
              <Title level={4}>技术栈</Title>
              <Space wrap>
                <IconVue style={{ fontSize: "16px" }} />
                <IconIonic style={{ fontSize: "16px" }} />
                <IconCapacitor style={{ fontSize: "16px" }} />
              </Space>
              <Paragraph>
                界面由Vue框架配合Ionic实现，Capacitor用于生成移动端程序包。
              </Paragraph>
            </Space>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProjectPlantHelper;
