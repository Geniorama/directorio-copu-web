import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Sector, Country, Type } from "@/app/types";

interface SearchState {
  value: string;
  selectedSectors: Sector[];
  allSectors: Sector[];
  allTypes: Type[];
  selectedTypes: Type[];
  selectedCountries: Country[];
  selectedCountry: Country | null;
  allCountries: Country[];
  results: number;
}

const initialState: SearchState = {
  value: "",
  selectedSectors: [],
  allSectors: [],
  allTypes: [],
  selectedTypes: [],
  selectedCountries: [],
  selectedCountry: null,
  allCountries: [],
  results: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    filterSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },

    resetSearch: (state) => {
      state.value = "";
    },

    filterSector: (state, action: PayloadAction<Sector>) => {
      if (
        state.selectedSectors.some(
          (sector) => sector.slug === action.payload.slug
        )
      ) {
        state.selectedSectors = state.selectedSectors.filter(
          (sector) => sector.slug !== action.payload.slug
        );
      } else {
        state.selectedSectors.push(action.payload);
      }
    },

    removeSector: (state, action: PayloadAction<Sector>) => {
      state.selectedSectors = state.selectedSectors.filter(
        (sector) => sector.slug !== action.payload.slug
      );
    },

    setInitialSectors: (state, action: PayloadAction<Sector[]>) => {
      state.allSectors = action.payload;
    },

    resetSectors: (state) => {
      state.selectedSectors = [];
    },

    filterCountry: (state, action: PayloadAction<Country>) => {
      if (
        state.selectedCountries.some(
          (country) => country.slug === action.payload.slug
        )
      ) {
        state.selectedCountries = state.selectedCountries.filter(
          (country) => country.slug !== action.payload.slug
        );
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

    setInitialTypes: (state, action: PayloadAction<Type[]>) => {
      state.allTypes = action.payload;
    },

    filterType: (state, action: PayloadAction<Type>) => {
      if (
        state.selectedTypes.some(
          (type) => type.slug === action.payload.slug
        )
      ) {
        state.selectedTypes = state.selectedTypes.filter(
          (type) => type.slug !== action.payload.slug
        );
      } else {
        state.selectedTypes.push(action.payload);
      }
    },

    removeType: (state, action: PayloadAction<Type>) => {
      state.selectedTypes = state.selectedTypes.filter(
        (type) => type.slug !== action.payload.slug
      );
    },

    resetFilters: (state) => {
      state.selectedTypes = []
      state.selectedSectors = []
      state.selectedCountry = null
    }
  },
});

export const {
  filterSearch,
  filterSector,
  filterCountry,
  filterType,
  removeType,
  removeSector,
  setInitialSectors,
  resetSectors,
  setInitialCountries,
  setCountry,
  removeCountry,
  resetSearch,
  setInitialTypes,
  resetFilters
} = searchSlice.actions;
export default searchSlice.reducer;
