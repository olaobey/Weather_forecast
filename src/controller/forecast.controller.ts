import { Request, Response } from 'express';
import { getClientIp } from '../helper/getClient'
import { getLocation } from '../helper/getLocation'
import { getTemperature } from '../helper/getTemperature'


export const getHello = async (req: Request, res: Response) => {
    try {
        const visitorName = req.query.visitor_name;
        const clientIp = await getClientIp(req);
        const location = await getLocation(clientIp);
        const temperature = await getTemperature(location.city);
        res.status(200).json({
            client_ip: clientIp,
            location: location.city,
            greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location.city}`
        });
    } catch (err) { 
        res.status(500).json({message: 'Internal server error'})
    }
};
