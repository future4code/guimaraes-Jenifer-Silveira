import express from "express";
import { MovieController } from "../movieController";


export const movieRouter = express.Router()

const movieController = new MovieController()

movieRouter.post("/create-movie", movieController.createMovie)