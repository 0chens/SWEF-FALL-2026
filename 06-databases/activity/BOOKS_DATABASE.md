# Activity: Books, but a real database (~25 minutes)

Week 4 stored books in an array: `{ id, title, author, read }`. Today you **sketch** a better design, then **build** two tables in the Supabase project from [pre](../pre/README.md).

Follow along. Draw on paper or [`notes.md`](../notes.md). Do not create tables until section 3 — we do that together.

---

## Goal

1. An ERD with `authors` and `books`, not one flat book object
2. You can say the relationship (one-to-many) and which column is the foreign key
3. Those two tables exist in your Supabase project with a couple of rows

**Not today:** readers, join tables, Express, Next.js.

---

## Timeline

| Time | What |
| --- | --- |
| 0–8 min | Week 4 object → one change → new ERD |
| 8–10 min | Lock the schema |
| 10–25 min | Supabase: `authors`, `books`, a few rows |

---

## 1. Design (~8 min)

This is what you already shipped:

```js
{ id: 1, title: "Clean Code", author: "Robert C. Martin", read: false }
```

Draw **v1**: one entity, `Book`, those attributes. `id` is the primary key.

**Change:** authors are people. We want a short **bio**, and “every book by this author,” without pasting the same name onto every book row.

Redraw:

- What new entity did you add?
- Is author → books one-to-one, one-to-many, or many-to-many?
- Which table gets the **foreign key**?

If `author` is still a text field on `Book`, you are not done.

(`read` on the book is messy if more than one person uses the catalog. We are not modeling that today.)

---

## 2. Lock the schema (~2 min)

This is what we all build:

```
authors  1 ────────<  books
```

| Table | Columns |
| --- | --- |
| `authors` | `id` (PK), `name` (text), `bio` (text, optional) |
| `books` | `id` (PK), `title` (text), `author_id` (FK → `authors.id`) |

One author, many books. No `read` column. No author name string on `books`.

---

## 3. Supabase follow-along (~15 min)

Open your project: [supabase.com/dashboard](https://supabase.com/dashboard).

Table Editor. Click with us (or keep going if you are ahead — same names). Leave RLS on if it asks; no policies today.

Names: lowercase, underscores (`author_id`, not `Author ID`).

Docs if the UI moved: [Tables and data](https://supabase.com/docs/guides/database/tables).

### `authors`

1. **Table Editor** → **New table** → `authors`
2. Keep the default `id` primary key
3. Column `name`, type `text`, required
4. Column `bio`, type `text`, optional
5. **Save**

### `books`

1. **New table** → `books`
2. Keep `id`
3. Column `title`, type `text`, required
4. Column `author_id`, type **int8**
5. Make `author_id` a **foreign key** to `authors.id` (chain-link / add relation on that column)
6. **Save**

Create `authors` first. `books` cannot point at a table that does not exist yet.

### Rows + check

**Insert row**, in this order:

1. Two authors — e.g. `Robert C. Martin` and `Martin Kleppmann` (bio optional)
2. Two books — `Clean Code` and `Designing Data-Intensive Applications`, each with the matching **`author_id`** (the number from `authors`, not the name)

**SQL Editor** → Run:

```sql
select * from authors;
select * from books;
```

Optional:

```sql
select books.title, authors.name as author
from books
join authors on authors.id = books.author_id;
```

Restarting your laptop does not wipe this. That is the difference from week 4.

---

## Done when

- [ ] ERD has `authors` and `books`, not one flat `Book`
- [ ] You can point at `author_id` and say “many books, one author”
- [ ] Both tables exist; `select * from books;` shows rows that store an id, not an author String
