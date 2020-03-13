export default {
  getStartAndEndOfDay(dateTime: string) {
    const startOfDay: Date = new Date(dateTime);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay: Date = new Date(dateTime);
    endOfDay.setHours(23, 59, 59, 999);
    return { startOfDay, endOfDay };
  }
};
