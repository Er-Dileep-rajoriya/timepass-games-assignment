import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  personalInfo: null,
  selectedPlan: {
    planName: "Arcade",
    planPrice: 9,
  },
  serviceType: "monthly",
  addOneServices: [],
  visitedPages: [],
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    // actions
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },

    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setAddOneServices: (state, action) => {
      state.addOneServices = action.payload;
    },
    setVisitedPages: (state, action) => {
      state.visitedPages.push(action.payload);
    },
  },
});

export const {
  setStep,
  setPersonalInfo,
  setSelectedPlan,
  setServiceType,
  setAddOneServices,
  setVisitedPages,
} = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
