import { carProps, filteredProps } from "@/types";

export async function fetchCars(filter: filteredProps) {
  const { manufacturer, model, year, limit, fuel } = filter;
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: {
        "X-RapidAPI-Key": "d6379d3ffcmshbf21e1a5e7ef2dfp164719jsn539e4067b778",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    }
  );

  const result = await response.json();

  return result;
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; //BAse rental price per day in dollars
  const mileageFactor = 0.1; //Additional rate per mile drien
  const ageFactor = 0.05; // additional rate per year of vehicle age

  //Calculate Additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //Calculate total rental per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export function generateCarImageUrl(car: carProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
}

export function updateSearchParams(type: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
}
