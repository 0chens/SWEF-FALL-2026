# Lesson 6: Database Design

> The [pre](pre/README.md) is **not** the lecture. Do it anyway: account + an empty project so the Supabase demo is not your first time creating an account. Budget ~**20–25 minutes**. Do not create tables before class.

## Overview

This week is how data is *designed* and where it *lives*. Class walks the slides: what a database is, databases vs spreadsheets, the three design stages, entities/attributes, ERDs, relationships, and primary/foreign keys. Then the activity takes week 4’s books object, iterates the schema, and builds it in **Supabase**.

You already felt the gap: week 4’s Books API used an array that resets; week 5 login hardcoded credentials. After this session you should be able to sketch a small schema and open it in Supabase.

## Agenda

1. **Full-stack recap (~5 min)** — where the database sits (UI → API / services → data)
2. **Lecture (~20–25 min)** — database vs spreadsheet, design stages, ERDs, cardinality, keys. Questions from [pre](pre/README.md)
3. **Activity (~25 min)** — one ERD pass on week 4’s books, then build `authors` + `books` in Supabase together
4. **Wrap-up** — homework + project-group / 2:1 logistics announced in class

## Class Activity

[activity/BOOKS_DATABASE.md](activity/BOOKS_DATABASE.md) — design the books schema, then follow along in Supabase.

## What you should know coming in

- Why restarting Express wipes an in-memory array
- Table / row / column / primary key at a high level
- A Supabase project already created and ready (empty is fine — we build the tables in class)

## Homework

Announced in class (due the following Saturday). Meet with your project group; sign up for 2:1s as instructed.
