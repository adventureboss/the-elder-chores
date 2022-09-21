import { QueryClient } from "react-query";
import PocketBase from "pocketbase";

export const queryClient = new QueryClient();
export const pocketBaseClient = new PocketBase('/');