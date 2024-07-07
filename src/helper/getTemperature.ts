import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const OPENWEATHERMAP_API_KEY = process.env.API_KEY

export async function getTemperature(city: string): Promise<number> {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`
  );
  return response.data.main.temp;
}