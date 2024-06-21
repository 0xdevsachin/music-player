import { ISong } from "../types";

export const fetchSongsList = async (): Promise<ISong[]> => {
  if (!process.env.REACT_APP_BASE_URL) {
    throw new Error("Please add missing env key");
  }
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/items/songs`);
  const finalResponse = await response.json();
  return finalResponse.data;
};
