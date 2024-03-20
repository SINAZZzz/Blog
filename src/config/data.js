import { faker } from "@faker-js/faker";

const items = 5;

export const blogList = Array.from({ length: items }, () => ({
  id: faker.number.int(),
  title: faker.company.name(),
  category: faker.commerce.product(),
  subCategory: [
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
    faker.lorem.word(),
  ],
  description: faker.lorem.paragraph(),
  authorName: faker.person.fullName(),
  authorAvatar: faker.image.avatar(),
  createdAt: faker.date.weekday() + " " + faker.date.month(),
  cover: faker.image.url(),
}));
