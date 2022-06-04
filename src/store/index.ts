import { createStore } from "vuex";
import Widget from "@/models/WidgetModel";
import Weather from "@/models/WeatherModel";

export default createStore({
  state: {
    widgets: [] as Widget[],
    currentWidget: {
      title: "",
      weatherInfo: {} as Weather,
      id: 0
    } as Widget
  },
  mutations: {},
  actions: {},
  modules: {},
});
