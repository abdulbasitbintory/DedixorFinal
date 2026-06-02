import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

async function updateServicesTable() {
  try {
    // Check if columns exist
    const result = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'services' 
      AND column_name IN ('details', 'pricing', 'gradient')
    `

    const existingColumns = result.rows.map((row) => row.column_name)

    // Add missing columns
    if (!existingColumns.includes("details")) {
      await sql`ALTER TABLE services ADD COLUMN details TEXT[] DEFAULT '{}'`
      console.log("✓ Added 'details' column to services table")
    }

    if (!existingColumns.includes("pricing")) {
      await sql`ALTER TABLE services ADD COLUMN pricing VARCHAR(255)`
      console.log("✓ Added 'pricing' column to services table")
    }

    if (!existingColumns.includes("gradient")) {
      await sql`ALTER TABLE services ADD COLUMN gradient VARCHAR(255)`
      console.log("✓ Added 'gradient' column to services table")
    }

    if (existingColumns.length === 3) {
      console.log("✓ All columns already exist")
    }

    console.log("✓ Services table update completed successfully!")
  } catch (error) {
    if (error.message && error.message.includes("already exists")) {
      console.log("✓ Columns already exist, skipping...")
    } else {
      console.error("Error updating services table:", error)
      throw error
    }
  }
}

updateServicesTable().then(() => {
  console.log("Migration completed")
  process.exit(0)
})
