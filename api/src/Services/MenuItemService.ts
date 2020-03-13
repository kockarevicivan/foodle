import MenuItem from "../models/MenuItem";

class MenuItemService {
  public async getAllByDate(dateTime: string) {
    const startOfDay: Date = new Date(dateTime);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay: Date = new Date(dateTime);
    endOfDay.setHours(23, 59, 59, 999);

    const menuItems = await MenuItem.find({
      createdAt: { $gte: startOfDay, $lte: endOfDay }
    });
    return menuItems;
  }

  public async addForCurrentDay(menuItemPayload: object) {
    const menuItem = await MenuItem.create(menuItemPayload);
    return menuItem;
  }
}

export default new MenuItemService();
