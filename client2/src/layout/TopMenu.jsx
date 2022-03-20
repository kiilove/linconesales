import { Menu, Typography, Space } from "antd";
import {
  CalendarOutlined,
  IdcardOutlined,
  DiffOutlined,
  ScheduleOutlined,
  QrcodeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AiOutlineDiff } from "react-icons/ai";
import styled from "styled-components";

const { Text, Link } = Typography;

const MenuIconStyle = { fontSize: 20, fontWeight: 600 };
const MenuTextStyle = { fontSize: 15.5, fontWeight: 600 };

const MenuList = [
  {
    id: 1,
    title: "모아보기",
    icon: <CalendarOutlined style={MenuIconStyle} />,
  },
  { id: 2, title: "영업활동", icon: <DiffOutlined style={MenuIconStyle} /> },
  {
    id: 3,
    title: "일정관리",
    icon: <ScheduleOutlined style={MenuIconStyle} />,
  },
  {
    id: 4,
    title: "고객데이터",
    icon: <IdcardOutlined style={MenuIconStyle} />,
  },
  {
    id: 5,
    title: "품목데이터",
    icon: <QrcodeOutlined style={MenuIconStyle} />,
  },
  {
    id: 6,
    title: "설정",
    icon: <SettingOutlined style={MenuIconStyle} />,
  },
];

const TopMenu = () => {
  return (
    <div>
      <Menu theme="dark" mode="horizontal">
        {MenuList.map((item, index) => (
          <Menu.Item key={item.id} icon={item.icon} style={MenuTextStyle}>
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default TopMenu;
