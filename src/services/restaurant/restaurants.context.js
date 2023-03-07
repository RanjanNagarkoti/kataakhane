// in this case whenever we do an API call, it's going to be called "PROMISE" and a promise is something that you have to await, it's something that runs asynchronously, it's some that happens in the future.

// everytime we create a promise it's now thenable, so it awaiting somethign for future

// yo k bhanna khoje ko bhanda,
// restaurantRequest is not going to return immediately, its going to return in forceTouchGestureHandlerProps={.}

// Promise is like binding contract that you are promising you are going to get something back.

// this will return fucntion internally that has a resolve and reject function

// fetch is one of them fetches a stantard that is built into every browser and what fetch does is, it is an interface around promises that wraps the abiltiy to talk to external API

// fetch return in responses as json object,
// and json object is simple javaScript that returns properties

// context => data lai globally provide garney with in the react appplication
// service => to determine what methods we what to order to get data from externals service

// services file operates as a layer inbetween context react native application and external service provider

import React, { createContext } from "react";
import { restaurantsTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurant: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};
