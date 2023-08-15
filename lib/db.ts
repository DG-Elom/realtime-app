import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://usw1-crisp-flea-33299.upstash.io",
  token:
    "AYITASQgM2YxOTY3OWItMGY3ZC00YWRmLWE4YzgtOWVjNWUxZTM0YzM4ZmVlZGYxODNlZWY5NDgwZWE1MWUxZmVjOTk2ZjJhOGI=",
});
