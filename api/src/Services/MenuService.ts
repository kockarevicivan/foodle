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
  
  public async addManyMenuItems(id: string, menuItems: Array<any>) {
    let menu: any = await Menu.findById(id);
    menuItems.forEach((item: any) => {
      menu.items.push(item);
      
    });
    await menu.save();
  }

  public async update(menuId: string, menuUpdate: any) {
    await Menu.findByIdAndUpdate(
      menuId,
      { $set: menuUpdate },
      { runValidators: true }
    );
    const menu = await Menu.findById(menuId);
    return menu;
  }

  public async delete(menuId: string, menuItemIndex: number) {
    let menu: any = await Menu.findById(menuId);
    menu.items.splice(menuItemIndex, 1);
    await menu.save();
  }
}

export default new MenuService();
