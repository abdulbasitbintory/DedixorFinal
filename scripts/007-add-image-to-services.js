import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function main() {
  try {
    console.log('Adding image column to services table...');
    
    // Add image column if it doesn't exist
    await sql`
      ALTER TABLE services 
      ADD COLUMN IF NOT EXISTS image TEXT;
    `;
    
    console.log('✓ Successfully added image column to services table');
    process.exit(0);
  } catch (error) {
    console.error('Error running migration:', error);
    process.exit(1);
  }
}

main();
