import { Request, Response } from 'express';
import axios from 'axios';

export async function getLocation(ip: string): Promise<{ city: string }> {
  const response = await axios.get(`http://ip-api.com/json/${ip}`);
  return response.data;
}