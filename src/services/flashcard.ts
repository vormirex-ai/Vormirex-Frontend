import { axiosInstance } from "./axiosInstance";
import {
  FlashcardDeck,
  FlashcardCard,
  FlashcardStats,
  SaveFlashcardProgressPayload,
  CompleteSessionPayload,
  CompleteSessionResponse,
  FlashcardProgressResponse,
} from "@/interface/flashcard.interface";

export const getFlashcardDecks = async (): Promise<FlashcardDeck[] | any> => {
  try {
    const response = await axiosInstance.get("/flashcards/decks");

    return response.data;
  } catch (error: any) {
    console.error("Error while fetching flashcard decks:", error.response);

    return error.response?.data;
  }
};

export const getFlashcardCards = async (
  deckId: string | number,
): Promise<FlashcardCard[] | any> => {
  try {
    const response = await axiosInstance.get(
      `/flashcards/decks/${deckId}/cards`,
    );

    return response.data;
  } catch (error: any) {
    console.error("Error while fetching flashcard cards:", error.response);

    return error.response?.data;
  }
};

export const getDueFlashcardCards = async (
  deckId: string | number,
): Promise<FlashcardCard[] | any> => {
  try {
    const response = await axiosInstance.get(`/flashcards/decks/${deckId}/due`);

    return response.data;
  } catch (error: any) {
    console.error("Error while fetching due flashcards:", error.response);

    return error.response?.data;
  }
};

export const saveFlashcardProgress = async (
  payload: SaveFlashcardProgressPayload,
): Promise<FlashcardProgressResponse | any> => {
  try {
    const response = await axiosInstance.post("/flashcards/progress", payload);

    return response.data;
  } catch (error: any) {
    console.error("Error while saving flashcard progress:", error.response);

    return error.response?.data;
  }
};

export const completeFlashcardSession = async (
  payload: CompleteSessionPayload,
): Promise<CompleteSessionResponse | any> => {
  try {
    const response = await axiosInstance.post(
      "/flashcards/sessions/complete",
      payload,
    );

    return response.data;
  } catch (error: any) {
    console.error("Error while completing flashcard session:", error.response);

    return error.response?.data;
  }
};

export const getFlashcardStats = async (): Promise<FlashcardStats | any> => {
  try {
    const response = await axiosInstance.get("/flashcards/stats");

    return response.data;
  } catch (error: any) {
    console.error("Error while fetching flashcard stats:", error.response);

    return error.response?.data;
  }
};
