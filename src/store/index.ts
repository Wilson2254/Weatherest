import { createStore } from "vuex";
import Widget from "@/models/WidgetModel";
import Weather from "@/models/WeatherModel";

export default createStore({
  state: {
    widgets: [] as Widget[],
    currentWidget: {
      title: "",
      weatherInfo: {} as Weather,
      id: 0,
    } as Widget,
  },
  mutations: {
    addWidget(state) {
      state.widgets.push(state.currentWidget);
    },
    deleteWidget(state) {
      state.widgets = state.widgets.filter(
        (widget) => widget.id != state.currentWidget.id
      );
    },
    updateTitle(state, payload: string) {
      state.currentWidget.title = payload;
    },
    changeWeatherCity(state, payload: Weather) {
      state.currentWidget.weatherInfo = payload;
    },
  },
  actions: {},
  modules: {},
});
