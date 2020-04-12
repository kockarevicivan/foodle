export default {
  /**
   * Returns an objects that contains the start and
   * the end of the day in iso formats
   * @param dateTime date and time string in iso format
   */
  getStartAndEndOfDay(dateTime: string) {
    const startOfDay = new Date(dateTime);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(dateTime);
    endOfDay.setHours(23, 59, 59, 999);
    return { startOfDay, endOfDay };
  },

  getLocalTime() {
    let now = new Date();
    now.setHours(now.getHours() + 2);
    return now;
  },

  //Method returns the number of the week since the year started
  getWeekAndYearNumber(d: any) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart: any = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return { week: weekNo, year: d.getUTCFullYear() };
  },
};
