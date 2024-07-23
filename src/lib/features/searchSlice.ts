import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Sector, Country } from "@/app/types";


interface SearchState {
  value: string;
  selectedSectors: Sector[];
  allSectors: Sector[];
  types: any[];
  selectedCountries: Country[];
  selectedCountry: Country | null;
  allCountries: Country[];
  results: number;
}


const initialState:SearchState = {
  value: "",
  selectedSectors: [],
  allSectors: [],
  types: [],
  selectedCountries: [],
  selectedCountry: null,
  allCountries: [],
  results: 0
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },

    filterSector: (state, action: PayloadAction<Sector>) => {
      if (state.selectedSectors.some(sector => sector.slug === action.payload.slug)) {
        state.selectedSectors = state.selectedSectors.filter(sector => sector.slug !== action.payload.slug);
      } else {
        state.selectedSectors.push(action.payload);
      }
    },

    removeSector: (state, action: PayloadAction<Sector>) => {
      state.selectedSectors = state.selectedSectors.filter(sector => sector.slug !== action.payload.slug);
    },

    setInitialSectors: (state, action: PayloadAction<Sector[]>) => {
      state.allSectors = action.payload;
    },

    resetSectors: (state) => {
      state.selectedSectors = [];
    },

    filterCountry: (state, action: PayloadAction<Country>) => {
      if (state.selectedCountries.some(country => country.slug === action.payload.slug)) {
          state.selectedCountries = state.selectedCountries.filter(country => country.slug !== action.payload.slug);
      } else {
        state.selectedCountries.push(action.payload);
      }
    },

    setInitialCountries: (state, action: PayloadAction<Country[]>) => {
      state.allCountries = action.payload;
    },

    setCountry(state, action: PayloadAction<Country>) {
      state.selectedCountry = action.payload;
    },

    removeCountry: (state) => {
      state.selectedCountry = null;
    },

  },
});


export const {filterSearch, filterSector, filterCountry, removeSector, setInitialSectors, resetSectors, setInitialCountries, setCountry, removeCountry} = searchSlice.actions
export default searchSlice.reducer