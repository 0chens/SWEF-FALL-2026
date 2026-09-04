# Pre-work: Databases

Class **is** the lecture (what a database is, ERDs, keys, relationships) plus a **Supabase** demo — including how to create a table. This pre is only setup and context so you are not creating an account during the demo.

Budget ~**20–25 minutes**. Do not build tables or write SQL before class.

---

## What you’ll be able to do after this

- Explain why the Books API array and hardcoded login credentials are not a real database
- Know the words we will use in class: table, row, column, primary key, foreign key
- Have a **free Supabase project** ready (logged in, project finished provisioning)
- Recognize Table Editor, SQL Editor, and where project URL / API keys live

---

## 1. Why apps need a database (Required, ~8 min)

In [week 4](../../04-api/), the Books API stored books in a JavaScript array. Restart the server and the data is gone. In [week 5 homework](../../05-backend2/hw/README.md), login used hardcoded username/password because you had not learned databases yet.

A **database** is a structured collection of data that lives outside your process: it survives restarts, can be queried, and can be shared by many users. Instagram profiles, Shopify orders, and hospital records are all databases. A spreadsheet can hold a small list; a database is what you use when the app has to stay correct as it grows.

Watch these (about 5 minutes total):

- [SQL Explained in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=zsjvFFKOm3c)
- [Supabase in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=zBZgdTb-dns)
- [Getting Started with Supabase Database](https://www.youtube.com/watch?v=C9kJwxhdw9A)

**Takeaway:** data lives in **tables** (rows + typed columns). **SQL** is how you talk to a relational database. **Supabase** is hosted [Postgres](https://www.postgresql.org/) plus a dashboard, auto-generated APIs, and auth — so you do not install Postgres on your laptop for this class.

We will teach design (ERDs, cardinality, keys) and then create something in Supabase together. You do **not** need to memorize SQL syntax.

---

## 2. Words you will hear in class (Required, ~5 min)

Read this once. Class fills in the rest.

| Term | Meaning |
| --- | --- |
| **Table** | One kind of thing (students, orders, books). Looks like a spreadsheet. |
| **Row** | One record (one student, one order). |
| **Column** | One field, with a type (`text`, `int`, `timestamptz`, …). |
| **Primary key** | Unique id for a row. Often `id`. |
| **Foreign key** | A column that points at another table’s primary key (an order stores `customer_id`). |
| **Relationship** | How tables connect: one-to-one, one-to-many, many-to-many. |
| **ERD** | A picture of entities, attributes, and relationships *before* you build tables. |
| **Postgres** | The relational database under every Supabase project. |

**Takeaway:** class is design first (what should exist, how it links), then we build a table in the dashboard.

---

## 3. Set up Supabase (Required, ~10–12 min)

Create the project. Do **not** create tables — that is the in-class demo.

Official docs (skim, do not work through a tutorial):

| Resource | Use it for |
| --- | --- |
| [Supabase Dashboard](https://supabase.com/dashboard) | Sign up and create a project |
| [Getting started](https://supabase.com/docs/guides/getting-started) | Map of official guides if you get lost |
| [Database overview](https://supabase.com/docs/guides/database/overview) | What a project gives you: real Postgres, Table Editor, SQL Editor |
| [Tables and data](https://supabase.com/docs/guides/database/tables) | How tables work in Supabase (we will do this live) |
| [API keys](https://supabase.com/docs/guides/api/api-keys) | Where URL + keys live; do not commit them |

### 3a. Account + project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard) and sign up (GitHub login is fine).
2. Create an organization if it asks (any name).
3. **New project**:
   - Name it something like `swef-databases`
   - Set a database password and **save it** (password manager / notes — not this repo)
   - Pick a region close to you
   - Free plan
4. Wait until the project is **ready** (usually 1–2 minutes). Do not leave class as the first time this spinner runs.

If a free project later shows as **paused**, open it and restore it before session.

### 3b. Dashboard overview (look, do not build)

Open the project and find these in the left sidebar so the demo is not new names:

- **Table Editor** — spreadsheet-style view. This is where we will create a table in class.
- **SQL Editor** — run Postgres (`select`, `insert`, …) when we get there.
- **Authentication** — users. We are not setting this up before class.
- **Project Settings** (gear) or **Connect** — project URL and API keys.

You do **not** need to write app code, add columns, or insert rows yet. Leave the project empty.

**Keys:** never commit them, never paste them in Slack or a homework README. Same rule as the OpenAI key in week 4.

Bring a laptop with this project open (or ready to log in) for the demo.

---

## Extra (optional)

Only if you finish early. Not required for class, and still do **not** pre-build the demo table.

| Resource | When |
| --- | --- |
| [PostgreSQL in 100 Seconds](https://www.youtube.com/watch?v=n2Fluyr3lbc) | You want 2 more minutes on why Postgres |
| [Use Supabase with Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) | After class, if you want to query a table from an app |
| [React user-management tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-react) | Longer official build (auth + table) |
| [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) | “Who is allowed to read this row?” — we may mention this in the demo |
| [Supabase docs home](https://supabase.com/docs) | Search anything else |

---

## Checklist

- [ ] Watched SQL 100 Seconds + Supabase 100 Seconds
- [ ] Can say in one sentence why an in-memory array is not a database
- [ ] Know table / row / column / primary key / foreign key well enough to follow the slides
- [ ] Supabase account + Free project created and finished provisioning
- [ ] You know where Table Editor, SQL Editor, and API keys are
- [ ] You did **not** create tables yet (save that for class)
