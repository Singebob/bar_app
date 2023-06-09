/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/drinks": {
    /**
     * Get all drinks 
     * @description Get all drinks.
     */
    get: operations["getDrinks"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** @description Error response object for multiples errors. */
    error: {
      /**
       * Format: text 
       * @description Error message 
       * @example Unauthorized
       */
      message: string;
    };
    /** @description Drink object for multiples drinks. */
    drink: {
      /**
       * Format: text 
       * @description Name of the drink 
       * @example Beer
       */
      name: string;
      /**
       * @description Price of the drink 
       * @example 2.5
       */
      price: number;
      /**
       * @description Category of the drink 
       * @example Beer
       */
      category: string;
      /**
       * Format: uri 
       * @description Image of the drink 
       * @example https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
       */
      image?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: {
    /** @description The number of allowed requests in the current period. */
    "X-Rate-Limit-Limit": number;
    /** @description The number of remaining requests in the current period. */
    "X-Rate-Limit-Remaining": number;
    /** @description The number of seconds left in the current period. */
    "X-Rate-Limit-Reset": number;
    /** @description The number of seconds left before the request can be retried. */
    "Retry-After": number;
  };
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Get all drinks 
   * @description Get all drinks.
   */
  getDrinks: {
    parameters: {
      query: {
        /** @description Value of the example. */
        size?: number;
        /** @description Value of the example. */
        page?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          "X-Rate-Limit-Limit": components["headers"]["X-Rate-Limit-Limit"];
          "X-Rate-Limit-Remaining": components["headers"]["X-Rate-Limit-Remaining"];
          "X-Rate-Limit-Reset": components["headers"]["X-Rate-Limit-Reset"];
        };
        content: {
          "application/json": (components["schemas"]["drink"])[];
        };
      };
      /** @description Bad Request. */
      400: {
        headers: {
          "X-Rate-Limit-Limit": components["headers"]["X-Rate-Limit-Limit"];
          "X-Rate-Limit-Remaining": components["headers"]["X-Rate-Limit-Remaining"];
          "X-Rate-Limit-Reset": components["headers"]["X-Rate-Limit-Reset"];
        };
        content: {
          "application/json": components["schemas"]["error"];
        };
      };
      /** @description Unauthorized. */
      401: {
        headers: {
          "X-Rate-Limit-Limit": components["headers"]["X-Rate-Limit-Limit"];
          "X-Rate-Limit-Remaining": components["headers"]["X-Rate-Limit-Remaining"];
          "X-Rate-Limit-Reset": components["headers"]["X-Rate-Limit-Reset"];
        };
        content: {
          "application/json": components["schemas"]["error"];
        };
      };
      /** @description Too Many Requests. */
      429: {
        headers: {
          "Retry-After": components["headers"]["Retry-After"];
          "X-Rate-Limit-Limit": components["headers"]["X-Rate-Limit-Limit"];
          "X-Rate-Limit-Remaining": components["headers"]["X-Rate-Limit-Remaining"];
          "X-Rate-Limit-Reset": components["headers"]["X-Rate-Limit-Reset"];
        };
        content: {
          "application/json": components["schemas"]["error"];
        };
      };
      /** @description Internal Server Error. */
      500: {
        headers: {
          "X-Rate-Limit-Limit": components["headers"]["X-Rate-Limit-Limit"];
          "X-Rate-Limit-Remaining": components["headers"]["X-Rate-Limit-Remaining"];
          "X-Rate-Limit-Reset": components["headers"]["X-Rate-Limit-Reset"];
        };
        content: {
          "application/json": components["schemas"]["error"];
        };
      };
    };
  };
}
