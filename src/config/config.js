import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../../.env') });
export const config = {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI || 'mongodb://localhost:27017/exam'
};