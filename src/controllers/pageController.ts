import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("Home controller")
};

export const dogs = (req: Request, res: Response) => {
  res.send("Dogs controller")
};

export const cats = (req: Request, res: Response) => {};

export const fishes = (req: Request, res: Response) => {};
