import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

const sql = neon(process.env.DATABASE_URL);

async function seedData() {
  try {
    console.log('Seeding data...');

    // Hash the admin password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Insert admin user
    await sql`
      INSERT INTO admins (email, password_hash)
      VALUES ('admin@dedixor.com', ${hashedPassword})
      ON CONFLICT (email) DO NOTHING
    `;
    console.log('✓ Admin user seeded');

    // Insert services
    const services = [
      {
        title: 'Backend Development',
        description: 'High-performance backend solutions built with Rust and modern frameworks',
        icon: 'Server',
        details: ['RESTful & GraphQL APIs', 'Microservices architecture', 'Database optimization', 'Real-time data processing', 'Security implementation'],
        pricing: 'Starting at $5,000',
        gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
      },
      {
        title: 'Cloud Deployment',
        description: 'Scalable cloud infrastructure and DevOps automation',
        icon: 'Cloud',
        details: ['CI/CD pipeline setup', 'Container orchestration', 'Auto-scaling solutions', 'Monitoring & logging', 'Cost optimization'],
        pricing: 'Starting at $3,500',
        gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
      },
      {
        title: 'AI Integration',
        description: 'Cutting-edge AI and machine learning solutions for modern applications',
        icon: 'Sparkles',
        details: ['Custom AI models', 'Natural language processing', 'Computer vision integration', 'Recommendation systems', 'Predictive analytics'],
        pricing: 'Starting at $7,500',
        gradient: 'from-orange-500/20 via-rose-500/20 to-pink-500/20',
      },
      {
        title: 'Custom Portfolios',
        description: 'Stunning, performant portfolio websites that showcase your work',
        icon: 'Palette',
        details: ['Modern responsive design', 'Interactive animations', 'SEO optimization', 'CMS integration', 'Performance tuning'],
        pricing: 'Starting at $2,500',
        gradient: 'from-emerald-500/20 via-green-500/20 to-lime-500/20',
      },
    ];

    for (const service of services) {
      await sql`
        INSERT INTO services (title, description, icon, details, pricing, gradient, featured)
        VALUES (${service.title}, ${service.description}, ${service.icon}, ${service.details}, ${service.pricing}, ${service.gradient}, true)
        ON CONFLICT DO NOTHING
      `;
    }
    console.log('✓ Services seeded');

    console.log('✓ All data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();
