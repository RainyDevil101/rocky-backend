import pg from 'pg';
import { keys } from './keys.js';

export const client = new pg.Client(keys);

