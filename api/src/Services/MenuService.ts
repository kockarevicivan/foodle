import Menu from "../models/Menu";
import dateUtil from "../util/dateFormatting";

class MenuService {
  public async getByDate(dateTime: string) {
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const menu = await Menu.findOne({
      createdAt: { $gte: startOfDay, $lte: endOfDay },
    });

    if (!menu) {
      throw new Error("No menu created for that date");
    }

    return menu;
  }

  public async createMenuForToday() {
    const menu = await Menu.create({});
    return menu;
  }

  public async addMenuItem(id: string, menuItem: any) {
    let menu: any = await Menu.findById(id);
    menu.items.push(menuItem);
    await menu.save();
  }

  //   public async delete(menuItemId: string) {
  //     if (await MenuItem.exists({ menuItem: menuItemId })) {
  //       throw Error(`There is an menu item for this menu item.`);
  //     }

  //     if (!(await MenuItem.exists({ _id: menuItemId }))) {
  //       throw Error("Menu item doesn't exist.");
  //     }

  //     await MenuItem.findByIdAndDelete(menuItemId);
  //   }
}

export default new MenuService();
