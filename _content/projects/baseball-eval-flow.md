---
tags:
  - tag: _content/tags/airflow.md
  - tag: _content/tags/data-engineering.md
  - tag: _content/tags/machine-learning.md
title: Baseball Stats ETL and Prediction Flow
sub_head: A baseball stats project that uses data engineering and machine learning for predictive analytics
featured_image: /uploads/compressed/2048px-Zack_Greinke.jpg
caption: Zack Greinke, 2009 / Keith Allison on Flickr
project_web_link: ""
project_repo_link: "https://github.com/toofarm/baseball-eval-flow"
additional_images: []
highlighted: true
date_created: 2026-02-13T08:00:00.000Z
date_updated: 1970-01-01T00:00:00.000Z
---

With baseball and data on the brain, I decided to jump into a data engineering project that uses machine learning to create a predictive pipeline for MLB player performance. 

Let's dive in.

# Tools and concept

Major League Baseball maintains a [public-facing API](https://baseballsavant.mlb.com/csv-docs) that provides player stats on a game-by-game basis. This data isn't as rich as the stuff you have to pay for, but it's still detailed enough to extrapolate the major advanced metrics used for player evaluation. 

Starting with the raw MLB data, I wanted to set up an end-to-end data engineering pipeline that ingests game data, cleans it, calculates advanced metrics, then uses machine learning to predict the evolution of these metrics over time.

## The stack

I chose the following tools to create my application

- [Apache Airflow](https://airflow.apache.org/) (ETL and orchestration)
- [PostgreSQL](https://www.postgresql.org/) (Database)
- [Scikit-Learn](https://scikit-learn.org/stable/index.html) (Python machine learning library)
- [Docker Compose](https://docs.docker.com/compose/) (Containerization and dev env)

### Apache Airflow

An industry standard for ETL and ELT flows, I chose Airflow because I can host it locally, and it provides a clean "Pythonic" API for orchestrating data.

### PostgreSQL

This one was a no-brainer. For a read-heavy system built for data analysis, PostgreSQL is the clear choice.

### Scikit-Learn

I wanted a Python ML library that was (relatively) lightweight and ergonomic; Scikit-Learn checks both boxes.

### Docker Compose

Docker Compose serves as a robust containerization engine for local dev, even if the Airflow Docker distribution threatens to melt your CPU.

# Project structure

## Database

Since this project is built for data analysis, and depends heavily on a core group of metrics, I decided to organize my database using a [star schema](https://en.wikipedia.org/wiki/Star_schema).

A star schema organizes data into a central "fact" table, with foreign keys to various "dimension" tables, which contain metadata. This structure helps keep joins to a minimum when running queries.

Since my project dealt with player performance data on a game-by-game basis, I made player performance by game my central "fact", then created dimension tables for games, player metadata, teams, and dates.

## ETL flow

My app contains two [DAGs](https://www.geeksforgeeks.org/dsa/introduction-to-directed-acyclic-graph/), one of which pulls, cleans, and loads data from the MLB API, the  other of which references this data to make predictions about player performance.

![](/uploads/baseball-eval-architecture.jpg)

### Player Stats Pipeline

Running at 2AM UTC each day, this pipeline polls the MLB API for fresh game data, extracts player performance, game, and team data from that payload, then transforms it for load into our database.

As mentioned above, my database for this project is organized via a star schema. This is obviously different than the format in which the MLB offers game data, so prior to loading it into my database, I have organize player stats by game, calculate player advanced metrics, and extract my dimension data for insertion into its appropriate tables.

In order to insure my data integrity, I validate my payload after calling the API, and after each transform. This also helps guarantee that my DAG remains idemponent — returning the same results for each date range, each time the process is called. 

### Prediction Pipeline

After I've loaded player performance data for the day, my prediction pipeline will look at that data and use it to make a prediction about each player's performance in the upcoming day's games.

Like my Player Stats pipeline, my prediction pipeline first checks for data freshness before going about its work. In the case that my database contains no data for the previous day, the pipeline aborts.

To start out with, I set my pipeline up to train toward a pair of key metrics: [Weighted On-Base Average (wOBA)](https://library.fangraphs.com/offense/woba/) for batters and [Fielding Independent Pitching (FIP)](https://library.fangraphs.com/pitching/fip/) for pitchers. 

A full analysis of why these metrics are effective for player performance prediction is outside the scope of this post, but it's fascinating stuff and I recommend you check it out; for the moment, just know that wOBA measures a player's omnibus offensive effectiveness and FIP measures a pitcher's effectiveness in a vacuuum, minus the contributions or faults of the remainder of his team.

Once the Prediction Pipeline has formulated its prediction, this prediction is uploaded to the database and the pipeline run is complete.

# Fine-tuning and refactors

Having laid out the basis of my pipelines, I went back and made a few changes to make the pipelines more robust and performant. 

- ### Error handling 
  Uses Airflow's `on_failure_callback` hook to send email notifications that inform me whenever a pipeline run fails.

- ### Move advanced metric calculations to server
  In an effort to reduce my pipelines' runtime, I moved the calculation of my advanced metrics out of Python and into a server-side process that runs using SQL. This will help offload expensive computations to cloud servers once in production.

- ### Account for empty payloads
  One problem I encountered immediately when backfilling my data was what to do with days on which there were no games played, for which the MLB's API returns an empty array with a 200 response code. I wrote fail-safes into both my pipelines to abort in the case of a day on which there are no games.

- ### Create pipeline audit table
  I added a table to record metadata about each of my pipeline runs (date, pipeline, success v. failure, etc.) in case I need to go back and audit later for failure points.

# Future state

With the basics of my application in place, it's time to think about where the project can go from here. 

- ### Host and start recording data
  This is the obvious one. I haven't uploaded this project to cloud hosting yet because of the costs, but I'd like to set it up on Digital Ocean App Platform, with a connection to Snowflake to hold the project's data. 

- ### Tune ML implementation
  In the initial phase of this project, I focused primarily on ETL. I'd like to go back and fine-tune the predictive modeling by experimenting with different weights, traning towards different metrics, and setting multiple ML algorythms to work on the same project.

- ### Set up "self-healing" pipelines
  Implement generative AI tools to proactively fix pipelines in the event of a failure.

And that's it for Baseball Eval 1.0. I'll write a new post once the MLB season starts outlining how the app performed, and detailing any adjustments I made as a result.


