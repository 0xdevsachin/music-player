import { Tab, TabsContainer } from "./tabs.style";

const Tabs = ({
  tabList,
  handleTabClick,
  activeTab,
}: {
  tabList: string[];
  handleTabClick: (tab: string) => void;
  activeTab: string;
}) => {
  return (
    <TabsContainer>
      {tabList.map((item) => (
        <Tab
          isActive={activeTab === item}
          onClick={() => handleTabClick(item)}
          key={`tab_${item}`}
        >
          {item}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
