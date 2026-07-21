import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const UserRole = t.pgEnum("role", ["admin", "user"]);
export const GenderEnum = t.pgEnum("gender", ["male", "female"]);

export const user = pgTable("user", {
  id: t.text("id").primaryKey(),
  name: t.text("name").notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: t.boolean("email_verified").notNull(),
  image: t.text("image"),
  isGuide: t.boolean("is_guide").notNull().default(false),
  role: UserRole("role").default("user").notNull(),
  createdAt: t
    .timestamp("created_at", { precision: 6, withTimezone: true })
    .notNull(),
  updatedAt: t
    .timestamp("updated_at", { precision: 6, withTimezone: true })
    .notNull(),
});

export const session = pgTable("session", {
  id: t.text("id").primaryKey(),
  userId: t
    .text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  token: t.varchar("token", { length: 255 }).notNull().unique(),
  expiresAt: t
    .timestamp("expires_at", { precision: 6, withTimezone: true })
    .notNull(),
  ipAddress: t.text("ip_address"),
  userAgent: t.text("user_agent"),
  createdAt: t
    .timestamp("created_at", { precision: 6, withTimezone: true })
    .notNull(),
  updatedAt: t
    .timestamp("updated_at", { precision: 6, withTimezone: true })
    .notNull(),
});

export const account = pgTable("account", {
  id: t.text("id").primaryKey(),
  userId: t
    .text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accountId: t.text("account_id").notNull(),
  providerId: t.text("provider_id").notNull(),
  accessToken: t.text("access_token"),
  refreshToken: t.text("refresh_token"),
  accessTokenExpiresAt: t.timestamp("access_token_expires_at", {
    precision: 6,
    withTimezone: true,
  }),
  refreshTokenExpiresAt: t.timestamp("refresh_token_expires_at", {
    precision: 6,
    withTimezone: true,
  }),
  scope: t.text("scope"),
  idToken: t.text("id_token"),
  password: t.text("password"),
  createdAt: t
    .timestamp("created_at", { precision: 6, withTimezone: true })
    .notNull(),
  updatedAt: t
    .timestamp("updated_at", { precision: 6, withTimezone: true })
    .notNull(),
});

export const verification = pgTable("verification", {
  id: t.text("id").primaryKey(),
  identifier: t.text("identifier").notNull(),
  value: t.text("value").notNull(),
  expiresAt: t
    .timestamp("expires_at", { precision: 6, withTimezone: true })
    .notNull(),
  createdAt: t
    .timestamp("created_at", { precision: 6, withTimezone: true })
    .notNull(),
  updatedAt: t
    .timestamp("updated_at", { precision: 6, withTimezone: true })
    .notNull(),
});

export const expedition = pgTable(
  "expedition",
  {
    id: t.uuid("id").defaultRandom().primaryKey().notNull(),
    title: t
      .varchar("title", {
        length: 256,
      })
      .notNull(),
    image: t.varchar("image").notNull(),
    departureDate: t.date("departureDate").notNull(),
    returnDate: t.date("returnDate").notNull(),
    difficulty: t.varchar("difficulty").notNull(),
    price: t.integer("price").notNull(),
    capacity: t.integer("capacity").default(0).notNull(),
    category: t.varchar("category").notNull(),
    status: t.text("status").default("open"),
    description: t.varchar("description").notNull(),
    tagline: t.varchar("tagline").notNull(),
    location: t.varchar("location").notNull(),
    distanceFromNairobi: t.integer("distanceFromNairobi").notNull(),
    createdAt: t
      .timestamp("createdAt", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: t
      .timestamp("updatedAt", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [t.index("expeditionIndex").on(table.id)],
);

export const guide = pgTable("guide", {
  expeditionId: t
    .uuid("expeditionId")
    .primaryKey()
    .notNull()
    .references(() => expedition.id, { onDelete: "cascade" }),
  userId: t
    .text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  contact: t.varchar("contact").notNull(),
  createdAt: t
    .timestamp("createdAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: t
    .timestamp("updatedAt", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const schedule = pgTable("schedule", {
  expeditionId: t
    .uuid("expeditionId")
    .notNull()
    .references(() => expedition.id, { onDelete: "cascade" }),
  departureTime: t.time("departureTime").notNull(),
  returnTime: t.time("returnTime").notNull(),
  meetingTime: t.time("meetingTime").notNull(),
  meetingPoint: t.varchar("meetingPoint").notNull(),
  createdAt: t
    .timestamp("createdAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: t
    .timestamp("updatedAt", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const userProfile = pgTable("user_profile", {
  userId: t
    .text("user_id")
    .notNull()
    .primaryKey()
    .references(() => user.id, { onDelete: "cascade" }),
  phoneNumber: t.varchar("phoneNumber", { length: 255 }),
  gender: GenderEnum("gender"),
  createdAt: t
    .timestamp("createdAt", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: t
    .timestamp("updatedAt", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const booking = pgTable(
  "booking",
  {
    id: t.uuid("id").primaryKey().defaultRandom().notNull(),
    userProfileId: t
      .text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    participants: t.integer("participants").notNull(),
    expeditionId: t
      .uuid("expedition_id")
      .notNull()
      .references(() => expedition.id, { onDelete: "cascade" }),
    specialRequest: t.varchar("special_request").default(""),
    createdAt: t
      .timestamp("createdAt", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: t
      .timestamp("updatedAt", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    bookingIndex: t.index("booking_index").on(table.id),
    uniqueUserBookedExpedition: t
      .uniqueIndex("booking_user_expedition_unique")
      .on(table.expeditionId, table.userProfileId),
  }),
);

export const favorites = pgTable(
  "favorites",
  {
    userId: t
      .text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    expeditionId: t
      .uuid("expedition_id")
      .notNull()
      .references(() => expedition.id, { onDelete: "cascade" }),
    createdAt: t
      .timestamp("createdAt", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: t
      .timestamp("updatedAt", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    pk: t.primaryKey({ columns: [table.userId, table.expeditionId] }),
  }),
);

export const userGuideRelations = relations(user, ({ one }) => ({
  guide: one(guide),
}));

export const guideRelations = relations(guide, ({ one }) => ({
  user: one(user, { fields: [guide.userId], references: [user.id] }),
  expedition: one(expedition, {
    fields: [guide.expeditionId],
    references: [expedition.id],
  }),
}));

export const userRelations = relations(user, ({ one, many }) => ({
  profile: one(userProfile),
  favorites: many(favorites),
}));

export const userProfileRelations = relations(userProfile, ({ one }) => ({
  user: one(user, { fields: [userProfile.userId], references: [user.id] }),
}));

export const expeditionsRelations = relations(expedition, ({ one, many }) => ({
  exp: one(guide),
  favorites: many(favorites),
}));

export const favoritesRelations = relations(favorites, ({ one }) => ({
  user: one(user, { fields: [favorites.userId], references: [user.id] }),
  expedition: one(expedition, {
    fields: [favorites.expeditionId],
    references: [expedition.id],
  }),
}));

export type User = InferSelectModel<typeof user>;
export type UserProfile = InferSelectModel<typeof userProfile>;
export type Guide = InferSelectModel<typeof guide>;
export type Expedition = InferSelectModel<typeof expedition>;
export type Schedule = InferSelectModel<typeof schedule>;
export type Booking = InferSelectModel<typeof booking>;
