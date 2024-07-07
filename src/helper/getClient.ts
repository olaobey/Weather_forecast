import { Request, Response } from 'express';
import axios from 'axios';

export async function getClientIp(req: Request): Promise<string> {
    // Use a real IP address for local development
  if (process.env.NODE_ENV === 'development') {
    return '8.8.8.8'; // Google's public DNS IP address for testing
  }
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  return Array.isArray(clientIp) ? clientIp[0] : clientIp || 'unknown';
}
