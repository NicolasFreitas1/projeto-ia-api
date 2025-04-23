import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/smart-menu/enterprise/entities/user'
import { Prisma, User as PrismaUser } from 'generated/prisma'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        email: raw.login,
        name,
        password,
        restaurantId,
        isAdmin,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityId(raw.id),
    )
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      cep: user.cep,
      city: user.city,
      country: user.country,
      number: user.number,
      state: user.state,
      street: user.street,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt ? new Date(user.updatedAt) : undefined,
    }
  }
}
