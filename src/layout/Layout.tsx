import RenderIndicator from "components/RenderIndicator";
import React, { useCallback, useState } from "react";
import { MENU } from "TestLayoutData";
import useAppContext from "utils/context/Reducer";

import Content from "./Content";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  const { store } = useAppContext();
  const rtl = false;
  const image = false;
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [menus, setMenus] = useState(MENU);
  const [menu, setMenu] = useState();

  // NOTE: Sidebar 접음/펼침 이벤트
  const handleCollapsedChange = useCallback((checked: boolean) => {
    setCollapsed(checked);
  }, []);

  // NOTE: Sidebar 접혔을 때 Collapse 버튼 Show/Hide 토클 이벤트
  const handleToggleSidebar = useCallback((checked: boolean) => {
    setToggled(checked);
  }, []);

  // NOTE: Sidebar 메뉴 클릭시 메뉴를 Open하는 이벤트
  const handleMenuOpened = useCallback(
    (menuList: Array<any>, menuItem: any, menuOpened: boolean) => {
      menuItem
        ? setMenu((previous: any) => ({
            ...previous,
            ...menuItem,
            moveItem: undefined,
          }))
        : setMenu(undefined);
      !menuOpened && setMenus([...menuList]);
    },
    [menu]
  );

  // NOTE: Open된 탭메뉴 화면의 탭 전환시 발생하는 이벤트
  const handleActivateTab = useCallback(
    (item: any) => {
      setMenu((previous: any) => ({ ...previous, ...item }));
    },
    [menu]
  );

  // NOTE: Open된 탭메뉴 화면의 Close 이벤트
  const handleMenuClosed = useCallback(
    (closedItem: any, openedList: Array<any>) => {
      setMenus((previous) => {
        return [
          ...previous.map((item) => {
            return item.menuCode === closedItem.menuCode && item.open
              ? {
                  ...item,
                  open: !item.open,
                }
              : item;
          }),
        ];
      });

      const foundItem = openedList.filter(
        (item) => item.menuCode === closedItem.menuCode
      );
      if (openedList.length >= openedList.length - foundItem.length) {
        const foundIndex = openedList.findIndex(
          (item) => item.menuCode === closedItem.menuCode
        );

        let moveItem;
        // 마지막 탭 Close
        if (foundIndex === openedList.length - 1)
          moveItem = foundIndex > -1 && openedList[foundIndex - 1];
        // 첫번째 탭, 중간 탭 Close
        else if (foundIndex === 0)
          moveItem = foundIndex > -1 && openedList[foundIndex + 1];

        setMenu({ ...closedItem, open: false, moveItem: moveItem });
      } else {
        setMenu({ ...closedItem, open: false });
      }
    },
    [menus, menu]
  );

  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <RenderIndicator style={{ marginTop: "10px" }} />
      <Sidebar
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        list={menus}
        onToggle={handleToggleSidebar}
        onCollapseChange={handleCollapsedChange}
        onMenuOpen={handleMenuOpened}
      />
      <Content
        handleToggleSidebar={handleToggleSidebar}
        mode={store?.toggledInterface || "MDI"}
        menu={menu}
        menus={menus}
        handleMenuClosed={handleMenuClosed}
        handleActivateTab={handleActivateTab}
      ></Content>
    </div>
  );
};

export default React.memo(Layout);
