import MenuItem from "../models/MenuItem";
import dateUtil from "../util/dateFormatting";

class MenuItemService {
  public async getAllByDate(dateTime: string) { 
    const { startOfDay, endOfDay } = dateUtil.getStartAndEndOfDay(dateTime);
    const menuItems = await MenuItem.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
    
    
    return menuItems;
  }

  public async addForCurrentDay(menuItemPayload: any) {
    const menuItem = await MenuItem.create(menuItemPayload);
    return menuItem;
  }

  public async update(id: string, menuItemUpdate: any) {
    await MenuItem.updateOne(
      { _id: id },
      { $set: menuItemUpdate },
      { runValidators: true }
    );

    const updatedMenuItem = await MenuItem.findById(id);
    return updatedMenuItem;
  }

  public async delete(menuItemId: string) {
    if (await MenuItem.exists({ menuItem: menuItemId })) {
      throw Error(`There is an menu item for this menu item.`);
    }

    if (!(await MenuItem.exists({ _id: menuItemId }))) {
      throw Error("Menu item doesn't exist.");
    }

    await MenuItem.findByIdAndDelete(menuItemId);
  }
}

export default new MenuItemService();
