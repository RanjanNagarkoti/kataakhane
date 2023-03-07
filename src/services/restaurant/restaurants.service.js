import camelize from "camelize";
import { mocks } from "./mock";
export const restaurantRequest = (location = "27.6757085,85.3187929") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
  //   const newResult = camelize(results.length);
  //   return newResult;

  //   return camelize(result.results.length);
};

// restaurantRequest()
//   .then(restaurantsTransform)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => {
//     console.log("Place not found.");
//   });

