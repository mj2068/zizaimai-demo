import { Divider, Flex, Image, Space } from "antd";
import { useContext } from "react";
import IconPlayArrowRounded from "~icons/material-symbols/play-arrow-rounded";
import IconGithub from "~icons/logos/github-icon";

import { AppContext } from "@/AppContext";
import "./ProjectDvdRental.css";
import { projectBgColors } from "@/theme";
import IconSet from "@/components/IconSet";

import JpgHome from "@/assets/dvdrental/home.jpg";
import JpgFilmList from "@/assets/dvdrental/film_list.jpg";
import JpgFilmDetail from "@/assets/dvdrental/film_detail.jpg";
import JpgRentalList from "@/assets/dvdrental/rental_list.jpg";
import JpgRentalDetail from "@/assets/dvdrental/rental_detail.jpg";
import JpgActorList from "@/assets/dvdrental/actor_list.jpg";
import JpgActorDetail from "@/assets/dvdrental/actor_detail.jpg";
import JpgCustomerDetail from "@/assets/dvdrental/customer_detail_1.jpg";

const bgColor = projectBgColors.rental || {
  light: "#e6f7ff",
  dark: "#003a8c",
};

const ProjectDvdRental: React.FC = () => {
  const appContext = useContext(AppContext);
  const isDark = appContext?.theme === "dark";

  return (
    <Flex
      className="dvdrental-project-container"
      style={
        {
          backgroundColor: isDark ? bgColor.dark : bgColor.light,
        } as React.CSSProperties
      }
    >
      <Flex vertical className="dvdrental-content-container">
        <Flex vertical className="text-content" flex={1}>
          <h2
            className="dvdrental-title"
            style={{ marginInline: "0", marginBottom: "0.5rem" }}
          >
            租赁管理系统
          </h2>
          <Space
            split={
              <Divider type="vertical" style={{ backgroundColor: "grey" }} />
            }
          >
            <i className="gray-text">适配PC浏览器</i>
            <i className="gray-text">英文UI</i>
          </Space>

          <div className="button-container">
            <a
              className="button with-icon external-link"
              href="/demo/dvdrental"
              target="_blank"
              style={{ backgroundColor: bgColor.accent, verticalAlign: "top" }}
            >
              <IconPlayArrowRounded className="icon" />
              示例页面
            </a>
          </div>

          <p>
            本应用是一个自主开发的物品租赁管理系统。设计要求英文UI，指定了开发时音像制品模板数据库。功能上实现对各记录主体的清单列表和详情查询等功能。
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a
              href="https://github.com/mj2068/dvdrental-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex
                align="center"
                gap={"0.25rem"}
                style={{ display: "inline-flex" }}
              >
                <IconGithub style={{ filter: isDark ? "invert(1)" : "" }} />
                代码仓库
              </Flex>
            </a>
          </div>
        </Flex>

        <Image
          src={JpgHome}
          alt="租赁系统主页"
          title="首页"
          className="image"
        />

        <div className="text-content">
          <p>
            仪表盘首页展示全局总体数据，包括当日出租数和金额、总览、出租排行榜、新近出租以及历史图表。
          </p>
        </div>

        <div className="text-content section">
          <h3 className="section-title">技术实现</h3>

          <IconSet
            icons={["vue", "antdVue"]}
            labels={["Vue", "Ant Design Vue"]}
            style={{ flexWrap: "wrap" }}
          />
          <p>
            使用Vue3作为主框架，配合Vue生态下其它必备标准化扩展，如：Vue
            Router路由、Pinia状态管理等，保证良好兼容性。
          </p>
          <p>
            组件库使用封装良好的Ant Design
            Vue，借助Antd对数据输入输出类组件功能全面的支持和优化，使其非常适合开发该类数据管理应用。
          </p>
        </div>

        <div className="text-content section">
          <h3 className="section-title">页面展示</h3>
        </div>
        <Flex
          vertical
          gap="0.5rem"
          className="dvdrental-image-set lists"
          style={{ paddingInline: "2rem" }}
        >
          <div>
            <Image
              src={JpgFilmList}
              alt="影片列表图"
              title="影片列表"
              className="image"
            />
          </div>
          <Flex justify="space-between" gap="0.5rem" className="double">
            <div style={{ flex: "1.07" }}>
              <Image
                src={JpgActorList}
                alt="演员列表图"
                title="演员列表"
                className="image"
              />
            </div>
            <div style={{ flex: "1" }}>
              <Image
                src={JpgRentalList}
                alt="租赁列表图"
                title="租赁列表"
                className="image"
              />
            </div>
          </Flex>
        </Flex>
        <div className="text-content sub-section">
          <p>
            列表类页面均为上下结构，顶部为条件过滤组件区，下部根据条件展示主表。
          </p>
          <p>
            过滤组件类型包含日期间隔、数字范围、下拉选择框和文字输入框等。数字范围组件使用可选性Range上下限输入框。
            下拉框会在页面加载时请求接口获取选项数据。文字输入框支持防抖关键字请求以及模糊搜索。
          </p>
          <p>
            主表格使用功能强大的Antd
            Table组件，非常适合展示大量数据，并且配置也很方便。分页系统使用了usePagination钩子，其内部封装请求功能，可精细控制数据请求。
          </p>
        </div>

        <Flex
          className="dvdrental-image-set details"
          gap="0.5rem"
          style={{ paddingInline: "2rem" }}
        >
          <Flex style={{ flex: "1.31" }}>
            <Image
              src={JpgCustomerDetail}
              alt="客户详情图"
              title="客户详情"
              className="image"
            />
          </Flex>
          <Flex
            vertical
            justify="space-between"
            gap="0.5rem"
            style={{ flex: "1" }}
          >
            <Image
              src={JpgFilmDetail}
              alt="影片详情图"
              title="影片详情"
              className="image"
            />
            <Image
              src={JpgActorDetail}
              alt="演员详情图"
              title="演员详情"
              className="image"
            />
            <Image
              src={JpgRentalDetail}
              alt="租赁详情图"
              title="租赁详情"
              className="image"
            />
          </Flex>
        </Flex>
        <div className="text-content sub-section">
          <p>
            详情类页面使用Antd
            &lt;Descriptions&gt;组件，该组件比较适合展示键值对类数据，且内容支持内嵌表格，如上图1所示，客户详情页含有两个内嵌表格。
          </p>
        </div>
      </Flex>
    </Flex>
  );
};

export default ProjectDvdRental;
