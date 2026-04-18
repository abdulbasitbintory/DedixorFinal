-- Add image column to services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS image TEXT;
