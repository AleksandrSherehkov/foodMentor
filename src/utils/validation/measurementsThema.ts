import { z } from 'zod';

export const heightSchema = z.string().regex(/^\d{0,3}$/);
export const weightSchemaMetric = z.string().regex(/^\d{0,3}$/);
export const weightSchemaImperial = z.string().regex(/^\d{0,4}$/);
