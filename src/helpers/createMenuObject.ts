type MenuOptions = "" | "all" | "dogs" | "cats" | "fishes";

export const createMenuObject = (activeMenu: MenuOptions) => {
  let menu = {
    all: false,
    dogs: false,
    cats: false,
    fishes: false,
  };

  if (activeMenu !== "") {
    menu[activeMenu] = true;
  }

  return menu;
};
