import { POST as UniverseRoute } from '../[provider]/route';

export const runtime = 'nodejs';

export const preferredRegion = [
  'bom1',
  'cle1',
  'cpt1',
  'gru1',
  'hnd1',
  'iad1',
  'icn1',
  'kix1',
  'pdx1',
  'sfo1',
  'sin1',
  'syd1',
];

export const config = {
  api: {
    bodyParser: false,
    maxDuration: 800,
    responseLimit: false,
  },
};

export const POST = async (req: Request) =>
  UniverseRoute(req, { params: Promise.resolve({ provider: 'anthropic' }) });
