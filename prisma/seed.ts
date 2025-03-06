import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  })

  // Create section visibility settings
  const sections = ['header', 'about', 'services', 'projects', 'contacts']
  for (const section of sections) {
    await prisma.sectionVisibility.create({
      data: {
        name: section,
        active: true,
      },
    })
  }

  // Create sample services
  const services = [
    {
      title: 'Web Development',
      description: 'Modern and responsive web applications',
      order: 1,
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps',
      order: 2,
    },
  ]

  for (const service of services) {
    await prisma.service.create({
      data: service,
    })
  }

  // Create sample projects
  const projects = [
    {
      title: 'Project 1',
      description: 'Sample project description',
      imageUrl: '/img/projects/project1.jpg',
      order: 1,
    },
    {
      title: 'Project 2',
      description: 'Another sample project',
      imageUrl: '/img/projects/project2.jpg',
      order: 2,
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })