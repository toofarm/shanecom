---
tags:
  - tag: _content/tags/airflow.md
  - tag: _content/tags/data-engineering.md
  - tag: _content/tags/machine-learning.md
title: Doing marketing ETL the right way
sub_head: Towards a better marketing data future for us all
featured_image: /uploads/compressed/river-of-borgvik.jpg
caption: LG Nyqvist, 2014 / Wikimedia Commons
project_web_link: ""
project_repo_link: "https://github.com/toofarm/marketing-attribution"
additional_images: []
highlighted: true
date_created: 2026-02-28T08:00:00.000Z
date_updated: 1970-01-01T00:00:00.000Z
---

Having worked with marketing data for far too long, I'm continually impressed by the level of disorder into which these datasets can fall.

As a case study, and a roadmap for fellow travelers, I've sketched out my ideal marketing data ETL/ELT flow. This flow requires adaptation to each team's needs, but I think it serves as a solid baseline. The goal here is to have data that is consistent and amenable to patches and reruns, which, as we all know, are wont to occur.

## Key concepts

### Idempotency

Any ETL system should design towards idempotency — the concept that repeating an operation should result in the same output — but this is especially true for systems that deal with marketing data. Meta and Google both update key attribution metrics on a rolling basis, meaning you'll have to rerun extractions periodically.

### Fault tolerance

Failure emails and Slack or Teams integrations aren't nice-to-haves — they're core, day-one features for this system. Airflow provides a failure callback system out of the box, so wiring up failure monitoring is as simple as managing an API call.

### Self documentation

In addition to formal documentation, the pipeline should document itself. When things break, it's important that whoever is on call be able to diagnose the problem and identify its source in the codebase.

## The stack

- ### [Airflow](https://airflow.apache.org/) - Data ingestion 
  I like Airflow because it allows you to write extraction logic in pure Python. Having a hosted UI for team members to monitor is also a boon, as are the plethora of helpers and plugins in the Airflow ecosystem. I've worked on teams that viewed Airflow as too cumbersome to warrant the time investment, but ETL flows that grow beyond even a couple simple transactions start to hurt for Airflow's convenience rather quickly.
- ### [dbt](https://www.getdbt.com/) - In-database data cleaning and transformations
  I like dbt because it obligates your data warehouse to be self-documenting. dbt's transformation logic lives in SQL, so tables describing each stage of your data transformation have documentation directly in version control. This code runs on the database level, typically in a cloud computing environment, so even costly transformations have access to plenty of compute.
- ### [PostgreSQL](https://www.postgresql.org/) - Relational database
  Though in production you'd likely store your data in Snowflake or another cloud-based data store, my example repo uses PostgreSQL. If you're hand-rolling a data warehouse, or if your team just doesn't want to invest in cloud storage, do yourself a favor and use Postgres; Postgres works wonders for a read-heavy system, and allows you to store raw inputs in [JSONB](https://www.geeksforgeeks.org/postgresql/what-is-jsonb-in-postgresql/), which I guarantee will come in handy at some point. 

## Picking over the details

A couple of key codebase features help support the concepts outlined above.

### Incremental updates

In [`dbt/models/marts`](https://github.com/toofarm/marketing-attribution/tree/main/dbt/models/marts), I've set up my SQL queries to update records incrementally, meaning the scripts will not blindly append rows to the database, but will instead update existing records where appropriate.

Avoiding the creation of duplicate rows forms a key tenant of idempotentcy; you obviously don't want to be reporting on ad performance or training an ML algorithm with duplicative data. At the same time, you want to be sure that you can safely update attribution metrics for existing database records. Incremental updates help achieve both these goals.

### Type safety

A feature that I see underutilized in Python codebases is the ability to create custom types. Type guarding your payload and response shapes makes it harder to introduce typos or bugs into the ingestion flow.

Plus, type definitions have the added benefit of self-documenting the project.

### Testing

This can perhaps be assumed, but you should test everything. In my sample repo, I test my hoisted Python logic using `pytest` and my intermediate dbt tables via SQL queries that live in [`dbt/tests/`](https://github.com/toofarm/marketing-attribution/tree/main/dbt/tests).

## Extra juice

Since machine learning algos serve as primary end consumers for much of today's data, I thought I'd add a small ML implementation to my sample repo.

My `ml/` directory demonstrates how to use the data from our ETL pipeline to feed an implementation of Scikit-Learn's Ridge model. This model predicts campaign efficiency based extant campaign metrics. New data feeds to the model, which will better fit to our dataset over time.

## How this makes life easier

Marketing data, in my experience, suffers from two principal issues — lack of uniformity and susceptibility to error.

Lack of uniformity has obvious causes: different vendors use different data taxonomies, different terms, offer different levels of insight, etc. Harmonizing this data into a single shape can sometimes feel akin to translating an idiom into a foreign language.

Susceptibility to error also emerges from the ramshackle nature of most marketing operations. In the course of supporting a digital marketing strategy, you're likely to work with half-a-dozen vendors, an A/B testing tool, an analytics suite, and a tag manager. All of these facets of the digital marketing stack represent potential points of failure; if you're lucky, you'll have direct control over maybe half of them.

Which leads me to my central argument here: ETL is the one location in which you have complete control of your data. You can gain a holistic view of what's going on, exercise direct control over your data shape, and proactively combat data loss or corruption. Given how essential your ETL pipeline can be, it's wild the extent to which teams under-invest in this part of their operation. ETL isn't just moving things from one place to another, it's your marketing team's sewage treatment plant. I can't speak for you, but I at least feel heavily invested in my local sewage treatment plant's healthy operation.

Making sure that data ingestion is healthy, well-documented, and ready to withstand errors or reruns can introduce regularity into a infamously tempermental ecosystem. And better data means better campaigns, happier clients, and a more peaceful existence in general. 