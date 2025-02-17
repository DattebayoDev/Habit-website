class Habit {
  constructor(name, goal, dates = []) {
    this.name = name;
    this.goal = goal;
    this.dates = dates;
  }
}

class LocalStorageAdapter {
  load() {
    let storage = JSON.parse(localStorage.getItem("habitData")) || [];
    return storage;
  }
  save(data) {
    localStorage.setItem("habitData", JSON.stringify(data));
  }
}

class FileStorageAdapter {
  constructor(fileName) {
    this.fs = require("fs");
    this.fileName = fileName;
  }

  load() {
    // checks to see if file name exists if not then return an empty array
    try {
      const readData = this.fs.readFileSync(this.fileName, "utf-8");
      return JSON.parse(readData);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  save(data) {
    const writeData = this.fs.writeFileSync(
      this.fileName,
      JSON.stringify(data)
    );
  }
}

class HabitManager {
  constructor() {
    this.storage =
      typeof process === "object"
        ? new FileStorageAdapter("habitData.json")
        : new LocalStorageAdapter();
    this.habits = this.storage.load();
    // console.log(this.habits)
    }

  addHabit(habit, goal, dates = []) {
    habit = new Habit(habit, goal, dates);
    this.habits.push(habit);
    this.saveHabit();
    return habit;
  }

  saveHabit() {
    this.storage.save(this.habits);
  }

  deleteHabit(index) {
    this.habits.splice(index, 1);
    this.saveHabit();
  }

  isHabitCompleted(habitIndex, date) {
    return this.habits[habitIndex].dates.includes(date)
  }

  updateDatesArray(index, date) {
    if (this.habits[index].dates.includes(date)) {
      const dateIndex = this.habits[index].dates.indexOf(date)
      this.habits[index].dates.splice(dateIndex, 1)
    } else {
      this.habits[index].dates.push(date)
    }
    this.saveHabit()
  }

  completionTracker(index){
    console.log(this.habits[index].dates.length)
  }
}

class DateNavigator {
  constructor() {
    this.offset = 0;
  }

  getDates() {
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() + this.offset);
   
    return {
      past: this.setDates(baseDate, -1) ,
      present: this.setDates(baseDate, 0) ,
      future: this.setDates(baseDate, 1),
    };
  }

  setDates(baseDate, offset) {
    const date = new Date(baseDate)
    date.setDate(date.getDate() + offset)
    return date.getDate()
  }

  goBack() {
    this.offset--;
    return this.getDates();
  }

  goForward() {
    this.offset++;
    return this.getDates();
  }
}


export { Habit, HabitManager, DateNavigator };
